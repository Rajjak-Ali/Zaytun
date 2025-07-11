import React from 'react';
import SplitText from '../components/SplitText';

const About = () => (
  <div className="min-h-screen bg-zaytun-cream flex flex-col items-center justify-center p-8">
    <SplitText
      text="About Zaytun"
      className="text-4xl font-bold text-zaytun-green mb-8"
      delay={80}
      duration={0.7}
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
    />
    <div className="w-full max-w-2xl bg-white rounded-lg shadow p-8">[Brand Story, Mission, Team Placeholder]</div>
  </div>
);

export default About;