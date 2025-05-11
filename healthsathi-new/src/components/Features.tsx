"use client";

import { motion } from 'framer-motion';
import { 
  DocumentTextIcon, 
  BeakerIcon, 
  PhotoIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Medical Report Analysis',
    description: 'Get clear explanations of your medical reports with AI-powered analysis and expert insights.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Lab Results Interpretation',
    description: 'Understand your lab test results with detailed explanations and reference ranges.',
    icon: BeakerIcon,
  },
  {
    name: 'X-ray Analysis',
    description: 'Receive professional analysis of your X-rays with visual annotations and explanations.',
    icon: PhotoIcon,
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

export default function Features() {
  return (
    <section className="py-24 sm:py-32 bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-red-primary">Faster Healthcare</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to understand your health reports
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            HealthSathi provides comprehensive analysis of your medical reports, lab results, and X-rays
            with clear explanations and actionable insights.
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
            {features.map((feature) => (
              <motion.div key={feature.name} variants={item} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-brand-red-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
} 