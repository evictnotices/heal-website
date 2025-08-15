import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingIconProps {
  children: ReactNode;
}

export function FloatingIcon({ children }: FloatingIconProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}