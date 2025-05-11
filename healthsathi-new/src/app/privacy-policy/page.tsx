import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-brand-off-white min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 prose prose-lg max-w-4xl text-brand-black">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-red-primary mb-8">
          Privacy Policy
        </h1>
        
        <p className="text-sm text-gray-500 mb-6">Last Updated: January 1, 2025</p>

        <p>
          Welcome to HealthSathi (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at [Your Contact Email].
        </p>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">1. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when you register on the HealthSathi, express an interest in obtaining information about us or our products and services, when you participate in activities on the HealthSathi or otherwise when you contact us.
        </p>
        <p>
          The personal information that we collect depends on the context of your interactions with us and the HealthSathi, the choices you make and the products and features you use. The personal information we collect may include the following:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Names</li>
          <li>Email addresses</li>
          <li>Contact preferences</li>
          <li>Usernames and passwords</li>
          <li>Health information you voluntarily provide (e.g., by uploading medical reports for AI analysis)</li>
          <li>Other similar information.</li>
        </ul>
        <h3 className="text-xl font-semibold text-brand-black mt-6 mb-2">1.1. AI and Medical Information (Placeholder)</h3>
        <p>
          When you use our AI-powered medical advice features, you may provide sensitive health information. We collect and process this information solely for the purpose of providing you with the AI-driven insights. We understand the sensitivity of this data and are committed to its confidential and secure handling. Please refer to our Data Security section for more details. Specific consent will be sought for the processing of health data for AI features as required by applicable law.
        </p>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">2. How We Use Your Information</h2>
        <p>
          We use personal information collected via our HealthSathi for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. 
        </p>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">3. End User License Agreement (EULA) Considerations (Placeholder)</h2>
        <p>
          While this Privacy Policy governs data handling, your use of the HealthSathi software and services is also subject to our End User License Agreement (EULA). The EULA outlines the terms of the license granted to you to use our software, permitted uses, restrictions, intellectual property rights, and other important conditions.
        </p>
        <p>
          <em>A comprehensive EULA should be drafted by legal counsel and provided as a separate document or section. This placeholder note serves to acknowledge its importance.</em>
        </p>

        {/* Add more sections as needed: e.g., Sharing Your Information, Cookies, Data Security, Your Rights, Contact Us */}

      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 