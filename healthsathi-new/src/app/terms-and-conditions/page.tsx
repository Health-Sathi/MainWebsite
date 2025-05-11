import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-brand-off-white min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 prose prose-lg max-w-4xl text-brand-black">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-red-primary mb-8">
          Terms and Conditions
        </h1>
        
        <p className="text-sm text-gray-500 mb-6">Last Updated: January 1, 2025</p>

        <p>
          Welcome to HealthSathi! These terms and conditions outline the rules and regulations for the use of HealthSathi's Website, located at health-sathi.org.
        </p>
        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use HealthSathi if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">1. License</h2>
        <p>
          Unless otherwise stated, HealthSathi and/or its licensors own the intellectual property rights for all material on HealthSathi. All intellectual property rights are reserved. You may access this from HealthSathi for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <p>
          You must not:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Republish material from HealthSathi</li>
          <li>Sell, rent or sub-license material from HealthSathi</li>
          <li>Reproduce, duplicate or copy material from HealthSathi</li>
          <li>Redistribute content from HealthSathi</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">2. User Comments</h2>
        <p>
          Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. HealthSathi does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of HealthSathi,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.
        </p>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">3. AI Medical Advice Disclaimer (Placeholder)</h2>
        <p>
          HealthSathi provides AI-powered tools that may offer insights or information based on medical data you provide. This information is for informational purposes only and DOES NOT CONSTITUTE MEDICAL ADVICE.
        </p>
        <p>
          The AI-generated content is not a substitute for professional medical advice, diagnosis, or treatment from a qualified healthcare provider. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read or interpreted on HealthSathi.
        </p>
        <p>
          Reliance on any information provided by HealthSathi's AI tools is solely at your own risk.
        </p>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">4. Limitation of Liability Regarding AI (Placeholder)</h2>
        <p>
          To the fullest extent permitted by applicable law, HealthSathi shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the AI features; (b) any conduct or content of any third party on the services; (c) any content obtained from the AI features; or (d) unauthorized access, use, or alteration of your transmissions or content, even if HealthSathi has been advised of the possibility of such damages.
        </p>
        <p>
           The information provided by the AI is not guaranteed to be accurate, complete, or up-to-date. HealthSathi makes no warranties, express or implied, regarding the reliability of the AI features.
        </p>


      </div>
    </div>
  );
};

export default TermsAndConditionsPage; 