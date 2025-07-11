import React from 'react';
import { motion } from 'framer-motion';

const splitText = (text, type) => {
  if (type === 'words') return text.split(' ');
  if (type === 'lines') return text.split('\n');
  return text.split(''); // chars
};

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
}) => {
  const items = splitText(text, splitType);
  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={from}
          whileInView={to}
          viewport={{ once: true, amount: threshold, margin: rootMargin }}
          transition={{ delay: (i * delay) / 1000, duration, ease }}
          style={{ display: 'inline-block', whiteSpace: splitType === 'words' ? 'pre' : 'inherit' }}
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitText;