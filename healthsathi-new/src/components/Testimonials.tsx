"use client";

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import './Testimonials.css';

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
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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

    const element = document.querySelector('[data-testimonials-section]');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Infinite auto-scroll logic
  useEffect(() => {
    let frame: number;
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let speed = 0.5; // px per frame

    function animate() {
      if (!isPaused && scrollContainer) {
        // If reached halfway (since we duplicate the testimonials), reset to start
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth / 2
        ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += speed;
        }
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  return (
    <section className="py-24 sm:py-32 bg-background text-foreground overflow-hidden" data-testimonials-section>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Users Say
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our users have to say about their experience with HealthSathi.
          </p>
        </motion.div>
        {/* Horizontally auto-scrolling testimonials, infinite loop, hide scrollbar unless hover */}
        <div
          className="mt-16 overflow-x-auto testimonials-scrollbar"
          style={{ WebkitOverflowScrolling: 'touch' }}
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-nowrap gap-8 cursor-grab">
            {/* Duplicate testimonials for seamless infinite scroll */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.author.name}-${index}`}
                className="flex-shrink-0 w-80 md:w-1/2 lg:w-1/3 flex flex-col justify-between rounded-2xl bg-card text-card-foreground p-8 shadow-lg ring-1 ring-border transform-gpu"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % testimonials.length) * 0.05, duration: 0.3 }}
              >
                <div>
                  <div className="flex items-center gap-x-4">
                    {testimonial.author.image ? (
                      <img
                        className="h-10 w-10 rounded-full bg-muted object-cover"
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold">
                        {testimonial.author.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author.name}</div>
                      <div className="text-sm text-foreground-secondary">{testimonial.author.role}</div>
                    </div>
                  </div>
                  <p className="mt-6 text-foreground-secondary">{testimonial.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* If hydration errors persist, ensure all client-only logic is inside useEffect or useState. */}
      </div>
    </section>
  );
} 

