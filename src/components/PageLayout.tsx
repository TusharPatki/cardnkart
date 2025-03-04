
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  fullWidth?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, subtitle, fullWidth = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className={fullWidth ? 'w-full' : 'container mx-auto px-4'}>
          {!fullWidth && (
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
              {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
            </header>
          )}
          
          <div className={fullWidth ? 'w-full' : 'max-w-4xl mx-auto'}>
            {children}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
