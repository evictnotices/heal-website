import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useConfig } from '@/hooks/use-config';

export function PolygonBackground() {
  const { config } = useConfig();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;
      
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        className="w-full h-full flex items-center justify-center"
      >
        <div className="relative w-[800px] h-[800px]">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
              style={{
                border: `2px solid ${config.theme.primary}`,
                rotate: 60 * i,
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [60 * i, 60 * i + 360],
                }}
                transition={{
                  duration: 20 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ transform: `rotate(${30 * i}deg)`, stroke: config.theme.primary }}
                >
                  <motion.polygon
                    points="50,0 100,25 100,75 50,100 0,75 0,25"
                    fill="none"
                    strokeWidth="0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[var(--color-background)] opacity-90" />
    </div>
  );
}