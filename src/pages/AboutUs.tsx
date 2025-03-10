
import React from 'react';
import PageLayout from '@/components/PageLayout';

const AboutUs = () => {
  return (
    <PageLayout 
      title="About Us" 
      subtitle="Learn about our mission, values, and the team behind CardnCart"
    >
      <div className="prose prose-lg mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2025, CardnCart began with a simple mission: to make online shopping accessible to everyone, 
            regardless of whether they have a credit card. Our founders recognized that millions of people worldwide 
            are excluded from the convenience of e-commerce due to lack of banking access or credit history.
          </p>
          <p>
            What started as a small team of three passionate innovators has now grown into a global company serving 
            customers across  India, with a dedicated team of over 20 professionals committed to revolutionizing 
            how people shop online.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            At CardnCart, we believe that everyone deserves access to the convenience and benefits of online shopping. 
            Our mission is to bridge the gap between traditional cash payments and digital commerce, providing innovative 
            solutions that allow anyone to shop online with confidence and security.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Inclusivity:</strong> We design our services to be accessible to everyone, regardless of their financial situation.</li>
            <li><strong>Security:</strong> We prioritize the protection of our customers' information and transactions above all else.</li>
            <li><strong>Transparency:</strong> We maintain clear, honest communication with our customers about our services and fees.</li>
            <li><strong>Innovation:</strong> We constantly seek new ways to improve the online shopping experience for our users.</li>
            <li><strong>Customer-First:</strong> Our decisions are guided by what best serves the needs of our customers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Vaibhav Jain</h3>
              <p className="text-gray-600 mb-2">Co-Founder & CEO</p>
              <p>With over 15 years in fintech, Vaibhav leads our strategic vision and global expansion efforts.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Harshad Bhosale</h3>
              <p className="text-gray-600 mb-2">Chief technology officer</p>
              <p>Harshad's expertise in payment systems and security architecture forms the backbone of our platform.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tushar Patki</h3>
              <p className="text-gray-600 mb-2">Chief Operations Officer</p>
              <p>Tushar ensures that our day-to-day operations run smoothly while maintaining our commitment to quality.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Parveen Yadav</h3>
              <p className="text-gray-600 mb-2">Chief Product Officer</p>
              <p>Parveen heads our product development, focusing on creating intuitive and accessible user experiences.</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
