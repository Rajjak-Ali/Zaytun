import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const getSparks = (count, radius) => {
  const sparks = [];
  for (let i = 0; i < count; i++) {
    const angle = (2 * Math.PI * i) / count;
    sparks.push({
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      key: i,
    });
  }
  return sparks;
};

const ClickSpark = ({
  children,
  sparkColor = '#fff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
}) => {
  const [show, setShow] = React.useState(false);
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setShow(false);
    setTimeout(() => setShow(true), 10);
    setTimeout(() => setShow(false), duration);
    if (children.props.onClick) children.props.onClick(e);
  };

  const sparks = getSparks(sparkCount, sparkRadius);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} onClick={handleClick}>
      {React.cloneElement(children)}
      <AnimatePresence>
        {show && (
          <motion.div
            style={{
              position: 'absolute',
              left: coords.x - sparkSize / 2,
              top: coords.y - sparkSize / 2,
              pointerEvents: 'none',
              zIndex: 10,
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration / 1000 }}
          >
            {sparks.map((spark) => (
              <motion.div
                key={spark.key}
                initial={{ x: 0, y: 0, scale: 1 }}
                animate={{ x: spark.x, y: spark.y, scale: 0 }}
                transition={{ duration: duration / 1000, ease: 'easeOut' }}
                style={{
                  width: sparkSize,
                  height: sparkSize,
                  borderRadius: '50%',
                  background: sparkColor,
                  position: 'absolute',
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClickSpark;