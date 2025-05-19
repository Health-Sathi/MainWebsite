"use client";

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

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
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Stats() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by thousands of users
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our platform has helped countless individuals understand their health reports better.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div key={stat.id} variants={item} className="flex flex-col bg-white p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-900">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.isText ? (
                    stat.value
                  ) : (
                    <CountUp
                      end={stat.value as number}
                      suffix={stat.suffix}
                      duration={stat.duration || 2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  )}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
} 