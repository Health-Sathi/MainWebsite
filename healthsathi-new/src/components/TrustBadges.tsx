"use client";

import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const trustBadges = [
  {
    icon: ShieldCheckIcon,
    title: "HIPAA Compliant",
    description: "Your data is protected by industry-standard security"
  },
  {
    icon: LockClosedIcon,
    title: "End-to-End Encrypted",
    description: "All communications are fully encrypted"
  },
  {
    icon: AcademicCapIcon,
    title: "Medical Expert Reviewed",
    description: "AI analysis validated by certified physicians"
  },
  {
    icon: CheckBadgeIcon,
    title: "FDA Guidelines",
    description: "Following FDA AI/ML guidance for medical devices"
  },
  {
    icon: StarIcon,
    title: "4.9/5 Rating",
    description: "Trusted by thousands of users worldwide"
  }
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Trusted & Secure Healthcare Platform
          </h3>
          <p className="text-sm text-gray-600">
            Your health data security and accuracy are our top priorities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <badge.icon className="w-8 h-8 text-brand-red-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm text-gray-900 mb-1">
                {badge.title}
              </h4>
              <p className="text-xs text-gray-600 leading-tight">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}