import React from 'react';
import SplitText from '../components/SplitText';

const Signup = () => (
  <div className="min-h-screen bg-zaytun-cream flex flex-col items-center justify-center p-8">
    <SplitText
      text="Create Your Zaytun Account"
      className="text-4xl font-bold text-zaytun-green mb-8"
      delay={80}
      duration={0.7}
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
    />
    <div className="w-full max-w-md bg-white rounded-lg shadow p-8">[Signup Form Placeholder]</div>
    <div className="mt-4">[Social Signup Placeholder]</div>
  </div>
);

export default Signup;