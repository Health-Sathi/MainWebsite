import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    content: "HealthSathi made understanding my medical reports so much easier. The AI analysis was spot on, and the explanations were clear and helpful.",
    author: {
      name: "Sarah Johnson",
      role: "Patient",
      image: "/testimonials/sarah.jpg",
    },
  },
  {
    content: "As a busy professional, I appreciate how quickly I can get insights about my health reports. The platform is intuitive and the results are reliable.",
    author: {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "/testimonials/michael.jpg",
    },
  },
  {
    content: "The expert insights provided by HealthSathi helped me make better decisions about my health. I highly recommend it to anyone who wants to understand their medical reports better.",
    author: {
      name: "Priya Patel",
      role: "Healthcare Professional",
      image: "/testimonials/priya.jpg",
    },
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

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-red-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Users Say
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our users have to say about their experience with HealthSathi.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author.name}
              variants={item}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
            >
              <div>
                <div className="flex items-center gap-x-4">
                  <Image
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.author.role}</div>
                  </div>
                </div>
                <p className="mt-6 text-gray-600">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 