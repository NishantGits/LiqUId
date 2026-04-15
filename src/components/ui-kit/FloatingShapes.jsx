import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingShapes({ variant = 'default' }) {
  const shapes = {
    default: [
      { type: 'sphere', color: 'from-violet-500 to-purple-600', size: 'w-32 h-32', position: 'top-20 right-20', delay: 0 },
      { type: 'cube', color: 'from-indigo-500 to-blue-600', size: 'w-24 h-24', position: 'top-40 left-10', delay: 0.2 },
      { type: 'torus', color: 'from-pink-500 to-rose-600', size: 'w-20 h-20', position: 'bottom-32 right-32', delay: 0.4 },
      { type: 'cone', color: 'from-amber-400 to-orange-500', size: 'w-16 h-16', position: 'bottom-20 left-20', delay: 0.6 },
    ],
    login: [
      { type: 'sphere', color: 'from-violet-500 to-purple-600', size: 'w-40 h-40', position: '-top-10 -right-10', delay: 0 },
      { type: 'cube', color: 'from-indigo-500 to-blue-600', size: 'w-28 h-28', position: 'bottom-10 -left-10', delay: 0.3 },
      { type: 'torus', color: 'from-pink-500 to-rose-600', size: 'w-24 h-24', position: 'top-1/2 -right-12', delay: 0.5 },
    ],
    minimal: [
      { type: 'sphere', color: 'from-slate-300 to-slate-400', size: 'w-24 h-24', position: 'top-10 right-10', delay: 0 },
      { type: 'cube', color: 'from-slate-400 to-slate-500', size: 'w-16 h-16', position: 'bottom-10 left-10', delay: 0.2 },
    ]
  };

  const renderShape = (shape, index) => {
    const baseStyles = `absolute ${shape.position} ${shape.size} bg-gradient-to-br ${shape.color} opacity-80 blur-sm`;
    
    const shapeStyles = {
      sphere: 'rounded-full',
      cube: 'rounded-2xl rotate-45',
      torus: 'rounded-full ring-8 ring-white/20',
      cone: 'rounded-full skew-y-12',
    };

    return (
      <motion.div
        key={index}
        className={`${baseStyles} ${shapeStyles[shape.type]}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: 0.7, 
          scale: 1,
          y: [0, -20, 0],
          rotate: shape.type === 'cube' ? [45, 90, 45] : 0
        }}
        transition={{
          delay: shape.delay,
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
    );
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes[variant]?.map(renderShape)}
    </div>
  );
}