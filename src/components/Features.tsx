
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const featuresList = [
    {
      icon: "🧠",
      title: "AI-Powered Predictions",
      description: "Our machine learning algorithms predict cab availability and arrival times with industry-leading accuracy."
    },
    {
      icon: "⏱️",
      title: "Real-Time Updates",
      description: "Get live updates on your cab's location and ETA, ensuring you're never left wondering."
    },
    {
      icon: "📊",
      title: "Smart Fare Estimates",
      description: "Know exactly how much your ride will cost before you book with our intelligent fare estimation."
    },
    {
      icon: "🌦️",
      title: "Weather Adaptation",
      description: "Our AI accounts for weather conditions when making predictions for more accurate arrival times."
    },
    {
      icon: "🔍",
      title: "Optimal Route Finding",
      description: "We analyze traffic patterns to find the fastest routes for efficient transportation."
    },
    {
      icon: "📱",
      title: "Seamless Booking",
      description: "Book your ride in seconds with our intuitive interface and minimal steps."
    }
  ];

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Powered by <span className="gradient-text">Advanced AI</span></h2>
          <p className="text-gray-600 max-w-lg mx-auto">Our technology uses machine learning to deliver a superior cab booking experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <Card key={index} className="border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:border-cab-purple/30">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
