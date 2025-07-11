import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClickSpark from './components/ClickSpark';
import StarBorder from './components/StarBorder';
import GlareHover from './components/GlareHover';
import SplitText from './components/SplitText';

const Placeholder = ({ title }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-zaytun-cream">
    <SplitText
      text={title}
      className="text-4xl font-bold text-zaytun-green mb-8"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
    />
    <Link to="/">
      <StarBorder as="button" color="#1A7F37" speed="3s" className="mt-4">Back Home</StarBorder>
    </Link>
  </div>
);

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
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Placeholder title="Product Listing" />} />
        <Route path="/product/:id" element={<Placeholder title="Product Detail" />} />
        <Route path="/cart" element={<Placeholder title="Cart" />} />
        <Route path="/checkout" element={<Placeholder title="Checkout" />} />
        <Route path="/login" element={<Placeholder title="Login" />} />
        <Route path="/signup" element={<Placeholder title="Signup" />} />
        <Route path="/dashboard" element={<Placeholder title="User Dashboard" />} />
        <Route path="/admin" element={<Placeholder title="Admin Panel" />} />
        <Route path="/about" element={<Placeholder title="About Us" />} />
        <Route path="/contact" element={<Placeholder title="Contact Us" />} />
        <Route path="/faq" element={<Placeholder title="FAQ" />} />
        <Route path="/policy" element={<Placeholder title="Privacy Policy & Terms" />} />
        <Route path="*" element={<Placeholder title="404 - Page Not Found" />} />
      </Routes>
    </Router>
  );
}

export default App;
