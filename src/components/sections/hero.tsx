import { useConfig } from '@/hooks/use-config';
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/animations/text';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Hero() {
  const { config } = useConfig();

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Enhanced Gradient Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 blur-[120px] transform rotate-12 opacity-50 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-l from-purple-600/20 via-pink-600/20 to-blue-600/20 blur-[120px] transform -rotate-12 opacity-30" />
      </div>

      {/* Enhanced Polygon Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-30">
          <pattern
            id="hexagons"
            width="50"
            height="43.4"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(5) rotate(0)"
          >
            <path
              d="M25 0L50 14.4v28.8L25 43.4L0 43.4V14.4z"
              stroke="currentColor"
              strokeOpacity="0.1"
              fill="none"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.h1 
            variants={item}
            className="text-5xl md:text-7xl font-bold"
          >
            <AnimatedText>{config.bot.name}</AnimatedText>
          </motion.h1>
          <motion.p 
            variants={item}
            className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {config.bot.description}
          </motion.p>
          <motion.div 
            variants={item}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={config.bot.inviteUrl}
              className="bg-[var(--color-primary)] hover:opacity-90 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Discord
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={config.bot.supportServer}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Support Server
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}