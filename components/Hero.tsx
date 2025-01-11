'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type HeroProps = {
  onBookDemoClick: () => void;
};

const Hero: React.FC<HeroProps> = ({ onBookDemoClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {isClient && (
        <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/v.mp4"
        onEnded={handleVideoEnd}
        onLoadedData={() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.loop = true;
            videoRef.current.autoplay = true;
            videoRef.current.play();
          }
        }}
        style={{ zIndex: -1 }}
      />
      )}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/50 to-gray-900/80">
        <div className="absolute inset-0 bg-grid-white/5 bg-grid animate-grid-fade" />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white mt-10">
                Welcome to
                <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  The VR Estate
                </span>
              </h1>
              <div className="text-gray-400 text-lg mb-8">
                Reimagine property presentations with advanced VR solutions. We specialize in creating
                stunning, interactive 3D property experiences that set you apart in the competitive real estate market.
              </div>
            </div>

            {/* Features Section */}
            <div className="space-y-4 mb-8">
              {[
                'Boost buyer interest with immersive tours',
                'Simplify remote property viewings',
                'Leverage innovative visuals to drive results',
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium
                         hover:from-blue-600 hover:to-purple-600 transform hover:shadow-lg transition-all duration-200"
              >
                Explore VR Models
              </button>
              <button
                onClick={onBookDemoClick}
                className="px-8 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800/50
                         transform hover:shadow-lg transition-all duration-200"
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
