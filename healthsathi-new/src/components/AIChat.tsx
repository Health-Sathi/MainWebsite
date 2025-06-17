'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Groq } from 'groq-sdk';
import { useChat } from '@/context/ChatContext';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
}); 

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, addMessage } = useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    addMessage({ type: 'user', content: userMessage });
    setIsTyping(true);

    try {
      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `You are HealthSathi's AI assistant. You help users understand medical information and navigate the HealthSathi platform. 
            Key information about HealthSathi:
            - We are an AI-powered healthcare platform
            - We simplify medical reports and health information
            - Contact: jaytirthjoshi@outlook.com, +1 (770) 376-5867
            - We offer 24/7 health assistance
            - We combine AI technology with healthcare expertise
            Important: Keep all responses very concise and to the point. Aim for 1-2 sentences maximum. 
            If more detail is needed, break it into bullet points.
            dont use any emojis, and dont use any special characters, and dont use any html tags.
            Use markdown formatting for better readability:
            - Use **bold** for emphasis
            - Use *italic* for secondary emphasis
            - Use bullet points for lists
            - Use \`code\` for technical terms
            - Use > for important notes`
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        temperature: 1,
        max_tokens: 1024,
      });

      const botResponse = completion.choices[0]?.message?.content || 'I apologize, but I could not generate a response at this time.';
      addMessage({ type: 'bot', content: botResponse });
    } catch (error) {
      console.error('Error getting AI response:', error);
      addMessage({ 
        type: 'bot', 
        content: 'I apologize, but I\'m having trouble connecting right now. Please try again later or visit our contact page for assistance.' 
      });
    }

    setIsTyping(false);
  };

  const markdownComponents: Components = {
    p: ({ children }) => <p className="mb-2 text-gray-800">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-4 mb-2 text-gray-800">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 text-gray-800">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
    code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-900">{children}</code>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-red-primary pl-4 my-2 italic text-gray-700 bg-gray-50 py-1">
        {children}
      </blockquote>
    ),
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#ee2a47] text-white p-4 rounded-full shadow-lg hover:bg-[#d62540] transition-colors z-50"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200"
          >
            {/* Chat Header */}
            <div className="bg-brand-red-primary text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">HealthSathi AI Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === 'user'
                        ? 'bg-[#ee2a47] text-white shadow-md'
                        : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                    }`}
                  >
                    {message.type === 'bot' ? (
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown components={markdownComponents}>
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-white">{message.content}</p>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-red-primary focus:border-transparent text-gray-800 placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={isTyping || !input.trim()}
                  className="bg-brand-red-primary text-white px-4 py-2 rounded-lg hover:bg-brand-red-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 

//healthsathi ai assistant (idk why i made this but i did)
//can some one make this better?