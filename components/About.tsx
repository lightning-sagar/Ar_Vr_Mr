'use client';
import { motion } from 'framer-motion';
import { SparklesCore } from "./ui/sparkles";
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { AnimatedTestimonials } from './ui/animated-testimonials'; 

const About = () => {
  const missionText =
    "At The VR Estate, we are passionate about merging technology and real estate. Our mission is to simplify property showcasing while offering a visually compelling experience for buyers and sellers.";

  const teamDescription =
    "We are a passionate team of ambitious, curious, and hardworking students with over 3 years of experience in cutting-edge technology. For the past 2 months, we have been dedicated to refining this innovative idea. Driven by commitment, we specialize in delivering high-quality, production-ready solutions tailored to our clients' needs, ensuring timely execution and exceptional results.";

  return (
    <div className="flex flex-col overflow-hidden bg-gray-900 text-gray-100">
      <div className="flex flex-col items-center">
        <div className="container mx-auto relative">
          <div className="min-h-[40rem] w-full bg-gradient-to-r flex flex-col items-center justify-center overflow-hidden rounded-md p-8">
            <motion.div
              initial="md:opacity-0 md:-translate-y-12"
              whileInView="md:opacity-1 md:translate-y-0"
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-20 text-center space-y-8 max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                About Us
              </h1>
              <div className="absolute inset-0 w-full h-full">
                <SparklesCore
                  background="transparent"
                  minSize={0.8}
                  maxSize={2}
                  particleDensity={60}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
              <div className="text-lg md:text-xl text-gray-100">
                <TextGenerateEffect words={missionText} />
              </div>
            </motion.div>
          </div>

          {/* Team Section with Left and Right Layout */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-center -mb-48 md:mb-8">
            OUR TEAM
          </h1>
          <motion.div
            initial="md:opacity-0 md:translate-y-12"
            whileInView="md:opacity-1 md:translate-y-0"
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-4 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div className="team-desc text-center md:text-left text-lg md:text-xl text-gray-300 flex flex-col items-center justify-center w-full"> 
              <p className='hidden md:block w-full px-4'>{teamDescription}</p> {/* Hide on mobile */}
            </div>
            
            <div>
              <AnimatedTestimonials
                testimonials={[
                  {
                    quote:
                      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
                    name: "Anchit Dixit",
                    designation: "Founder and CEO",
                    src: "https://drive.google.com/uc?id=1CJ9yXavxT9h6HPN7iiflzpnKiPOwtQ6C", 
                  },
                  {
                    quote:
                      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
                    name: "Utkarsh Upadhyay",
                    designation: "Chief Technical Officer",
                    src: "https://drive.google.com/uc?id=1IGdNI6VU-UOVP74Y9OPXuoPWqjr99qtx",
                  },
                  {
                    quote:
                      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
                    name: "Eklavya Gautam",
                    designation: "CREATIVE DIRECTOR- 3D MODELLING",
                    src: "https://drive.google.com/uc?id=1eMxX3riG1b7ivyCg3D-Mg9pPRtLFLYPL", 
                  },
                  {
                    quote:
                      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
                    name: "Utkarsh Mishra",
                    designation: "CFO",
                    src: "https://drive.google.com/uc?export=download&id=1qaJvqxRtHbIvDjXtzjWis4zQsa4Y__gv", 
                  },
                ]}
              />
            </div>
          </motion.div>

          <motion.div
            initial="md:opacity-0 md:translate-y-12"
            whileInView="md:opacity-1 md:translate-y-0"
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-16 text-center mb-16"
          >
            <BackgroundGradient className="inline-block rounded-full px-8 py-3 bg-black">
              <span className="text-white font-medium text-lg">
                Innovating Real Estate Through Technology
              </span>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
