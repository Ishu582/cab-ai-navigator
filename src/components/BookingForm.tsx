
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface PredictionResult {
  waitTime: string;
  fare: string;
  availableCabs: number;
  etaMinutes: number;
}

const BookingForm = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const { toast } = useToast();

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call for prediction
    setTimeout(() => {
      setLoading(false);
      
      // Mock prediction result
      setPrediction({
        waitTime: "3-5 minutes",
        fare: "$12.50 - $15.00",
        availableCabs: 3,
        etaMinutes: 4
      });
      
      toast({
        title: "Prediction Complete",
        description: "We've found available cabs near your location.",
      });
    }, 1500);
  };

  const handleBookNow = () => {
    toast({
      title: "Ride Booked!",
      description: "Your cab is on the way. Driver will arrive in approximately 4 minutes.",
      variant: "default",
    });
  };

  return (
    <section id="book" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Book Your <span className="gradient-text">AI-Powered</span> Ride</h2>
            <p className="text-gray-600">Get accurate predictions and seamless booking experience</p>
          </div>
          
          <Card className="border border-gray-100 shadow-lg">
            <CardHeader>
              <CardTitle>Where would you like to go?</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="now" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="now">Ride Now</TabsTrigger>
                  <TabsTrigger value="later">Schedule Later</TabsTrigger>
                </TabsList>
                
                <TabsContent value="now">
                  <form onSubmit={handlePredict}>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-cab-purple" />
                        <Input
                          placeholder="Pickup Location"
                          value={pickup}
                          onChange={(e) => setPickup(e.target.value)}
                          required
                          className="border-gray-300 focus:border-cab-purple focus:ring-cab-purple"
                        />
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-cab-red" />
                        <Input
                          placeholder="Destination"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          required
                          className="border-gray-300 focus:border-cab-purple focus:ring-cab-purple"
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-cab-purple hover:bg-cab-dark-purple"
                        disabled={loading || !pickup || !destination}
                      >
                        {loading ? "Predicting..." : "Predict & Find Cabs"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="later">
                  <form onSubmit={handlePredict}>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-cab-purple" />
                        <Input
                          placeholder="Pickup Location"
                          value={pickup}
                          onChange={(e) => setPickup(e.target.value)}
                          required
                          className="border-gray-300 focus:border-cab-purple focus:ring-cab-purple"
                        />
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-cab-red" />
                        <Input
                          placeholder="Destination"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          required
                          className="border-gray-300 focus:border-cab-purple focus:ring-cab-purple"
                        />
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="flex items-center flex-1">
                          <Calendar className="mr-2 h-5 w-5 text-cab-purple" />
                          <Input
                            type="date"
                            placeholder="Date"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            required
                            className="border-gray-300 focus:border-cab-purple focus:ring-cab-purple"
                          />
                        </div>
                        
                        <div className="flex items-center flex-1">
                          <Clock className="mr-2 h-5 w-5 text-cab-purple" />
                          <Input
                            type="time"
                            placeholder="Time"
                            value={bookingTime}
                            onChange={(e) => setBookingTime(e.target.value)}
                            required
                            className="border-gray-300 focus:border-cab-purple focus:ring-cab-purple"
                          />
                        </div>
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-cab-purple hover:bg-cab-dark-purple"
                        disabled={loading || !pickup || !destination || !bookingDate || !bookingTime}
                      >
                        {loading ? "Predicting..." : "Predict & Schedule Cab"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
              
              {prediction && (
                <div className="mt-8 border-t pt-6 animate-fade-in">
                  <h3 className="font-bold text-lg mb-4">AI Prediction Results</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500">Estimated Wait Time</div>
                      <div className="font-bold text-lg">{prediction.waitTime}</div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500">Estimated Fare</div>
                      <div className="font-bold text-lg">{prediction.fare}</div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500">Cabs Available Nearby</div>
                      <div className="font-bold text-lg">{prediction.availableCabs} cars</div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500">ETA</div>
                      <div className="font-bold text-lg">{prediction.etaMinutes} minutes</div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleBookNow}
                    className="w-full mt-6 bg-green-600 hover:bg-green-700"
                  >
                    Book Now
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
