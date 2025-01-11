'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: '🏠',
      title: '3D Property Models',
      description: "High-quality, detailed virtual replicas of properties.",
      features: [
        'Photorealistic Rendering',
        'Architectural Visualization',
        'Interactive 3D Walkthroughs',
        'Custom Floor Plans',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🕶️',
      title: "Virtual Reality Tours",
      description: "Immersive experiences that allow clients to walk through properties from anywhere.",
      features: [
        '360-Degree View Integration',
        'Headset Compatibility',
        'Interactive Hotspots',
        'Cross-Platform Support',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '⚙️',
      title: "Custom VR Solutions",
      description: "Tailored packages for real estate professionals to meet specific needs.",
      features: [
        'Custom Scene Development',
        'Integration with MLS Systems',
        'Personalized Branding',
        'AR/VR Maintenance Services',
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: '🔗',
      title: "Interactive Click-Through Models",
      description: "Engage buyers with user-friendly, interactive features.",
      features: [
        'Customizable UI Components',
        'Dynamic Content Updates',
        'Real-Time Feedback Forms',
        'Lead Capture Features',
      ],
      color: 'from-orange-500 to-red-500',
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900/0" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business grow and succeed in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onHoverStart={() => setActiveService(index)}
              onHoverEnd={() => setActiveService(null)}
              className="relative group"
            >
              <div className="relative z-10 h-full p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div className="mb-4">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center text-2xl
                    bg-gradient-to-r ${service.color} p-2
                  `}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400  text-sm mb-4">{service.description}</p>

                <motion.ul 
                  className="space-y-2"
                  animate={{ height: activeService === index ? 'auto' : '0' }}
                  transition={{ duration: 0.3 }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: activeService === index ? 1 : 0,
                        x: activeService === index ? 0 : -10,
                      }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <span className={`
                        w-1.5 h-1.5 rounded-full mr-2
                        bg-gradient-to-r ${service.color}
                      `} />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* <motion.button
                  className={`
                    mt-6 px-4 py-2 text-sm rounded-lg w-full
                    bg-gradient-to-r ${service.color}
                    opacity-0 group-hover:opacity-100 transition-opacity
                    transform translate-y-2 group-hover:translate-y-0
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button> */}
              </div>

              <div className={`
                absolute inset-0 bg-gradient-to-r ${service.color}
                opacity-0 group-hover:opacity-10 transition-opacity
                rounded-2xl blur-xl
              `} />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white
                     hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;