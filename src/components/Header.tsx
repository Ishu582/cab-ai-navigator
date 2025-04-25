
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Book Ride', path: '/#book' },
    { label: 'About', path: '/#about' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return location.hash === path;
    }
    return location.pathname === path;
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-cab-purple to-cab-bright-blue rounded-lg flex items-center justify-center text-white font-bold">GC</div>
          <h1 className="text-xl font-bold gradient-text">GoCorps</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`${
                isActive(item.path)
                  ? 'text-cab-purple'
                  : 'text-gray-700 hover:text-cab-purple'
              } transition-colors`}
            >
              {item.label}
            </Link>
          ))}
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-cab-purple'
                    : 'text-gray-700 hover:text-cab-purple'
                } py-2 transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-cab-purple hover:bg-cab-dark-purple w-full">Sign In</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
