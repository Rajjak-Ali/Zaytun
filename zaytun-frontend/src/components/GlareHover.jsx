import React from 'react';
import { motion } from 'framer-motion';

const GlareHover = ({
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.3,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  playOnce = false,
  className = '',
  ...props
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
      <motion.div
        initial={{ opacity: 0, x: -glareSize }}
        animate={hovered ? { opacity: glareOpacity, x: 0 } : { opacity: 0, x: -glareSize }}
        transition={{ duration: transitionDuration / 1000, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: glareSize,
          height: '100%',
          background: `linear-gradient(${glareAngle}deg, ${glareColor} 0%, transparent 100%)`,
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default GlareHover;