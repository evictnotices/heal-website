import { motion } from 'framer-motion';
import commandsData from '@/config/commands.json';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Commands() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Commands
          </motion.h1>
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {commandsData.commands.map((command) => (
              <motion.div
                key={command.name}
                variants={item}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
                className="bg-white/5 p-4 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-[var(--color-primary)]">{command.name}</h2>
                  <span className="text-sm px-2 py-1 rounded-full bg-white/10">{command.category}</span>
                </div>
                <p className="text-gray-400 mt-1">{command.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}