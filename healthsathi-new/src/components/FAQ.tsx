"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How does HealthSathi work?',
    answer: 'HealthSathi uses advanced AI technology to analyze your medical reports, lab results, and X-rays. Simply upload your documents, and our system will provide clear explanations and insights within minutes.',
  },
  {
    question: 'Is my health data secure?',
    answer: 'Yes, we take data security very seriously. All your health information is encrypted, and we follow strict privacy protocols to ensure your data remains confidential and secure.',
  },
  {
    question: 'How accurate are the analyses?',
    answer: 'Our AI system has been trained on millions of medical reports and is regularly validated by medical experts. We maintain a 99.9% accuracy rate in our analyses.',
  },
  {
    question: 'What types of reports can I upload?',
    answer: 'You can upload various types of medical reports, including blood test results, X-rays, MRI scans, and general medical reports. Our system supports multiple file formats.',
  },
  {
    question: 'How long does it take to get results?',
    answer: 'Most analyses are completed within 5 minutes. However, complex reports may take slightly longer. You will be notified as soon as your results are ready.',
  },
  {
    question: 'Is the service free?',
    answer: 'Yes, HealthSathi offers a free basic service. We also have premium features available for users who need more detailed analyses and expert consultations.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-secondary text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground-secondary">
            Find answers to common questions about our service and how it works.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="flex w-full items-start justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base font-semibold leading-7 text-foreground">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDownIcon
                    className={`h-6 w-6 transform transition-transform text-primary ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 pr-12"
                  >
                    <p className="text-base leading-7 text-foreground-secondary">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 