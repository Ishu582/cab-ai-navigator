
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { user_id } = await req.json();

    // Create Supabase client
    const supabaseUrl = 'https://ymimecsuurziargyhjmr.supabase.co';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch user's booking history
    const { data: bookings, error: bookingsError } = await supabase
      .from('cab_bookings')
      .select('*')
      .eq('user_id', user_id)
      .order('scheduled_time', { ascending: false });

    if (bookingsError) throw bookingsError;

    // Simple pattern analysis
    const patterns = bookings.reduce((acc, booking) => {
      const date = new Date(booking.scheduled_time);
      const dayOfWeek = date.getDay();
      const hourOfDay = date.getHours();
      
      const key = `${dayOfWeek}-${hourOfDay}`;
      if (!acc[key]) {
        acc[key] = {
          count: 0,
          pickups: {},
          destinations: {}
        };
      }
      
      acc[key].count++;
      acc[key].pickups[booking.pickup_location] = (acc[key].pickups[booking.pickup_location] || 0) + 1;
      acc[key].destinations[booking.destination] = (acc[key].destinations[booking.destination] || 0) + 1;
      
      return acc;
    }, {});

    // Find most common patterns
    const predictions = Object.entries(patterns).map(([timeSlot, data]) => {
      const [day, hour] = timeSlot.split('-').map(Number);
      const mostCommonPickup = Object.entries(data.pickups)
        .sort(([,a], [,b]) => b - a)[0][0];
      const mostCommonDest = Object.entries(data.destinations)
        .sort(([,a], [,b]) => b - a)[0][0];
      
      return {
        user_id,
        day_of_week: day,
        hour_of_day: hour,
        common_pickup: mostCommonPickup,
        common_destination: mostCommonDest,
        prediction_confidence: (data.count / bookings.length) * 100
      };
    });

    // Update booking patterns
    if (predictions.length > 0) {
      // Delete old patterns first
      await supabase
        .from('booking_patterns')
        .delete()
        .eq('user_id', user_id);

      // Insert new patterns
      const { error: insertError } = await supabase
        .from('booking_patterns')
        .insert(predictions);

      if (insertError) throw insertError;
    }

    return new Response(JSON.stringify({ predictions }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
