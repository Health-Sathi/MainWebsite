"use client";

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

interface Stat {
  id: number;
  name: string;
  value: number | string;
  suffix?: string;
  isText?: boolean;
  duration?: number;
}

const stats: Stat[] = [
  { id: 1, name: 'Active Users', value: 10000, suffix: '+' },
  { id: 2, name: 'Reports Analyzed', value: 50000, suffix: '+', duration: 10 },
  { id: 3, name: 'Accuracy Rate', value: 99, suffix: '%' },
  { id: 4, name: 'Response Time', value: '< 5 sec', isText: true },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } }
};

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('[data-stats-section]');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-8 sm:py-10 bg-background" data-stats-section>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-foreground-secondary">{stat.name}</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
} 



