"use client";
import { useEffect, useState } from "react";
import {motion} from "framer-motion";
export const TextGenerateEffect = ({ words }: { words: string }) => {
  const [wordArray, setWordArray] = useState<string[]>([]);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setWordArray(words.split(" "));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [words]);

  return (
    <div className="text-base sm:text-xl md:text-3xl font-bold text-center text-white">
      {wordArray.map((word, idx) => (
        <motion.span
          key={idx}
          className="opacity-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: idx * 0.1
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
};