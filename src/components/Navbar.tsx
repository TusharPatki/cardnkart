
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-4 pb-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3248742e-eb10-43d5-9e6d-3a15cde35013.png" 
              alt="CardnCart Logo" 
              className="h-10 w-auto mr-2" 
            />
            <span className="font-display font-bold text-xl tracking-tight">
              Card<span className="text-cardnbg-blue">n</span>Cart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="font-medium hover:text-cardnbg-blue transition-colors">Benefits</a>
            <a href="#how-it-works" className="font-medium hover:text-cardnbg-blue transition-colors">How It Works</a>
            <a href="#testimonials" className="font-medium hover:text-cardnbg-blue transition-colors">Testimonials</a>
            <a href="#faq" className="font-medium hover:text-cardnbg-blue transition-colors">FAQ</a>
            <button className="bg-cardnbg-blue hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition-all transform hover:scale-105">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#benefits" 
              className="font-medium hover:text-cardnbg-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#how-it-works" 
              className="font-medium hover:text-cardnbg-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="font-medium hover:text-cardnbg-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="font-medium hover:text-cardnbg-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Link 
              to="/about-us" 
              className="font-medium hover:text-cardnbg-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <button 
              className="bg-cardnbg-blue hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full transition-all w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
