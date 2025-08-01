"use client";

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const contactInfo = [
  {
    name: 'Email',
    description: (
      <a href="mailto:support@health-sathi.org" className="hover:text-primary transition-colors">
        support@health-sathi.org
      </a>
    ),
    icon: EnvelopeIcon,
  },
  {
    name: 'Phone',
    description: (
      <a href="tel:+17703620543" className="hover:text-primary transition-colors">
        +1 (770) 362-0543
      </a>
    ),
    icon: PhoneIcon,
  },
  {
    name: 'Office',
    description: 'HQ In United States of America and in India',
    icon: MapPinIcon,
  },
];

export default function Contact() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Check rate limiting
    const time = new Date();
    const timestamp = time.valueOf();
    const previousTimestamp = localStorage.getItem("loops-form-timestamp");

    if (previousTimestamp && Number(previousTimestamp) + 60000 > timestamp) {
      setStatus('error');
      setErrorMessage("Too many signups, please try again in a little while");
      return;
    }
    localStorage.setItem("loops-form-timestamp", timestamp.toString());

    try {
      const formBody = new URLSearchParams({
        userGroup: '',
        mailingLists: '',
        email: email
      });

      const response = await fetch('https://app.loops.so/api/newsletter-form/cmb74inl91756yw0ibx59og60', {
        method: 'POST',
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        localStorage.setItem("loops-form-timestamp", '');
      } else {
        const data = await response.json();
        throw new Error(data.message || response.statusText);
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setStatus('error');
      if (error.message === "Failed to fetch") {
        setErrorMessage("Too many signups, please try again in a little while");
      } else {
        setErrorMessage(error.message || 'Failed to subscribe. Please try again later.');
      }
      localStorage.setItem("loops-form-timestamp", '');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section className="py-24 sm:py-32 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground-secondary">
            Have questions about HealthSathi? We're here to help you understand your health better.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:pr-8"
            >
              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.name} className="flex items-center gap-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                      <item.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold leading-7 text-foreground">{item.name}</h3>
                      <p className="mt-2 text-base leading-7 text-foreground-secondary">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="newsletter-form-container"
            >
              <form 
                className="newsletter-form" 
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%'
                }}
              >
                <input
                  className="newsletter-form-input"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={handleChange}
                  required
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: 'var(--foreground)',
                    fontSize: '14px',
                    margin: '0px 0px 10px',
                    width: '100%',
                    maxWidth: '300px',
                    minWidth: '100px',
                    background: 'var(--input)',
                    border: '1px solid var(--border)',
                    boxSizing: 'border-box',
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px',
                    borderRadius: '6px',
                    padding: '8px 12px'
                  }}
                />
                <button
                  type="submit"
                  className="newsletter-form-button w-full max-w-[300px] h-[38px] flex items-center justify-center text-primary-foreground font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status === 'loading'}
                  style={{
                    background: 'var(--primary)',
                    fontFamily: 'Inter, sans-serif',
                    padding: '9px 17px',
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px',
                    borderRadius: '6px',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    border: 'medium',
                    cursor: 'pointer'
                  }}
                >
                  {status === 'loading' ? 'Please wait...' : 'Subscribe to Newsletter'}
                </button>
              </form>

              {status === 'success' && (
                <div 
                  className="newsletter-success"
                  style={{
                    marginTop: '10px',
                    padding: '10px',
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-foreground)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    textAlign: 'center'
                  }}
                >
                  Thank you for subscribing! We'll keep you updated with the latest health insights.
                </div>
              )}

              {status === 'error' && (
                <div 
                  className="newsletter-error"
                  style={{
                    marginTop: '10px',
                    padding: '10px',
                    backgroundColor: 'var(--destructive)',
                    color: 'var(--destructive-foreground)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    textAlign: 'center'
                  }}
                >
                  {errorMessage}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 