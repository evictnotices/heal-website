import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
}

export function AnimatedText({ children }: AnimatedTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        textShadow: [
          "0 0 20px var(--color-primary)",
          "0 0 40px var(--color-primary)",
          "0 0 20px var(--color-primary)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent"
    >
      {children}
    </motion.span>
  );
}