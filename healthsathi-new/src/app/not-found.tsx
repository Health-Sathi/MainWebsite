'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NotFound() {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState<Array<{ type: 'user' | 'bot', message: string }>>([
    { type: 'bot', message: 'Hi! I\'m your HealthSathi AI assistant. How can I help you today?' }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory(prev => [...prev, { type: 'user', message }]);
    setIsTyping(true);

    try {
      // Here you would typically make an API call to your AI service
      // For now, we'll simulate a response
      const response = await simulateAIResponse(message);
      
      // Add bot response to chat
      setChatHistory(prev => [...prev, { type: 'bot', message: response }]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setChatHistory(prev => [...prev, { 
        type: 'bot', 
        message: 'I apologize, but I\'m having trouble connecting right now. Please try again later or visit our contact page for assistance.' 
      }]);
    }

    setIsTyping(false);
    setMessage('');
  };

  // Simulated AI response function
  const simulateAIResponse = async (query: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple response logic - you would replace this with actual AI integration
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('service') || lowerQuery.includes('offer')) {
      return 'HealthSathi offers AI-powered medical report analysis, health information simplification, and 24/7 health assistance. Would you like to know more about any specific service?';
    } else if (lowerQuery.includes('contact') || lowerQuery.includes('reach')) {
      return 'You can reach us through our contact page, email at jaytirthjoshi@outlook.com, or call us at +1 (770) 376-5867. We\'re here to help!';
    } else if (lowerQuery.includes('about') || lowerQuery.includes('who')) {
      return 'HealthSathi is an AI-powered healthcare platform dedicated to making medical information accessible and understandable for everyone. We combine cutting-edge AI technology with healthcare expertise to simplify complex medical reports.';
    } else {
      return 'I\'m here to help you navigate HealthSathi. You can ask me about our services, how to contact us, or any other questions about our platform. What would you like to know?';
    }
  };

  return (
    <div className="min-h-screen bg-brand-off-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/healthsathi-logo.svg"
                alt="HealthSathi Logo"
                width={120}
                height={120}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* 404 Text */}
          <motion.h1 
            className="text-6xl font-bold text-brand-red-primary mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            404
          </motion.h1>
          <h2 className="text-2xl font-semibold text-brand-black mb-4">Page Not Found</h2>
          <p className="text-brand-black/80 mb-8">
            Oops! The page you're looking for seems to have taken a health break.
            Let's get you back on track to better health information.
          </p>

          {/* AI Chat Interface */}
          <div className="max-w-md mx-auto mb-8 bg-white rounded-lg shadow-lg p-4">
            <div className="h-64 overflow-y-auto mb-4 space-y-4">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      chat.type === 'user'
                        ? 'bg-brand-red-primary text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {chat.message}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything about HealthSathi..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red-primary focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isTyping || !message.trim()}
                className="bg-brand-red-primary text-white px-4 py-2 rounded-lg hover:bg-brand-red-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </form>
          </div>

          {/* Navigation Options */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-brand-red-primary text-white px-8 py-3 rounded-lg hover:bg-brand-red-dark transition-colors duration-300"
            >
              Return Home
            </Link>
            <div className="mt-4">
              <p className="text-brand-black/60 mb-2">Or try these helpful links:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/about-us"
                  className="text-brand-red-primary hover:text-brand-red-dark transition-colors duration-300"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-brand-red-primary hover:text-brand-red-dark transition-colors duration-300"
                >
                  Contact
                </Link>
                <Link
                  href="https://blog.health-sathi.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red-primary hover:text-brand-red-dark transition-colors duration-300"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>

          {/* Report Issue Button */}
          <div className="mt-8">
            <Link
              href="/contact?subject=404-Error"
              className="text-sm text-brand-black/60 hover:text-brand-red-primary transition-colors"
            >
              Report this issue →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



//this is the 404 page for the website that is used when the page is not found
// can some one make this better?









