import React from 'react';
import SplitText from '../components/SplitText';

const ProductListing = () => (
  <div className="min-h-screen bg-zaytun-cream p-8">
    <SplitText
      text="All Products"
      className="text-4xl font-bold text-zaytun-green mb-8"
      delay={80}
      duration={0.7}
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
    />
    <div className="flex gap-8 mb-8">
      <div className="w-1/4 bg-white rounded-lg shadow p-4">[Filters Placeholder]</div>
      <div className="flex-1">
        <div className="mb-4 flex justify-between items-center">
          <div>[Sort Placeholder]</div>
          <div>[Grid/List Toggle]</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">[Product Cards Placeholder]</div>
      </div>
    </div>
  </div>
);

export default ProductListing;