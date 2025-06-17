// OG Image Generator Component for Social Media Sharing
"use client";

export default function OGImageGenerator() {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-brand-red-primary to-brand-red-dark flex flex-col justify-center items-center text-white p-16">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
          <img 
            src="/images/logo/healthsathi-logo.svg" 
            alt="HealthSathi Logo"
            className="w-16 h-16"
          />
        </div>
        <h1 className="text-6xl font-bold">HealthSathi</h1>
      </div>
      <p className="text-2xl text-center max-w-4xl leading-relaxed">
        AI-Powered Healthcare Platform
      </p>
      <p className="text-xl text-center max-w-4xl mt-4 opacity-90">
        Instant Medical Report Analysis • Free • Confidential • 24/7
      </p>
      <div className="flex gap-8 mt-12">
        <div className="bg-white/20 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold">10K+</div>
          <div className="text-sm opacity-80">Reports Analyzed</div>
        </div>
        <div className="bg-white/20 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold">99.9%</div>
          <div className="text-sm opacity-80">Accuracy Rate</div>
        </div>
        <div className="bg-white/20 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold">24/7</div>
          <div className="text-sm opacity-80">Available</div>
        </div>
      </div>
    </div>
  );
} 