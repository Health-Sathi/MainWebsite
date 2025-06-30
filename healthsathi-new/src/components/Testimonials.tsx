import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    content: "HealthSathi made understanding my medical reports so much easier. The AI analysis was spot on, and the explanations were clear and helpful.",
    author: {
      name: "Sarah Johnson",
      role: "Patient",
      image: null,
    },
  },
  {
    content: "As a busy professional, I appreciate how quickly I can get insights about my health reports. The platform is intuitive and the results are reliable.",
    author: {
      name: "Michael Chen",
      role: "Software Engineer",
      image: null,
    },
  },
  {
    content: "The expert insights provided by HealthSathi helped me make better decisions about my health. I highly recommend it to anyone who wants to understand their medical reports better.",
    author: {
      name: "Dr. Jason Miller",
      role: "Healthcare Professional",
      image: "https://cdn.prod.website-files.com/65c37e1a9189104bf8d071be/66421655b037baa04c54dfc7_jason%20headshot%20cropped.png",
    },
  },
  {
    content: "I was always confused by my lab results until I found HealthSathi. Now I understand what every value means for my health. It's empowering!",
    author: {
      name: "Aisha Patel",
      role: "Wellness Coach",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    content: "As someone with a chronic condition, keeping track of my health reports was challenging. HealthSathi simplified everything and helped me take control of my health journey.",
    author: {
      name: "Jamal Washington",
      role: "Patient Advocate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
  },
  {
    content: "The personalized insights from HealthSathi have been invaluable for my patients. It helps them understand their conditions better between appointments.",
    author: {
      name: "Dr. Elena Rodriguez",
      role: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
    },
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 sm:py-32 bg-white text-gray-900 overflow-hidden">
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

        {/* Navigation area with arrows outside the carousel */}
        <div className="flex items-center justify-center gap-4 mt-16">
          {/* Left Navigation Arrow */}
          <button
            onClick={goToPrevious}
            className="z-10 bg-[#EE2A47] hover:bg-brand-red-dark text-white rounded-full p-2 shadow-lg focus:outline-none border-2 border-white flex-shrink-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>

          {/* Carousel container */}
          <div className="relative overflow-hidden flex-grow max-w-6xl">
            <motion.div
              className="flex gap-8"
              animate={{
                x: `calc(-${activeIndex * 100}% - ${activeIndex * 2}rem)`
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.7
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.author.name}-${index}`}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div>
                    <div className="flex items-center gap-x-4">
                      {testimonial.author.image ? (
                        <Image
                          className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                          src={testimonial.author.image}
                          alt={testimonial.author.name}
                          width={40}
                          height={40}
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                          {testimonial.author.name.charAt(0)}
                        </div>
                      )}
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

          {/* Right Navigation Arrow */}
          <button
            onClick={goToNext}
            className="z-10 bg-[#EE2A47] hover:bg-brand-red-dark text-white rounded-full p-2 shadow-lg focus:outline-none border-2 border-white flex-shrink-0"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>
        </div>

        {/* Navigation Dots with improved visibility */}
        <div className="flex justify-center gap-3 mt-8 bg-gray-100 py-2 px-4 rounded-full inline-block mx-auto">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full ${
                activeIndex === index ? 'bg-brand-red-primary' : 'bg-gray-400'
              } hover:bg-brand-red-light transition-colors`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

