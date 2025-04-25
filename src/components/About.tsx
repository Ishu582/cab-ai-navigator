
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">About <span className="gradient-text">CabAI Navigator</span></h2>
            <p className="text-gray-600 mb-4">
              CabAI Navigator is revolutionizing the ride-hailing industry by using cutting-edge artificial intelligence and machine learning to provide more accurate, reliable, and efficient cab booking services.
            </p>
            <p className="text-gray-600 mb-4">
              Our platform analyzes millions of data points including traffic patterns, weather conditions, time of day, and historical ride data to predict cab availability and arrival times with remarkable precision.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2023, we're on a mission to eliminate the uncertainty and frustration often associated with booking cabs, giving users more control and confidence in their travel plans.
            </p>
            <Button className="bg-cab-purple hover:bg-cab-dark-purple">Learn More</Button>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-cab-purple/10 to-cab-bright-blue/20 rounded-xl p-8 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl mb-2">98%</div>
                    <div className="text-sm text-gray-600">Prediction Accuracy</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl mb-2">2M+</div>
                    <div className="text-sm text-gray-600">Rides Completed</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl mb-2">4.9</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl mb-2">30s</div>
                    <div className="text-sm text-gray-600">Avg Booking Time</div>
                  </div>
                </div>
                <div className="mt-6 bg-white rounded-lg p-4 shadow-md">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">AI Prediction Accuracy</div>
                  <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div className="bg-gradient-to-r from-cab-purple to-cab-bright-blue w-[98%] h-full rounded-full"></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Jan 2023</span>
                    <span>Current</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-r from-cab-purple/20 to-cab-bright-blue/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-gradient-to-r from-cab-bright-blue/10 to-cab-purple/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
