'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Contact = () => {
  const contactText = "We'd love to hear from you! Reach out for inquiries, partnerships, or demos.";

  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mail: formData.email,
          subject: formData.subject,
          message: `Name: ${formData.name}\n${formData.message}`,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setStatus('Your message was sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setStatus(data.error || 'Failed to send your message. Please try again.');
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
          Contact Us
        </motion.h2>
        <TextGenerateEffect words={contactText} />
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8 mt-20">
            {[
            {
              title: "Email",
              value: "anchit.dixit@thevrestate.com ",
              icon: "📧",
              link: "mailto:anchit.dixit@thevrestate.com "
            },
            {
              title: "Phone",
              value: "+91-6268299348/+91-7489019377",
              icon: "📱",
              link: "tel:+91-6268299348"
            },
            {
              title: "Office",
              value: "Lucknow, Uttar Pradesh",
              icon: "🏢",
              link: "https://maps.app.goo.gl/HbF7jkCfEPp9Wafm8"
            }
          ].map((item, index) => (
            <BackgroundGradient key={index} className="rounded-xl p-6 bg-black">
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.value}</p>
                </div>
              </motion.a>
            </BackgroundGradient>
          ))}
        </div>

        {/* Contact Form */}
        <BackgroundGradient className="rounded-xl p-6 bg-black">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 h-32"
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold"
              type="submit"
            >
              Send Message
            </motion.button>

            {/* Status Message */}
            {status && (
              <p
                className={`mt-4 text-center font-medium ${
                  status.includes('successfully') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {status}
              </p>
            )}
          </motion.form>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Contact;