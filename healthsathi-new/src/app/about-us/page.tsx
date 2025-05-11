import React from 'react';
import Image from 'next/image';

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: 'Jaytirth Joshi',
      role: 'Founder Of HealthSathi, Chief Executive Officer and Chairman',
      bio: 'Jaytirth Joshi, the founder of HealthSathi, is a high school student driven to make healthcare accessible and understandable for all. Inspired by his medical internships, he created Dr. Fatafat, a tool to simplify medical reports and provide free, confidential health insights.',
      imageUrl: '/images/team/jaytirth_joshi.png',
    },
    {
      name: 'Abhay Kumar Prashanth',
      role: 'Global Chief Marketing Officer',
      bio: 'Abhay Kumar Prashanth, Leads The Global Marketing at HealthSathi',
      imageUrl: '/images/team/abhay_kumar_prashanth.jpeg',
    },
    {
      name: 'Aiden Ziolo',
      role: 'Chief Technology Officer',
      bio: 'Aiden Ziolo, a high school junior, is the Chief Technology Officer (CTO) of HealthSathi. With expertise in data science and AI development, he leads the technological advancements of HealthSathi&apos;s platforms, delivering user-friendly solutions that simplify complex medical information.',
      imageUrl: '/images/team/aiden_z.png',
    },
    {
      name: 'Software Development Intern',
      role: 'Software Development Intern',
      bio: 'Contributing to the development and enhancement of HealthSathi&apos;s platform.',
      imageUrl: '/images/team/placeholder.png', // Placeholder image
    },
  ];

  const advisoryBoard = [
    {
      name: 'Tushar Joshi',
      role: 'Business Advisor',
      imageUrl: '/images/advisory/tushar_joshi.jpeg',
    },
    {
      name: 'Dr. Vivek Rawal, M.D.',
      role: 'Medical Advisor',
      imageUrl: '/images/advisory/placeholder.png', // Placeholder image
    },
    {
      name: 'Gayatri Rawel, Esq., LLB',
      role: 'Legal Advisor',
      imageUrl: '/images/advisory/placeholder.png', // Placeholder image
    },
    {
      name: 'Rani Hong',
      role: 'UN Special Advisor',
      imageUrl: '/images/advisory/rani_hong.png',
    },
  ];

  const coreValues = [
    { name: 'Passion', color: 'bg-brand-red-primary', textColor: 'text-brand-white' },
    { name: 'Integrity', color: 'bg-brand-red-dark', textColor: 'text-brand-white' },
    { name: 'Results', color: 'bg-brand-red-light', textColor: 'text-brand-black' },
    { name: 'Commitment', color: 'bg-brand-black', textColor: 'text-brand-white' },
    { name: 'Diversity', color: 'bg-brand-red-primary', textColor: 'text-brand-white' }, // Re-using primary red
    { name: 'Growth', color: 'bg-brand-gray-light', textColor: 'text-brand-black' },
    { name: 'Openness', color: 'bg-brand-red-light', textColor: 'text-brand-black' }, // Re-using light red
  ];


  return (
    <div className="bg-brand-off-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-brand-red-dark to-brand-red-primary text-brand-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/patient_empowerment.webp"
            alt="Patient Empowerment"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-20" // Slightly reduced opacity for better text readability on gradient
            priority
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Empower Your Health</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transforming medical jargon into clear insights. Your trusted AI companion for understanding health data.
          </p>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-12">Our Journey to Empowerment</h2>
          <p className="text-lg text-brand-black max-w-3xl mx-auto text-center leading-relaxed">
            Founded by a team of healthcare enthusiasts and tech innovators, HealthSathi has brought together years of expertise in medicine and artificial intelligence. We've served thousands of patients, from urban clinics in the USA to rural healthcare centers in India, ensuring everyone can access understandable medical information when they need it most.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-brand-off-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-brand-red-primary mb-3">AI-Driven Insights</h3>
              <p className="text-brand-black">Leveraging cutting-edge AI to provide clear and actionable health information.</p>
            </div>
            <div className="p-6 bg-brand-off-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-brand-red-primary mb-3">Privacy-Focused</h3>
              <p className="text-brand-black">Committed to protecting your data with the highest security standards.</p>
            </div>
            <div className="p-6 bg-brand-off-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-brand-red-primary mb-3">Global Accessibility</h3>
              <p className="text-brand-black">Making health insights available to everyone, everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Principles */}
      <section className="py-16 md:py-24 bg-brand-off-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-red-primary mb-4">Our Core Principles</h2>
          <p className="text-lg text-brand-black text-center max-w-2xl mx-auto mb-12">
            At HealthSathi, we stand by our commitment to quality, integrity, and accessibility in healthcare.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
              {coreValues.map((value) => (
                <div key={value.name} className={`p-6 rounded-lg shadow-md ${value.color} ${value.textColor} flex items-center justify-center aspect-square`}>
                  <h4 className="font-semibold text-lg">{value.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-brand-red-primary mb-4">Our Vision</h3>
              <p className="text-lg text-brand-black leading-relaxed">
                To create a world where everyone can easily understand their health information and feel empowered to make informed decisions about their care.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-brand-red-primary mb-4">Our Mission</h3>
              <p className="text-lg text-brand-black leading-relaxed">
                Our mission is to simplify medical data through AI, making healthcare insights accessible to all, anytime and anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-brand-off-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-red-primary mb-16">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-brand-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-brand-red-light">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-1">{member.name}</h3>
                <p className="text-brand-red-primary font-medium mb-3">{member.role}</p>
                <p className="text-brand-black text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-red-primary mb-16">Our Advisory Board</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {advisoryBoard.map((advisor) => (
              <div key={advisor.name} className="bg-brand-off-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-brand-red-light">
                  <Image
                    src={advisor.imageUrl}
                    alt={advisor.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-1">{advisor.name}</h3>
                <p className="text-brand-red-primary font-medium">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage; 