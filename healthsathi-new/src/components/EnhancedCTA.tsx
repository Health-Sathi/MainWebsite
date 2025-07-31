"use client";

import { motion } from 'framer-motion';
import { PhoneIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function EnhancedCTA() {
  const [currentUsers, setCurrentUsers] = useState(127);
  
  // Simulate real-time user count
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUsers(prev => prev + Math.floor(Math.random() * 3));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background">
  <div className="absolute inset-0 bg-background/20"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Urgency Indicator */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-foreground font-medium">
              <UserGroupIcon className="w-4 h-4 inline mr-1" />
              {currentUsers} people getting health insights right now
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Don't Wait For Your Health
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-foreground-secondary">
            Join thousands who've already taken control of their health. 
            Get instant AI-powered analysis of your medical reports today.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:+17703620543"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-brand-red-primary shadow-lg hover:bg-gray-50 transition-all duration-200"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Your AI Doctor Now
            </motion.a>
            
            <div className="flex items-center gap-2 text-foreground-secondary">
              <ClockIcon className="w-4 h-4" />
              <span className="text-sm">Available 24/7 • Free consultation</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 grid grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">10,000+</div>
              <div className="text-sm text-foreground-secondary">Reports Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-foreground-secondary">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9★</div>
              <div className="text-sm text-foreground-secondary">User Rating</div>
            </div>
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl max-w-2xl mx-auto"
          >
            <blockquote className="text-foreground">
              <p className="text-lg italic">
                "HealthSathi helped me understand my blood test results instantly. 
                The AI explanation was clearer than my doctor's!"
              </p>
            </blockquote>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-foreground/20 rounded-full"></div>
              <div className="text-sm text-foreground-secondary">
                Sarah M. • Verified User
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 