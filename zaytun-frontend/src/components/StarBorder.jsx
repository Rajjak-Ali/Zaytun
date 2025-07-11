import React from 'react';
import { motion } from 'framer-motion';

const StarBorder = ({
  as = 'button',
  className = '',
  color = 'cyan',
  speed = '5s',
  children,
  ...props
}) => {
  const Comp = as;
  return (
    <Comp
      className={`relative overflow-hidden px-6 py-2 rounded-lg font-semibold focus:outline-none ${className}`}
      {...props}
    >
      <motion.span
        className="absolute inset-0 border-2 rounded-lg pointer-events-none"
        style={{ borderColor: color, animation: `star-border-spin ${speed} linear infinite` }}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
      />
      <span className="relative z-10">{children}</span>
      <style>{`
        @keyframes star-border-spin {
          0% { box-shadow: 0 0 0 0 ${color}; }
          50% { box-shadow: 0 0 12px 2px ${color}; }
          100% { box-shadow: 0 0 0 0 ${color}; }
        }
      `}</style>
    </Comp>
  );
};

export default StarBorder;