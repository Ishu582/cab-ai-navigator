
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "AI-Powered Predictions",
      description: "Experience accurate arrival times and availability predictions powered by our advanced machine learning algorithms.",
      path: "/services/predictions",
      icon: "🧠",
      gradient: "from-purple-400 to-blue-500"
    },
    {
      title: "Real-Time Tracking",
      description: "Track your ride in real-time with live updates and precise ETA calculations.",
      path: "/services/tracking",
      icon: "⏱️",
      gradient: "from-green-400 to-cyan-500"
    },
    {
      title: "Smart Pricing",
      description: "Get transparent, AI-optimized fare estimates before booking your ride.",
      path: "/services/pricing",
      icon: "📊",
      gradient: "from-orange-400 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our <span className="gradient-text">Services</span>
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover how GoCorps is revolutionizing urban transportation with AI-powered solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title} 
              to={service.path}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg h-full`}>
                <div className="bg-white/90 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button 
                    variant="secondary" 
                    className="group-hover:bg-black group-hover:text-white transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
