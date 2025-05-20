import React from 'react';

const DonatePage = () => {
  return (
    <div className="bg-brand-off-white min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-red-primary mb-4">
            Support HealthSathi
          </h1>
          <p className="text-lg text-brand-black max-w-2xl mx-auto">
            Your generous contributions help us continue our mission to make healthcare information accessible and understandable for everyone. Thank you for your support!
          </p>
        </header>
        
        <div className="bg-brand-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
          <iframe
            src="https://hcb.hackclub.com/donations/start/healthsathi"
            title="HealthSathi Donation Form via Hack Club"
            className="w-full h-[85vh] min-h-[1000px] border-1 rounded-lg"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          >
            Loading donation form...
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default DonatePage; 