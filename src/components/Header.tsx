
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-cab-purple to-cab-bright-blue rounded-lg flex items-center justify-center text-white font-bold">CA</div>
          <h1 className="text-xl font-bold gradient-text">CabAI Navigator</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-cab-purple transition-colors">Home</a>
          <a href="#book" className="text-gray-700 hover:text-cab-purple transition-colors">Book Ride</a>
          <a href="#about" className="text-gray-700 hover:text-cab-purple transition-colors">About</a>
          <a href="#features" className="text-gray-700 hover:text-cab-purple transition-colors">Features</a>
          <Button className="bg-cab-purple hover:bg-cab-dark-purple">Sign In</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-cab-purple py-2 transition-colors">Home</a>
            <a href="#book" className="text-gray-700 hover:text-cab-purple py-2 transition-colors">Book Ride</a>
            <a href="#about" className="text-gray-700 hover:text-cab-purple py-2 transition-colors">About</a>
            <a href="#features" className="text-gray-700 hover:text-cab-purple py-2 transition-colors">Features</a>
            <Button className="bg-cab-purple hover:bg-cab-dark-purple w-full">Sign In</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
