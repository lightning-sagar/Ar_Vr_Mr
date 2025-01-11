"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SparklesCore = ({
  background = 'rgba(255, 255, 255, 0.1)', 
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor = 'rgba(255, 255, 255, 0.8)' 
}: {
  background?: string; 
  minSize: number;
  maxSize: number;
  particleDensity: number;
  className?: string;
  particleColor?: string;
}) => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const particleCount = particleDensity;
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize
    }));
    setParticles(newParticles);
  }, [particleDensity, minSize, maxSize]);

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{ background }} 
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            background: particleColor,
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 1, // Fixed duration for consistency
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2, // Random delay for animation
          }}
        />
      ))}
    </div>
  );
};