'use client';
import { motion } from 'framer-motion';
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from 'next/image';
import { useState } from 'react';

// Define the type for a blog post
interface BlogPost {
  title: string;
  excerpt: string;
  fullContent: string;
  image: string;
  date: string;
  category: string;
}

const Blog: React.FC = () => {
  const introText = "Stay informed with our blog, featuring industry insights, guides, and the latest trends in VR real estate technology.";

  // Blog posts data with type annotations
  const blogPosts: BlogPost[] = [
    {
      title: "Experience Real Estate Like Never Before with VR",
      excerpt: "Gone are the days of endless property visits and guesswork.",
      fullContent: "With The VR Estate, you can immerse yourself in lifelike 3D tours of your dream home, exploring every corner without leaving your chair. Our cutting-edge technology bridges the gap between imagination and reality, ensuring you make confident decisions from anywhere in the world.",
      image: "/Images/image05.jpg",
      date: "March 15, 2024",
      category: "Industry Insights"
    },
    {
      title: "5 Ways VR Makes Property Buying Smarter and Faster",
      excerpt: "Time Efficiency: Tour multiple properties in minutes from your home.",
      fullContent: `
        - Time Efficiency: Tour multiple properties in minutes from your home.
        - Enhanced Visualization: See properties as if you were physically there.
        - Global Access: No matter where you are, find your dream home virtually.
      `,
      image: "/Images/image06.jpg",
      date: "March 10, 2024",
      category: "Guides & Tutorials"
    },
    {
      title: "Your Blueprint to Reality: Building Dreams with VR",
      excerpt: "Discover how The VR Estate transforms blueprints into immersive 3D spaces.",
      fullContent: `We turn ideas into experiences, ensuring you get a clear picture of your investment. With us, your dream home isn’t just imagined—it’s experienced.`,
      image: "/Images/image07.jpg",
      date: "March 5, 2024",
      category: "Trends"
    },
    {
      title: "A Beginner’s Guide to VR Home Tours",
      excerpt: "New to VR in real estate? Here’s how it works:",
      fullContent: `
        1. Choose properties to explore.
        2. Put on a VR headset or access tours on your device.
        3. Walk through rooms, explore layouts, and experience details in 3D.
      `,
      image: "/Images/image07.jpg",
      date: "March 5, 2024",
      category: "Trends"
    }
  ];

  // State to track expanded blog post index
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  // Toggle the expanded state of a blog post
  const toggleContent = (index: number) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  // Render the full content of a blog post with optional list handling
  const renderFullContent = (content: string) => {
    const isList = content.trim().startsWith("1.") || content.trim().startsWith("-");
    if (isList) {
      const listItems = content
        .trim()
        .split("\n")
        .map((line, idx) => {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith("-")) {
            return <li key={idx}>{trimmedLine.slice(1).trim()}</li>;
          } else if (trimmedLine.match(/^\d+\./)) {
            return <li key={idx}>{trimmedLine.replace(/^\d+\.\s*/, "")}</li>;
          }
          return <li key={idx}>{trimmedLine}</li>;
        });

      return content.trim().startsWith("1.")
        ? <ol className="list-decimal pl-5">{listItems}</ol>
        : <ul className="list-disc pl-5">{listItems}</ul>;
    }
    return <p>{content}</p>;
  };

  return (
    <div className="container mx-auto px-4 py-16" id="blog">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Blog & Resources
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <TextGenerateEffect words={introText} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {blogPosts.map((post, index) => (
          <BackgroundGradient key={index} className="rounded-xl bg-black p-2 h-full">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="overflow-hidden rounded-lg h-full flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width : 768px )  (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-400">{post.category}</span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <div className="text-gray-400 mb-4 flex-grow">
                  {expandedPost === index
                    ? renderFullContent(post.fullContent)
                    : post.excerpt}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleContent(index)}
                  className="text-blue-400 hover:text-blue-300 transition-colors mt-auto"
                >
                  {expandedPost === index ? "Show Less" : "Read More →"}
                </motion.button>
              </div>
            </motion.article>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};

export default Blog;
