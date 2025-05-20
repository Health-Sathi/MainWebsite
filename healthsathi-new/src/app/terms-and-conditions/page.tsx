import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-brand-off-white min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 prose prose-lg max-w-4xl text-brand-black">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-red-primary mb-8">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-6">Effective Date: January 1, 2025</p>

        <p>Welcome to HealthSathi! These Terms and Conditions ("Agreement") govern your access to and use of HealthSathi's services, including its website, mobile applications, Health Pods, AI-powered tools, and any related software, hardware, content, and documentation (collectively, the "Services"). By accessing or using any part of our Services, you agree to be bound by these Terms.</p>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">1. Ownership and License</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>HealthSathi and its licensors retain all intellectual property rights in the Services and all materials therein.</li>
          <li>You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal, non-commercial use.</li>
          <li>You agree not to:
            <ul className="list-disc pl-6 space-y-2">
              <li>Republish or redistribute material without permission</li>
              <li>Sell, rent, or sublicense content</li>
              <li>Modify, reproduce, or create derivative works</li>
              <li>Use the Services for unlawful or unauthorized purposes</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">2. User Content and Conduct</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Users may post content in designated areas. By submitting content, you grant HealthSathi a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.</li>
          <li>You represent that your content does not infringe any third-party rights and does not contain harmful, offensive, or unlawful material.</li>
          <li>HealthSathi reserves the right to moderate, remove, or restrict content that violates this Agreement or applicable laws.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">3. Use of Mobile Applications</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>The HealthSathi app may require access to personal and health data. You agree to this collection and processing per our Privacy Policy.</li>
          <li>You may not reverse-engineer or tamper with the app.</li>
          <li>Push notifications, updates, and remote access features may be enabled for service improvements.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">4. Use of Health Pods</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Health Pods are medical-grade autonomous diagnostic devices. Use of Health Pods is voluntary and at your own risk.</li>
          <li>Data collected via Health Pods may include vital signs, biospecimens, and user-reported health data. All data is securely encrypted and stored according to HIPAA-like standards.</li>
          <li>Health Pods do not replace professional diagnosis or treatment. Interpretation should be verified by a licensed provider.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">5. AI Tools and Medical Disclaimers</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>HealthSathi's AI features are intended to assist users in understanding health data and reports. They do not constitute medical advice.</li>
          <li>The AI output may rely on third-party databases and pattern recognition algorithms, which are not infallible.</li>
          <li>You must not delay or avoid seeking medical attention based on AI-generated content. Always consult a licensed physician.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">6. Data Handling and Privacy</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>By using our Services, you consent to the collection, use, and sharing of your personal data as described in our Privacy Policy.</li>
          <li>HealthSathi implements administrative, technical, and physical safeguards to protect your data but cannot guarantee absolute security.</li>
          <li>You agree that anonymized and aggregated data may be used for research, development, or analytics.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">7. Limitations of Liability</h2>
        <p>To the fullest extent allowed by law, HealthSathi disclaims all liability for:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Inaccuracies or errors in AI-generated reports</li>
          <li>Diagnostic interpretations from Health Pods</li>
          <li>Delays, data loss, unauthorized access, or service disruptions</li>
          <li>Any incidental, indirect, or consequential damages</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">8. Medical Emergencies and Critical Use</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>The Services are not designed for emergency use. In case of a medical emergency, call your local emergency services (e.g., 911 in the United States).</li>
          <li>HealthSathi and Dr. Fatafat tools are not to be used in high-stakes diagnostic scenarios, such as surgical preparation or emergency triage.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">9. Service Modifications and Termination</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>We reserve the right to update, discontinue, suspend, or limit functionality at our discretion.</li>
          <li>Your access may be suspended or terminated without notice for any breach of this Agreement.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">10. Indemnity</h2>
        <p>You agree to indemnify, defend, and hold harmless HealthSathi, its officers, directors, staff, partners, affiliates, and licensors from any claim, demand, loss, liability, or expense (including attorney's fees) arising out of your violation of this Agreement or misuse of the Services.</p>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">11. Governing Law and Dispute Resolution</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>This Agreement shall be governed by the laws of the State of Georgia, USA, without regard to conflict of law principles.</li>
          <li>Any disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</li>
          <li>You waive any right to participate in a class action lawsuit.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">12. Regulatory and Legal Compliance</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>HealthSathi operates as a nonprofit healthcare technology provider and strives to comply with relevant privacy, data protection, and health information standards including:
            <ul className="list-disc pl-6 space-y-2">
              <li>U.S. HIPAA and FTC Health Breach Notification Rule (where applicable)</li>
              <li>India's Digital Personal Data Protection Act (DPDP Act)</li>
              <li>General Data Protection Regulation (GDPR) for EU users (to the extent applicable)</li>
            </ul>
          </li>
          <li>Our Services do not require FDA or CDSCO approval as they are not intended to diagnose, treat, cure, or prevent any disease.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">13. Third-Party Services and Integrations</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Our platform may use or link to third-party services including:
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Ads and Remarketing</li>
              <li>Google Analytics 4</li>
              <li>Apple Health, Google Fit, or similar health platforms</li>
            </ul>
            These providers have their own terms and privacy policies, which you must review and accept separately.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">14. Children's Use</h2>
        <p>Our Services are not directed to children under 13. Users under 18 must use the Services only with the involvement of a parent or legal guardian.</p>

        <h2 className="text-2xl font-semibold text-brand-red-primary mt-8 mb-4">15. Contact Information</h2>
        <p><a href="mailto:support@health-sathi.org">support@health-sathi.org</a><br />Phone/WhatsApp: +1 770-362-0543</p>

        <hr className="my-8" />
        <p className="text-sm text-gray-500">Please also review our <a href="/privacy-policy" className="underline">Privacy Policy</a> and <a href="/eula" className="underline">EULA</a> for more on how your information is used and your rights as a user.</p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage; 