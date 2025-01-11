'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Works from '../components/Works';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import BookDemo from '../components/BookDemo';
import Blog from '@/components/Blog';

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
  </div>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookDemoRef = useRef<HTMLDivElement>(null);  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [isLoading, setIsLoading] = useState(true);

  const handleBookDemoClick = () => {
    setTimeout(() => {
      bookDemoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <main ref={containerRef} className="relative min-h-screen bg-gray-900">
      <Header />
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />
        <motion.div
          className="fixed top-0 left-1/4 w-80 h-80 bg-blue-500/30 rounded-full filter blur-xl opacity-10"
          animate={{
            x: [0, 30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="fixed bottom-0 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full filter blur-xl opacity-10"
          animate={{
            x: [0, -30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </div>

      <div className="relative z-10">
        <section id="home">
          <Hero onBookDemoClick={handleBookDemoClick} />
        </section>
        <section id="about" className="">
          <About />
        </section>
        <section id="services" className="">
          <Services />
        </section>
        <section id="works" className="">
          <Works />
        </section>
        <section id="blog" className="">
          <Blog />
        </section>
        <section id="faq" className="">
          <FAQ />
        </section>
        <section id="contact" className="">
          <Contact />
        </section>
        <section id="book-demo" className="" ref={bookDemoRef}>
          <BookDemo />
        </section>
      </div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left z-50"
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </main>
  );
}
