"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    id: 'faq-1',
    question: 'How does HealthSathi work?',
    answer: 'HealthSathi uses advanced AI technology to analyze your medical reports, lab results, and X-rays. Simply upload your documents, and our system will provide clear explanations and insights within minutes.',
  },
  {
    id: 'faq-2',
    question: 'Is my health data secure?',
    answer: 'Yes, we take data security very seriously. All your health information is encrypted, and we follow strict privacy protocols to ensure your data remains confidential and secure.',
  },
  {
    id: 'faq-3',
    question: 'How accurate are the analyses?',
    answer: 'Our AI system has been trained on millions of medical reports and is regularly validated by medical experts. We maintain a 99.9% accuracy rate in our analyses.',
  },
  {
    id: 'faq-4',
    question: 'What types of reports can I upload?',
    answer: 'You can upload various types of medical reports, including blood test results, X-rays, MRI scans, and general medical reports. Our system supports multiple file formats.',
  },
  {
    id: 'faq-5',
    question: 'How long does it take to get results?',
    answer: 'Most analyses are completed within 5 minutes. However, complex reports may take slightly longer. You will be notified as soon as your results are ready.',
  },
  {
    id: 'faq-6',
    question: 'Is the service free?',
    answer: 'Yes, HealthSathi offers a free basic service. We also have premium features available for users who need more detailed analyses and expert consultations.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-secondary text-white" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 id="faq-heading" className="text-base font-semibold leading-7 text-brand-red-primary">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Find answers to common questions about our service and how it works.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-700/50" role="region" aria-label="FAQ Section">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="py-6">
              <button
                className="flex w-full items-start justify-between text-left focus:outline-none focus:ring-2 focus:ring-brand-red-primary focus:ring-offset-2 focus:ring-offset-secondary rounded-md p-2 -m-2"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
                aria-describedby={`faq-question-${faq.id}`}
              >
                <span id={`faq-question-${faq.id}`} className="text-base font-semibold leading-7 text-white">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDownIcon
                    className={`h-6 w-6 transform transition-transform text-brand-red-primary ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                  <span className="sr-only">
                    {openIndex === index ? 'Collapse answer' : 'Expand answer'}
                  </span>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 pr-12"
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                  >
                    <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
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