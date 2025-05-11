"use client";

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-red-primary">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
            Ready to understand your health reports better?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-white opacity-90">
            Join thousands of users who are already using HealthSathi to make informed decisions about their health.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/get-started"
              className="rounded-md bg-brand-white px-4 py-3 text-sm font-semibold text-brand-red-dark shadow-sm hover:bg-brand-off-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white transition-colors"
            >
              Get Started Free
            </a>
            <a href="/learn-more"
               className="text-sm font-semibold leading-6 text-brand-white hover:text-brand-red-light transition-colors">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 