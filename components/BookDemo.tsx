'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BackgroundGradient } from './ui/background-gradient';
import { TextGenerateEffect } from './ui/text-generate-effect';

const BookDemo = () => {
  const introText =
    'Get a hands-on look at our VR technology and learn how it can enhance your business. Experience the future of real estate marketing.';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    propertyType: '',
    additionalNotes: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Your demo request was submitted successfully!');
        setFormData({
          fullName: '',
          email: '',
          companyName: '',
          propertyType: '',
          additionalNotes: '',
        });
      } else {
        setStatus(data.error || 'Failed to submit the demo request.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Book a Demo
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <TextGenerateEffect words={introText} />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Section with Benefits */}
        <BackgroundGradient className="rounded-xl bg-black p-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Why Book a Demo?</h3>
            {[
              {
                icon: '🎯',
                title: 'Personalized Walkthrough',
                description: 'Get a customized demonstration tailored to your needs',
              },
              {
                icon: '💡',
                title: 'Expert Guidance',
                description: 'Learn from our VR specialists about implementation',
              },
              {
                icon: '📊',
                title: 'ROI Analysis',
                description: 'Understand the potential impact on your business',
              },
              {
                icon: '🤝',
                title: 'Q&A Session',
                description: 'Get all your questions answered in real-time',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <span className="text-3xl">{benefit.icon}</span>
                <div>
                  <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </BackgroundGradient>

        {/* Right Section with Form */}
        <BackgroundGradient className="rounded-xl bg-black p-8">
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2 text-sm">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm">Property Type *</label>
                <select
                  name="propertyType"
                  required
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Select Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="mixed">Mixed Use</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm">Additional Notes</label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors h-32 resize-none"
                  placeholder="Tell us about your specific needs..."
                ></textarea>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold transition-all hover:opacity-90"
            >
              Schedule Demo
            </motion.button>

            <p className="text-xs text-gray-400 text-center">
              By booking a demo, you agree to our{' '}
              <a href="#" className="text-blue-400 hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-400 hover:underline">
                Privacy Policy
              </a>
            </p>
          </motion.form>

          {/* Status Message */}
          {status && (
            <p className={`mt-4 text-center font-medium ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {status}
            </p>
          )}
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default BookDemo;
