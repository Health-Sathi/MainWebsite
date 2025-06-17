"use client";

import { motion } from 'framer-motion';
import { 
  DocumentArrowUpIcon, 
  SparklesIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';
import { s } from 'framer-motion/client';

const steps = [
  {
    id: '01',
    name: 'Upload Your Report',
    description: 'Simply upload your medical report, lab results, or X-ray image through our secure platform.',
    icon: DocumentArrowUpIcon,
  },
  {
    id: '02',
    name: 'AI Analysis',
    description: 'Our advanced AI analyzes your documents and provides detailed explanations of medical terms and findings.',
    icon: SparklesIcon,
  },
  {
    id: '03',
    name: 'Get Expert Insights',
    description: 'Receive clear, actionable insights and recommendations from our medical experts.',
    icon: ChatBubbleLeftRightIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Simple Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How HealthSathi Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get your medical reports analyzed in three simple steps. Our AI-powered platform makes it easy to understand your health data.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <motion.div key={step.name} variants={item} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red-primary">
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-brand-red-primary">{step.id}</span>
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
} 















































































































































































