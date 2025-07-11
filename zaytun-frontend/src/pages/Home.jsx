import React from 'react';
import SplitText from '../components/SplitText';
import GlareHover from '../components/GlareHover';
import ClickSpark from '../components/ClickSpark';
import StarBorder from '../components/StarBorder';

const Home = () => (
  <div className="min-h-screen bg-zaytun-cream flex flex-col items-center justify-center">
    <SplitText
      text="Welcome to Zaytun"
      className="text-5xl font-extrabold text-zaytun-green mb-8"
      delay={80}
      duration={0.7}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
    />
    <GlareHover glareColor="#1A7F37" glareOpacity={0.2} glareAngle={-30} glareSize={300} transitionDuration={800}>
      <ClickSpark>
        <StarBorder as="button" color="#1A7F37" speed="4s" className="text-lg px-8 py-3">Shop Now</StarBorder>
      </ClickSpark>
    </GlareHover>
    <div className="mt-12 w-full max-w-4xl">
      <div className="h-32 bg-zaytun-green rounded-lg mb-6 flex items-center justify-center text-zaytun-cream text-xl font-semibold">[Hero / Offer Slider Placeholder]</div>
      <div className="h-32 bg-zaytun-black rounded-lg flex items-center justify-center text-zaytun-cream text-xl font-semibold">[Featured Products Placeholder]</div>
    </div>
  </div>
);

export default Home;