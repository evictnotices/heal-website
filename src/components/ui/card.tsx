import { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import * as Icons from 'lucide-react';
import { FloatingIcon } from '@/components/animations/float';

interface CardProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}

export function FeatureCard({ title, description, icon }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  const IconComponent = Icons[icon];

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className="relative h-72 w-72 rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl transition-shadow hover:shadow-purple-500/20"
    >
      <motion.div 
        style={{ transform: "translateZ(50px)" }} 
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <FloatingIcon>
          <motion.div 
            className="rounded-lg bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/10 p-4 w-fit"
            whileHover={{ scale: 1.1 }}
          >
            <IconComponent className="h-8 w-8 text-[var(--color-primary)]" />
          </motion.div>
        </FloatingIcon>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </motion.div>
    </motion.div>
  );
}