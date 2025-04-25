
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import MapView from "@/components/MapView";
import Features from "@/components/Features";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BookingForm />
        <MapView />
        <About />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
