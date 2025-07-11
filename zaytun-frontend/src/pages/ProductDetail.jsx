import React from 'react';
import SplitText from '../components/SplitText';

const ProductDetail = () => (
  <div className="min-h-screen bg-zaytun-cream p-8">
    <SplitText
      text="Product Detail"
      className="text-4xl font-bold text-zaytun-green mb-8"
      delay={80}
      duration={0.7}
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
    />
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow p-4">[Image Gallery Placeholder]</div>
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div className="bg-white rounded-lg shadow p-4">[Specs & Price Placeholder]</div>
        <div className="bg-white rounded-lg shadow p-4">[Add to Cart Placeholder]</div>
        <div className="bg-white rounded-lg shadow p-4">[Reviews Placeholder]</div>
      </div>
    </div>
  </div>
);

export default ProductDetail;