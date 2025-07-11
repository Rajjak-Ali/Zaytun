import React from 'react';
import SplitText from '../components/SplitText';

const Dashboard = () => (
  <div className="min-h-screen bg-zaytun-cream p-8">
    <SplitText
      text="User Dashboard"
      className="text-4xl font-bold text-zaytun-green mb-8"
      delay={80}
      duration={0.7}
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow p-4">[Profile Placeholder]</div>
      <div className="bg-white rounded-lg shadow p-4">[Wishlist Placeholder]</div>
      <div className="bg-white rounded-lg shadow p-4">[Orders Placeholder]</div>
    </div>
  </div>
);

export default Dashboard;