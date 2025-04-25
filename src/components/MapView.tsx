
import { useState, useEffect } from 'react';

const MapView = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // This would normally load a real map with API integration
  // For now, we'll simulate a map with a placeholder
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Live <span className="gradient-text">Cab Locations</span></h2>
          <p className="text-gray-600">See available cabs near you, updated in real-time</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video bg-white rounded-xl shadow-lg overflow-hidden relative">
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-pulse flex flex-col items-center">
                  <div className="w-16 h-16 bg-cab-purple/30 rounded-full mb-4"></div>
                  <div className="h-4 w-32 bg-cab-purple/30 rounded mb-3"></div>
                  <div className="h-3 w-24 bg-cab-purple/20 rounded"></div>
                </div>
              </div>
            )}
            
            {isLoaded && (
              <div className="absolute inset-0 bg-cab-soft-blue/10">
                <div className="absolute w-full h-full">
                  {/* Main streets */}
                  <div className="absolute top-1/4 left-0 right-0 h-4 bg-gray-200"></div>
                  <div className="absolute top-2/4 left-0 right-0 h-4 bg-gray-200"></div>
                  <div className="absolute top-3/4 left-0 right-0 h-4 bg-gray-200"></div>
                  <div className="absolute left-1/4 top-0 bottom-0 w-4 bg-gray-200"></div>
                  <div className="absolute left-2/4 top-0 bottom-0 w-4 bg-gray-200"></div>
                  <div className="absolute left-3/4 top-0 bottom-0 w-4 bg-gray-200"></div>
                  
                  {/* Cab locations */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 animate-pulse-light"></div>
                  <div className="absolute top-2/3 left-3/4 w-4 h-4 bg-yellow-400 rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 animate-pulse-light"></div>
                  <div className="absolute top-3/4 left-1/3 w-4 h-4 bg-yellow-400 rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 animate-pulse-light"></div>
                  
                  {/* User location */}
                  <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-cab-purple rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 border-2 border-white pulse-dot"></div>
                  
                  {/* Building blocks */}
                  <div className="absolute top-[15%] left-[15%] w-[15%] h-[15%] bg-gray-300 rounded-sm"></div>
                  <div className="absolute top-[15%] left-[35%] w-[10%] h-[20%] bg-gray-300 rounded-sm"></div>
                  <div className="absolute top-[15%] left-[65%] w-[15%] h-[15%] bg-gray-300 rounded-sm"></div>
                  <div className="absolute top-[40%] left-[15%] w-[15%] h-[10%] bg-gray-300 rounded-sm"></div>
                  <div className="absolute top-[60%] left-[15%] w-[10%] h-[15%] bg-gray-300 rounded-sm"></div>
                  <div className="absolute top-[60%] left-[35%] w-[15%] h-[15%] bg-gray-300 rounded-sm"></div>
                  <div className="absolute top-[40%] left-[65%] w-[10%] h-[15%] bg-gray-300 rounded-sm"></div>
                  <div className="absolute top-[60%] left-[65%] w-[15%] h-[10%] bg-gray-300 rounded-sm"></div>
                </div>
                
                {/* Legend */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
                  <div className="text-sm font-medium mb-2">Map Legend</div>
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 bg-cab-purple rounded-full mr-2"></div>
                    <span className="text-xs">Your Location</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <span className="text-xs">Available Cabs</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            Note: This is a simulated map for demonstration purposes. In a production app, this would integrate with real map APIs.
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapView;
