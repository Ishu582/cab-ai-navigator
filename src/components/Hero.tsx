
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-white to-cab-soft-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Smart Rides with <span className="gradient-text">AI-Powered</span> Predictions
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Book rides with confidence using our AI prediction technology that estimates cab availability and arrival times with remarkable accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-cab-purple hover:bg-cab-dark-purple text-white px-8 py-6 text-lg" 
                asChild
              >
                <a href="#book">
                  Book Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-cab-purple text-cab-purple hover:text-cab-dark-purple px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-cab-purple/10 to-cab-bright-blue/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-16 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg flex items-center px-4 mb-24">
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-3 pulse-dot"></div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">AI Prediction</div>
                      <div className="text-xs text-gray-500">Cab arriving in 3 mins</div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 bg-white/80 backdrop-blur-sm p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Your ride is on its way</p>
                        <p className="text-sm text-gray-500">Mercedes E-Class • ABC 123</p>
                      </div>
                      <div className="bg-cab-purple/20 text-cab-purple font-medium px-3 py-1 rounded-full text-sm">
                        3 min
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-20 w-16 h-8 bg-cab-black rounded-md animate-car-move">
                  <div className="absolute -top-1 left-2 right-2 h-2 bg-cab-black rounded"></div>
                  <div className="absolute bottom-1 left-3 w-2 h-2 bg-cab-red rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-r from-cab-purple/30 to-cab-bright-blue/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-r from-cab-bright-blue/20 to-cab-purple/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
