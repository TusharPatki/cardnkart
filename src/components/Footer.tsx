
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cardnbg-darkBlue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-blue-800/30 pb-8 mb-8">
          <div className="mb-8 md:mb-0">
            <a href="/" className="flex items-center mb-4 justify-center md:justify-start">
              <div className="bg-cardnbg-blue p-2 rounded-md mr-2">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Card<span className="text-cardnbg-blue">n</span>Cart
              </span>
            </a>
            <p className="text-blue-200 max-w-xs text-center md:text-left">
              Shop online without a credit card. Save big on thousands of exclusive deals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4">Download</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">iOS App</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Android App</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Browser Extension</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CardnCart. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
