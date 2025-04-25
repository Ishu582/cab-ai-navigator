
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, CalendarClock, MapPin, TrendingUp } from "lucide-react";

interface BookingPattern {
  day_of_week: number;
  hour_of_day: number;
  common_pickup: string;
  common_destination: string;
  prediction_confidence: number;
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Tracking = () => {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  const { data: patterns, isLoading } = useQuery({
    queryKey: ['bookingPatterns'],
    queryFn: async () => {
      if (!session?.user?.id) return [];
      
      const response = await supabase.functions.invoke('predict-booking-patterns', {
        body: { user_id: session.user.id }
      });

      if (response.error) throw response.error;
      return response.data.predictions || [];
    },
    enabled: !!session?.user?.id
  });

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-24">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-600">Please log in to view your booking patterns.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Real-Time <span className="gradient-text">Tracking</span>
          </h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Your Booking Patterns
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-cab-purple" />
                </div>
              ) : patterns?.length ? (
                <div className="space-y-6">
                  {patterns.map((pattern: BookingPattern, index: number) => (
                    <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <CalendarClock className="h-5 w-5 text-cab-purple" />
                          <span className="text-gray-600">
                            {daysOfWeek[pattern.day_of_week]} at {pattern.hour_of_day}:00
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-cab-purple" />
                          <span className="text-gray-600">
                            {pattern.common_pickup} → {pattern.common_destination}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="text-sm text-gray-500">Prediction Confidence</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-cab-purple h-2 rounded-full" 
                            style={{width: `${pattern.prediction_confidence}%`}}
                          />
                        </div>
                        <div className="text-right text-sm text-gray-500 mt-1">
                          {Math.round(pattern.prediction_confidence)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600 py-8">
                  No booking patterns found yet. Make some bookings to see predictions!
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
