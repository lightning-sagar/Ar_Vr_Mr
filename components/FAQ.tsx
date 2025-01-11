'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How does VR improve property sales?",
      answer: "VR creates a lasting impression, allowing potential buyers to explore properties remotely and make informed decisions faster."
    },
    {
      question: "Can I customize the VR experience for my brand?",
      answer: "Yes! Our services can be tailored to reflect your branding and unique requirements."
    },
    {
      question: "What equipment do I need to view the VR tours?",
      answer: "Our VR tours are accessible through any modern device - from VR headsets to smartphones and computers, ensuring maximum accessibility for your clients."
    },
    {
      question: "How long does it take to create a VR property tour?",
      answer: "Typically, we can complete a standard property VR tour within 24-48 hours after the initial capture, ensuring quick turnaround for your listings."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h2>
        <TextGenerateEffect 
          words="Get answers to common questions about our VR real estate solutions." 
        />
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <BackgroundGradient 
            key={index} 
            className="rounded-xl bg-black overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white pr-8">
                    {item.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-500"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-gray-400">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </BackgroundGradient>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mt-16"
      >
        <BackgroundGradient className="inline-block rounded-full px-8 py-3 bg-black">
          <p className="text-white">
            Still have questions?{" "}
            <a 
              href="#contact" 
              className="font-medium text-blue-500 hover:text-blue-400 transition-colors"
            >
              Contact us
            </a>
          </p>
        </BackgroundGradient>
      </motion.div>
    </div>
  );
};

export default FAQ;