import React from 'react';
import SplitText from '../components/SplitText';

const Checkout = () => (
  <div className="min-h-screen bg-zaytun-cream p-8">
    <SplitText
      text="Checkout"
      className="text-4xl font-bold text-zaytun-green mb-8"
      delay={80}
      duration={0.7}
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
    />
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1 bg-white rounded-lg shadow p-4">[Address Form Placeholder]</div>
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-4">[Order Summary Placeholder]</div>
    </div>
  </div>
);

export default Checkout;