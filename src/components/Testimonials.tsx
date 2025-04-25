
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Traveler",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "The prediction accuracy is amazing! I've never had to wait more than a minute from the estimated arrival time.",
    rating: 5
  },
  {
    name: "Mark Thompson",
    role: "Daily Commuter",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    quote: "CabAI Navigator has completely changed how I commute. The reliability and fare estimates are spot on every time.",
    rating: 5
  },
  {
    name: "Jennifer Lee",
    role: "Travel Enthusiast",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote: "I travel a lot for work, and this app has made getting around in new cities so much easier and more predictable.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What Our <span className="gradient-text">Users Say</span></h2>
          <p className="text-gray-600 max-w-lg mx-auto">Trusted by thousands of riders daily for reliable predictions and seamless booking</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cab-purple">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="text-center">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
