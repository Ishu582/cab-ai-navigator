
const Predictions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered <span className="gradient-text">Predictions</span>
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 mb-6">
              Our advanced machine learning algorithms analyze multiple data points including:
            </p>
            <ul className="space-y-4">
              {[
                "Historical ride data and patterns",
                "Real-time traffic conditions",
                "Weather impact on transportation",
                "Local events and gatherings",
                "Time-based demand fluctuations"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cab-purple"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Accuracy Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Arrival Time Prediction</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-cab-purple h-2 rounded-full" style={{width: "98%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Availability Forecast</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-cab-purple h-2 rounded-full" style={{width: "95%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Reduced waiting times",
                  "Better route optimization",
                  "Dynamic pricing adjustments",
                  "Improved driver allocation"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictions;
