
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // In a real implementation, this would send the form data to a server
  };

  return (
    <PageLayout 
      title="Contact Us" 
      subtitle="Have questions or need support? We're here to help."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-8 text-gray-600">
            We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <Input id="name" placeholder="Your name" required />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <Input id="email" type="email" placeholder="Your email address" required />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
              <Input id="subject" placeholder="What is this regarding?" required />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" required />
            </div>
            
            <Button type="submit" className="w-full bg-cardnbg-blue">
              Send Message
            </Button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="mb-8 text-gray-600">
            If you prefer to reach out directly, you can contact us using the information below.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="mr-4 text-cardnbg-blue" />
              <div>
                <h3 className="font-medium">Email Us</h3>
                <p className="text-gray-600">support@cardncart.com</p>
                <p className="text-gray-600">partnerships@cardncart.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="mr-4 text-cardnbg-blue" />
              <div>
                <h3 className="font-medium">Call Us</h3>
                <p className="text-gray-600">Customer Support: +1 (800) 123-4567</p>
                <p className="text-gray-600">Business Inquiries: +1 (800) 765-4321</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="mr-4 text-cardnbg-blue" />
              <div>
                <h3 className="font-medium">Visit Us</h3>
                <p className="text-gray-600">
                  CardnCart Headquarters<br />
                  123 Commerce Street<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-medium mb-4">Business Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM PST</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
