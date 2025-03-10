import React from 'react';
import PageLayout from '@/components/PageLayout';

const TermsOfService = () => {
  return (
    <PageLayout 
      title="Terms of Service" 
      subtitle="Last Updated: March 1, 2025"
    >
      <div className="prose prose-lg mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>
            Welcome to CardnCart. These Terms of Service ("Terms") govern your use of our website, services, and products. 
            By accessing or using CardnCart, you agree to be bound by these Terms and our Privacy Policy.
          </p>
          <p className="mt-2">
            CardnCart provides a platform for you to make purchases without a credit card. We simplify the online shopping 
            experience while helping you manage your finances more effectively.
          </p>
          <p className="mt-2">
            If you do not agree to these Terms, you must not access or use our services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
          <p>
            "Account" means a unique account created for you to access our Service or parts of our Service.
          </p>
          <p className="mt-2">
            "Company", "We", "Us", or "Our" refers to CardnCart, the provider of the Service.
          </p>
          <p className="mt-2">
            "Content" refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content.
          </p>
          <p className="mt-2">
            "Device" means any device that can access the Service such as a computer, a cellphone or a digital tablet.
          </p>
          <p className="mt-2">
            "Service" refers to the Website, the mobile application, and any other related services provided by CardnCart.
          </p>
          <p className="mt-2">
            "Terms" mean these Terms of Service that form the entire agreement between You and the Company regarding the use of the Service.
          </p>
          <p className="mt-2">
            "Website" refers to CardnCart, accessible from www.cardncart.com.
          </p>
          <p className="mt-2">
            "You" means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Eligibility</h2>
          <p>
            By registering with CardnCart and using our Services, you represent that:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>You are 18 years of age or older;</li>
            <li>You are capable of entering into a legally binding agreement;</li>
            <li>You are not barred or otherwise legally prohibited from accessing or using CardnCart or our Services.</li>
          </ul>
          <p className="mt-2">
            If you allow anyone to use your account, including individuals under 18 years of age, you will still be responsible for ensuring that such individuals comply with these Terms. You will be responsible for all actions these individuals take in and/or through your account.
          </p>
          <p className="mt-2">
            CardnCart reserves the right to revoke your access to our Services at our discretion. We may also suspend your account or your access to the same. As a registered User, in such an event, you may contact our support team for assistance.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Account Registration</h2>
          <p>
            To use certain features of the Service, you must register for an account. You must provide accurate, current, and complete information during the registration process and keep your account information up-to-date at all times.
          </p>
          <p className="mt-2">
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Your Use of CardnCart</h2>
          <p>
            When you use our Services, you represent that:
          </p>
          <ol type="a" className="list-[lower-alpha] pl-5 mt-2 space-y-2">
            <li>Your use of our Services shall not violate any applicable law or regulation;</li>
            <li>All registration information you submit is truthful, complete, and accurate;</li>
            <li>You are responsible for all activity that occurs under your Account;</li>
            <li>Your use of the Services is for personal purposes only;</li>
            <li>You will not decompile, reverse engineer, disassemble, or remove any intellectual property rights from our Services;</li>
            <li>You will not access or use our Services in any manner that may be harmful to their operation;</li>
            <li>You will not use our Services in any way that is unlawful or harms CardnCart or any other person or entity;</li>
            <li>You will not post, distribute, or transmit any content that contains malicious software or could impair our Services;</li>
            <li>You will not delete or modify any content of our Services, including legal notices or disclaimers;</li>
            <li>You consent to receive necessary updates to ensure optimal performance of our Services.</li>
          </ol>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Purchases and Payments</h2>
          <p>
            CardnCart provides a platform for you to make purchases without a credit card. By using our services, you agree to pay all fees and charges associated with your account on a timely basis.
          </p>
          <p className="mt-2">
            All purchases made through CardnCart are subject to our payment processing terms. We partner with third-party payment processors to facilitate transactions, and your use of these services may be subject to additional terms and conditions.
          </p>
          <p className="mt-2">
            You understand that when you make a purchase, you are entering into a separate purchase agreement with the merchant providing the product or service. CardnCart is not responsible for the quality, safety, legality, or any other aspect of any products or services that you purchase using our platform.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Shipping and Delivery</h2>
          <p>
            We aim to deliver your orders promptly and efficiently. Orders are typically processed within 1-3 business days, and delivery times vary based on location:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Domestic orders: 3-7 business days</li>
            <li>International orders: 10-20 business days</li>
          </ul>
          <p className="mt-2">
            Shipping charges are calculated at checkout. Once shipped, you'll receive a tracking number to monitor your package. Please ensure your delivery address is accurate, as we cannot be held responsible for delays or failed deliveries due to incorrect information.
          </p>
          <p className="mt-2">
            If your package is damaged, lost, or delayed, contact our support team at support@cardncart.com, and we'll assist in resolving the issue.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Cancellations and Refunds</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">8.1 User-Initiated Cancellations:</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Users may cancel an order within 24 hours of placing it without incurring any charges.</li>
            <li>To cancel an order, please contact our customer support team at support@cardncart.com or through the support section in the app.</li>
            <li>Cancellations requested after 24 hours may be subject to a cancellation fee, depending on the order status.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">8.2 CardnCart-Initiated Cancellations:</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>CardnCart reserves the right to cancel any order due to unavailability of products, pricing errors, suspected fraud, or violation of our Terms of Service.</li>
            <li>In such cases, we will notify you promptly and issue a full refund if payment has been processed.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">8.3 Refund Process:</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Approved refunds will be processed within 21 working days from the date of cancellation.</li>
            <li>Refunds will be credited to the original payment method used for the transaction.</li>
            <li>In some cases, we may offer store credit or alternative compensation instead of a monetary refund.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">8.4 Non-Refundable Items:</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Certain items or services may be non-refundable, as specified at the time of purchase.</li>
            <li>Promotional discounts or rewards earned through the use of the app are generally non-refundable.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Chargebacks</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">9.1 Chargeback Process:</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Before initiating a chargeback with your bank or payment provider, we strongly encourage you to contact our customer support team to resolve any issues.</li>
            <li>If you initiate a chargeback, CardnCart reserves the right to suspend or terminate your account pending investigation.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">9.2 Chargeback Investigation:</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Upon receiving a chargeback notification, CardnCart will conduct an internal investigation.</li>
            <li>We may require additional information from you to assist in the investigation process.</li>
            <li>If the chargeback is found to be unwarranted, CardnCart reserves the right to contest it and provide evidence to the relevant financial institutions.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">9.3 Consequences of Fraudulent Chargebacks:</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Users found to be abusing the chargeback process or filing fraudulent chargebacks may have their accounts terminated and be banned from future use of CardnCart services.</li>
            <li>CardnCart may also pursue legal action in cases of repeated fraudulent chargebacks.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">10. Violation of Terms / Suspicious Activity</h2>
          <p>
            If we believe that you have violated any of the conditions as mentioned under these Terms or our Privacy Policy, we reserve the right to suspend your access to our Services and/or delete your Account without prior notice.
          </p>
          <p className="mt-2">
            If we have reason to believe that there is suspicious or unusual activity being carried out through your account, we may temporarily or permanently suspend your access to our Services. You may reach out to our support team to assist you with any query arising as a result of such suspension or deletion.
          </p>
          <p className="mt-2">
            You may end your legal agreement with CardnCart at any time by deactivating your account and discontinuing the use of our Services. We provide all users an option to request deletion of their account through the support section on our app or by contacting support@cardncart.com.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">11. Fraud Prevention Policy</h2>
          <p><strong>Purpose:</strong> To protect CardnCart, its users, and partners from fraudulent activities related to our payment and shopping services.</p>
          <p className="mt-2"><strong>Key Measures:</strong></p>
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li><strong>User Verification:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Implement robust KYC (Know Your Customer) procedures.</li>
                <li>Verify payment method ownership before allowing transactions.</li>
              </ul>
            </li>
            <li><strong>Transaction Monitoring:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Use AI-driven systems to detect unusual patterns.</li>
                <li>Set transaction limits and flagging criteria.</li>
              </ul>
            </li>
            <li><strong>Secure Data Handling:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Encrypt all sensitive user and transaction data.</li>
              </ul>
            </li>
            <li><strong>User Education:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Provide clear guidelines on safe app usage.</li>
                <li>Regularly update users on potential fraud schemes.</li>
              </ul>
            </li>
          </ol>
          <p className="mt-2"><strong>Consequences of Fraud:</strong></p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Immediate account suspension for suspected fraud.</li>
            <li>Permanent ban for confirmed fraudulent activities.</li>
            <li>Legal action in severe cases.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">12. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding Content provided by You or other users), features, and functionality are and will remain the exclusive property of CardnCart and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
          <p className="mt-2">
            Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of CardnCart.
          </p>
          <p className="mt-2">
            When you upload, submit, store, send or receive content to or through our Services, you give CardnCart a worldwide, perpetual license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display and distribute such content. This license continues even if you stop using our Services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">13. Privacy</h2>
          <p>
            We collect, hold, use and transfer your personal data in accordance with our Privacy Policy. By agreeing to these Terms of Use, you hereby agree to our Privacy Policy, which may be updated and/or modified by us from time to time.
          </p>
          <p className="mt-2">
            You understand and agree that, to the extent permitted by applicable law, any data provided by you in connection with our Services may be shared with our affiliates or partners, and/or used by us for enhancing our Services, including but not limited to creating new products.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">14. Disclaimer</h2>
          <p>
            The Services, including all content, software, functions, material, and information made available or accessible through the Services are provided "as is". CardnCart, its respective agents, co-branders or partners, make no representation and warranty of any kind for the content, software, functions, material, and information available/accessible through the Services.
          </p>
          <p className="mt-2">
            CardnCart does not warrant that the functions contained in content, information and materials on the Website or App, including, without limitation any third-party sites or services linked to our Services, will be uninterrupted, timely or error-free, that the defects will be rectified, or that our Services or the servers that make such content, information, and materials available are free of viruses or other harmful components.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">15. Limitation of Liability</h2>
          <p>
            In no event shall CardnCart, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Your access to or use of or inability to access or use the Service;</li>
            <li>Any conduct or content of any third party on the Service;</li>
            <li>Any content obtained from the Service; and</li>
            <li>Unauthorized access, use or alteration of your transmissions or content.</li>
          </ul>
          <p className="mt-2">
            In no event shall CardnCart's total cumulative liability to You in connection with our Services for all damages, losses and causes of action, arising from or relating to these Terms exceed the net fees CardnCart has actually received and retained from your valid transactions during the three (3) month period immediately preceding the date of the claim.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">16. Indemnity</h2>
          <p>
            You agree to defend, indemnify and hold harmless CardnCart, its officers, directors, employees and agents, partners, co-branders, licensors, licensees, consultants, contractors and other applicable third parties from and against any and all claims, demands, damages, obligations, losses, liabilities, cause of action, costs or debt, and expenses (including any legal fees) arising from:
          </p>
          <ol type="a" className="list-[lower-alpha] pl-5 mt-2 space-y-2">
            <li>your use of and access to our Services;</li>
            <li>your violation of any of these Terms;</li>
            <li>your violation of any third party right, including any intellectual property right or privacy right;</li>
            <li>your failure to be in compliance with applicable law, including tax regulations; or</li>
            <li>any claim that your use of our Services caused damage to a third party.</li>
          </ol>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">17. Tax Liability</h2>
          <p>
            You hereby agree to comply with any and all applicable tax laws in connection with your use of our Services, including without limitation, the reporting and payment of any taxes arising in connection with purchases made through our Services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">18. Disputes & Arbitration</h2>
          <p>
            Except as otherwise set forth in these Terms, these Terms shall be exclusively governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
          </p>
          <p className="mt-2">
            Any dispute, conflict, claim or controversy arising out of or broadly in connection with or relating to the Services or these Terms, including those relating to its validity, its construction or its enforceability shall be first mandatorily submitted to mediation proceedings. If such Dispute has not been settled within sixty (60) days after a request for mediation has been submitted, such Dispute can be referred to and shall be exclusively and finally resolved by arbitration.
          </p>
          <p className="mt-2">
            The place of both mediation and arbitration shall be San Francisco, California, United States. The language of the mediation and/or arbitration shall be English.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">19. Assignment</h2>
          <p>
            The license granted hereunder to You shall not be transferred or assigned by you.
          </p>
          <p className="mt-2">
            You give your approval to CardnCart for it to assign or transfer these Terms in whole or in part, including to (i) a subsidiary or an affiliate; (ii) an acquirer of CardnCart's equity, business or assets; or (iii) a successor by merger.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">20. Termination</h2>
          <p>
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>
          <p className="mt-2">
            If you wish to terminate your account, you may simply discontinue using the Service, or notify us that you wish to terminate your account.
          </p>
          <p className="mt-2">
            All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">21. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p className="mt-2">
            By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">22. Grievances Redressal Mechanism</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">22.1 Customer Support:</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>For any issues related to orders, refunds, or charges, please contact our customer support team at support@cardncart.com.</li>
            <li>We aim to resolve all disputes amicably and in a timely manner.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">22.2 Escalation:</h3>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>If you are unsatisfied with the resolution provided by our customer support team, you may escalate the issue to our grievance officer at grievance@cardncart.com.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">23. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> greviance@cardncart.com<br />
            <strong>Mail:</strong> CardnCart Legal Department, UG-06, India Accelerator, MGF Metropolis Mall, Gurgaon 122002
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;