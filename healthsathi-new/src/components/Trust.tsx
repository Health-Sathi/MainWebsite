"use client";

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  UserGroupIcon,
  DocumentCheckIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'HIPAA Compliant',
    description: 'Our platform adheres to strict healthcare data protection standards to ensure your information is secure.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'End-to-End Encryption',
    description: 'All your health data is encrypted both in transit and at rest, providing maximum security.',
    icon: LockClosedIcon,
  },
  {
    name: 'Expert Verification',
    description: 'Our AI analyses are regularly verified by medical professionals to ensure accuracy.',
    icon: UserGroupIcon,
  },
  {
    name: 'Data Privacy',
    description: 'We never share your health information with third parties without your explicit consent.',
    icon: DocumentCheckIcon,
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

export default function Trust() {
  return (
    <section className="py-24 sm:py-32 bg-secondary text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Security & Privacy</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Health Data is Safe with Us
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground-secondary">
            We take your privacy and security seriously. Our platform is built with the highest standards of data protection.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <motion.div key={feature.name} variants={item} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-foreground-secondary">
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