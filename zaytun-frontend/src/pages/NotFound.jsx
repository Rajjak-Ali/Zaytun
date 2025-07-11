import React from 'react';
import SplitText from '../components/SplitText';
import { Link } from 'react-router-dom';
import StarBorder from '../components/StarBorder';

const NotFound = () => (
  <div className="min-h-screen bg-zaytun-cream flex flex-col items-center justify-center p-8">
    <SplitText
      text="404 - Page Not Found"
      className="text-4xl font-bold text-zaytun-green mb-8"
      delay={80}
      duration={0.7}
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
    />
    <Link to="/">
      <StarBorder as="button" color="#1A7F37" speed="3s" className="mt-4">Back Home</StarBorder>
    </Link>
  </div>
);

export default NotFound;