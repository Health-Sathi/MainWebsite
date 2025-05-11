'use client';

import { useState } from 'react';
import { submitContactForm } from '../lib/appwrite';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      // Reset the form after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Failed to submit. Please try again later.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-primary">Contact Us</h2>
      
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          {errorMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition duration-300 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
} 