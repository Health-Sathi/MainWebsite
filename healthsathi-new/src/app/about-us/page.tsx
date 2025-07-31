import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { FaFire, FaShieldAlt, FaChartLine, FaHandshake, FaUsers, FaSeedling, FaDoorOpen } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About HealthSathi | Healthcare AI & Technology Leadership Team',
  description: 'Meet HealthSathi\'s leadership team: Jaytirth Joshi (Founder & CEO), Joshith Reddy Aleti (CTO - AI/ML), Aarya Gupta (Director of Applied Science), and our expert team working to revolutionize healthcare through AI and technology.',
  keywords: 'HealthSathi leadership, healthcare AI team, medical technology experts, healthcare innovation leaders, AI healthcare solutions, medical technology leadership, healthcare accessibility, patient empowerment, healthcare technology team',
  openGraph: {
    title: 'About HealthSathi | Healthcare AI & Technology Leadership Team',
    description: 'Meet HealthSathi\'s leadership team: Jaytirth Joshi (Founder & CEO), Joshith Reddy Aleti (CTO - AI/ML), Aarya Gupta (Director of Applied Science), and our expert team working to revolutionize healthcare through AI and technology.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HealthSathi',
    images: [
      {
        url: '/images/team/jaytirth_joshi.png',
        width: 800,
        height: 800,
        alt: 'Jaytirth Joshi - Founder and CEO of HealthSathi',
      },
      {
        url: '/images/team/joshith_reddy_aleti.jpeg',
        width: 800,
        height: 800,
        alt: 'Joshith Reddy Aleti - Chief Artificial Intelligence Officer',
      },
      {
        url: '/images/team/aarya_gupta.jpg',
        width: 800,
        height: 800,
        alt: 'Aarya Gupta - Chief Scientific Officer at HealthSathi',
      },
      {
        url: '/images/advisory/tushar_joshi.jpeg',
        width: 800,
        height: 800,
        alt: 'Tushar Joshi - Business Advisor at HealthSathi',
      },
      {
        url: '/images/advisory/rani_hong.png',
        width: 800,
        height: 800,
        alt: 'Rani Hong - UN Special Advisor at HealthSathi',
      },
      {
        url: '/images/advisory/V_Joshi.png',
        width: 800,
        height: 800,
        alt: 'Dr. Vivek Rawal, M.D. - Medical Advisor at HealthSathi',
      },
      {
        url: '/images/advisory/Rohit_P.jpg',
        width: 800,
        height: 800,
        alt: 'Rohit Panedka - Board of Advisor for Gen AI at HealthSathi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About HealthSathi | Healthcare AI & Technology Leadership Team',
    description: 'Meet our leadership team revolutionizing healthcare through AI and technology. Learn about our mission to make healthcare accessible and understandable for all.',
    images: ['/images/team/jaytirth_joshi.png'],
  },
  alternates: {
    canonical: 'https://health-sathi.org/about-us',
  },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HealthSathi',
  url: 'https://health-sathi.org',
  logo: 'https://health-sathi.org/images/logo.png',
  description: 'HealthSathi is dedicated to making healthcare accessible and understandable for all through AI technology.',
  founder: {
    '@type': 'Person',
    name: 'Jaytirth Joshi',
    jobTitle: 'Founder and CEO',
  },
  employee: [
    {
      '@type': 'Person',
      name: 'Joshith Reddy Aleti',
      jobTitle: 'Chief Technology Officer - AI/ML Operations',
    },
    {
      '@type': 'Person',
      name: 'Aarya Gupta',
      jobTitle: 'Director of Applied Science',
    },
    {
      '@type': 'Person',
      name: 'Charvik Morampudi',
      jobTitle: 'Head of App Development',
    },
    {
      '@type': 'Person',
      name: 'Dileep Tata',
      jobTitle: 'Chief Financial Officer',
    },
    {
      '@type': 'Person',
      name: 'Anjan Bellamkonda',
      jobTitle: 'Chief of Development',
    },
    {
      '@type': 'Person',
      name: 'Harivatsan Selvam',
      jobTitle: 'Chief Technology and Innovation Officer',
    },
    {
      '@type': 'Person',
      name: 'Abhay Kumar Prashanth',
      jobTitle: 'Global Chief Marketing Officer',
    },
    {
      '@type': 'Person',
      name: 'Gayatri Rawel, Esq., LLB',
      jobTitle: 'Legal Advisor',
    },
    {
      '@type': 'Person',
      name: 'Rani Hong',
      jobTitle: 'UN Special Advisor',
    },
    {
      '@type': 'Person',
      name: 'Mamta Joshi',
      jobTitle: 'Technical Advisor',
    },
  ],
  sameAs: [
    'https://twitter.com/healthsathi',
    'https://linkedin.com/company/healthsathi',
    'https://facebook.com/healthsathi'
  ]
};

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: 'Jaytirth Joshi',
      role: 'Founder Of HealthSathi, Chief Executive Officer and Chairman',
      bio: 'Jaytirth Joshi, the founder of HealthSathi, is a high school student driven to make healthcare accessible and understandable for all. Inspired by his medical internships, he created Dr. Fatafat, a tool to simplify medical reports and provide free, confidential health insights.',
      imageUrl: '/images/team/jaytirth_joshi.png',
      imageLink: 'https://jay.health-sathi.org',
    },
    {
      name: 'Abhay Kumar Prashanth',
      role: 'Global Chief Marketing Officer',
      bio: 'Abhay Kumar Prashanth leads the global marketing strategy at HealthSathi, driving brand awareness and user engagement across international markets. With expertise in digital marketing and brand development, he plays a crucial role in expanding HealthSathi\'s reach and impact in the healthcare technology sector.',
      imageUrl: '/images/team/abhay_kumar_prashanth.jpeg',
      imageLink: 'https://www.linkedin.com/in/abhay-kumar-prashanth-7bb280337/',
    },
    {
      name: 'Harivatsan Selvam',
      role: 'Chief Technology and Innovation Officer',
      bio: 'Harivatsan Selvam is the Chief Technology and Innovation Officer at HealthSathi, where he leads the development of accessible, impact-driven health tech solutions. He believes in "tech for all" and focuses on leveraging AI to improve lives and build a healthier, more equitable society.',
      imageUrl: '/images/team/harivatsan_selvam.jpeg',
      imageLink: 'https://www.linkedin.com/in/harivatsan-selvam-69b85830b/',
    },
    {
      name: 'Joshith Reddy Aleti',
      role: 'Chief Artificial Intelligence Officer',
      bio: 'Joshith Reddy Aleti, HealthSathi\'s Chief Artificial Intelligence Officer, is a driving force behind the company\'s intelligent healthcare infrastructure. With hands-on experience building scalable AI systems and a track record of applying machine learning in real-world environments, Joshith transforms complex data into actionable health insights. From predictive models that anticipate patient needs to AI-driven platforms that simplify diagnostics, he leads with a mission to make healthcare smarter, faster, and more accessible. His passion lies not just in cutting-edge algorithms, but in solving real human problems through responsible and transparent AI.',
      imageUrl: '/images/team/joshith_reddy_aleti.jpeg',
      imageLink: 'https://www.linkedin.com/in/joshith-reddy-aleti/',
    },
    {
      name: 'Aarya Gupta',
      role: 'Chief Scientific Officer',
      bio: 'Aarya Gupta is a student researcher and science communicator passionate about bridging the gap between complex biomedical innovations and public understanding. With experience in computational biology, cancer research, and data-driven health solutions, he brings a commitment to clarity, equity, and accessibility in healthcare. At Health Saathi, he aims to help make science and medicine more approachable for all communities.',
      imageUrl: '/images/team/aarya_gupta.jpg',
    },
    {
      name: 'Charvik Morampudi',
      role: 'Head of App Development',
      bio: 'Leading HealthSathi\'s mobile and web application development with a focus on creating intuitive, user-friendly healthcare solutions.',
      imageUrl: '/images/team/charvik_morampudi.jpg',
      imageLink: 'https://www.linkedin.com/in/charvik-m-a086a8288/',
    },
    {
      name: 'Anjan Bellamkonda',
      role: 'Chief of Development',
      bio: 'Anjan Bellamkonda serves as the Chief of Development at HealthSathi, where he leads all aspects of website maintenance and ensures the platform remains robust, secure, and up-to-date.',
      imageUrl: '/images/team/anjan_bellamkonda.jpg',
      imageLink: 'https://www.linkedin.com/in/anjan-bellamkonda/',
    },
    {
      name: 'Dileep Tata',
      role: 'Chief Financial Officer',
      bio: 'Dileep Tata is the Chief Financial Officer at HealthSathi, where he oversees financial strategy, fundraising, and long-term sustainability. With a strong background in entrepreneurship and social impact, Dileep brings a mission-driven approach to healthtech innovation. His leadership bridges business and impact, ensuring HealthSathi\'s growth aligns with its goal of expanding access to quality care. Dileep is also deeply involved in education, public speaking, and youth leadership, and is passionate about using technology to solve real-world problems at scale.',
      imageUrl: '/images/team/dileep_tata.jpg',
      imageLink: 'https://www.linkedin.com/in/dileep-tata-868676345/',
    },
    /* Commented out intern section
    {
      name: 'Software Development Intern',
      role: 'Software Development Intern',
      bio: 'Contributing to the development and enhancement of HealthSathi\'s platform.',
      imageUrl: '/images/team/placeholder.png', // Placeholder image
    },
    */
  ];

  const advisoryBoard = [
    {
      name: 'Tushar Joshi',
      role: 'Business Advisor',
      bio: 'Tushar Joshi brings extensive business expertise to HealthSathi, guiding strategic initiatives and business development. With a strong background in entrepreneurship and business management, he provides valuable insights for scaling healthcare technology solutions globally.',
      imageUrl: '/images/advisory/tushar_joshi.jpeg',
      imageLink: 'https://www.linkedin.com/in/joshi-tushar/',
    },
    {
      name: 'Dr. Vivek Rawal, M.D.',
      role: 'Medical Advisor',
      bio: 'Dr. Vivek Rawal, M.D., brings extensive medical expertise to HealthSathi, ensuring our healthcare solutions meet the highest medical standards. With years of clinical experience and a deep understanding of healthcare systems, he guides our medical content and AI-driven health insights.',
      imageUrl: '/images/advisory/V_Joshi.png',
    },
    {
      name: 'Gayatri Rawel, Esq., LLB',
      role: 'Legal Advisor',
      bio: 'Gayatri Rawel, Esq., LLB, provides crucial legal guidance to HealthSathi, ensuring compliance with healthcare regulations and data privacy laws. Her expertise in healthcare law and international legal frameworks helps us maintain the highest standards of legal and ethical practices.',
      imageUrl: '/images/advisory/placeholder.png', // Placeholder image
    },
    {
      name: 'Rani Hong',
      role: 'UN Special Advisor',
      bio: 'Rani Hong serves as a UN Special Advisor, bringing global healthcare policy expertise to HealthSathi. Her extensive experience in international healthcare initiatives and human rights advocacy helps shape our mission to make healthcare accessible worldwide.',
      imageUrl: '/images/advisory/rani_hong.png',
      imageLink: 'https://www.linkedin.com/in/ranihong/',
    },
    {
      name: 'Mamta Joshi',
      role: 'Technical Advisor',
      bio: 'Mamta Joshi brings extensive experience in technical education and programming to HealthSathi. As a professional programming instructor, she has trained numerous students and professionals, bringing valuable insights to our technical development and educational initiatives.',
      imageUrl: '/images/advisory/placeholder.png', // Placeholder image
    },
    {
      name: 'Rohit Panedka',
      role: 'Board of Advisor for Gen AI',
      bio: 'Rohit Panedka serves as Board of Advisor for Gen AI at HealthSathi, bringing cutting-edge artificial intelligence expertise to our healthcare solutions. As the Microsoft ATL lead, he provides strategic guidance on AI implementation, machine learning models, and generative AI technologies that power our intelligent healthcare platform.',
      imageUrl: '/images/advisory/Rohit_P.jpg',
      imageLink: 'https://www.linkedin.com/in/rohit-panedka-8a49251/',
    },
  ];

  const coreValues = [
    { name: 'Passion', color: 'bg-brand-red-light', textColor: 'text-brand-black', icon: FaFire },
    { name: 'Integrity', color: 'bg-brand-red-light', textColor: 'text-brand-black', icon: FaShieldAlt },
    { name: 'Results', color: 'bg-brand-red-light', textColor: 'text-brand-black', icon: FaChartLine },
    { name: 'Commitment', color: 'bg-brand-red-light', textColor: 'text-brand-black', icon: FaHandshake },
    { name: 'Diversity', color: 'bg-brand-red-light', textColor: 'text-brand-black', icon: FaUsers },
    { name: 'Growth', color: 'bg-brand-red-light', textColor: 'text-brand-black', icon: FaSeedling },
    { name: 'Openness', color: 'bg-brand-red-light', textColor: 'text-brand-black', icon: FaDoorOpen },
  ];


  return (
    <div className="bg-brand-off-white min-h-screen">
      {/* Add JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            Founded by a team of healthcare enthusiasts and tech innovators, HealthSathi has brought together years of expertise in medicine and artificial intelligence. We&apos;ve served thousands of patients, from urban clinics in the USA to rural healthcare centers in India, ensuring everyone can access understandable medical information when they need it most.
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
          <div className="max-w-6xl mx-auto">
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-6 text-center">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.name}
                    className={`core-value-tile flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 rounded-2xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${value.color} ${value.textColor}`}
                    style={{ minHeight: '90px', maxHeight: '110px' }}
                  >
                    <Icon className="mb-1 sm:mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl" />
                    <h4 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg leading-tight break-words px-1">{value.name}</h4>
                  </div>
                );
              })}
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
                  {member.imageLink ? (
                    <a href={member.imageLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={member.name === 'Jaytirth Joshi'}
                        sizes="(max-width: 768px) 128px, 128px"
                        title={`${member.name} - ${member.role}`}
                      />
                    </a>
                  ) : (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority={member.name === 'Jaytirth Joshi'}
                      sizes="(max-width: 768px) 128px, 128px"
                      title={`${member.name} - ${member.role}`}
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-1">
                  {member.imageLink ? (
                    <a 
                      href={member.imageLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-brand-red-primary transition-colors"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </h3>
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
                  {advisor.imageLink ? (
                    <a href={advisor.imageLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <Image
                        src={advisor.imageUrl}
                        alt={advisor.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </a>
                  ) : (
                    <Image
                      src={advisor.imageUrl}
                      alt={advisor.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-1">
                  {advisor.imageLink ? (
                    <a
                      href={advisor.imageLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-red-primary transition-colors underline"
                    >
                      {advisor.name}
                    </a>
                  ) : (
                    advisor.name
                  )}
                </h3>
                <p className="text-brand-red-primary font-medium">{advisor.role}</p>
                <p className="text-brand-black text-sm leading-relaxed">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage; 