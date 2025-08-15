import { motion } from 'framer-motion';
import { useConfig } from '@/hooks/use-config';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export function Terms() {
  const { config } = useConfig();
  const { termsOfService } = config.legal;

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto prose prose-invert"
        >
          <motion.h1 variants={item} className="text-4xl font-bold mb-8">
            Terms of Service
          </motion.h1>
          <motion.p variants={item} className="text-gray-400">
            Last updated: {termsOfService.lastUpdated}
          </motion.p>
          {termsOfService.sections.map((section, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 p-6 rounded-lg my-6"
            >
              <h2>{section.title}</h2>
              <p className="whitespace-pre-line">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}