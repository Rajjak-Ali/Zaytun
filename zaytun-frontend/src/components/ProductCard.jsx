import React from 'react';
import GlareHover from './GlareHover';
import ClickSpark from './ClickSpark';
import StarBorder from './StarBorder';
import { HeartIcon, EyeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const ProductCard = ({ product, onWishlist, onQuickView, onAddToCart, isWishlisted }) => {
  return (
    <GlareHover className="bg-white rounded-lg shadow p-4 flex flex-col relative group">
      <div className="relative mb-4">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
        <button
          className={`absolute top-2 right-2 p-2 rounded-full bg-zaytun-cream shadow transition-colors ${isWishlisted ? 'text-red-500' : 'text-zaytun-green'}`}
          onClick={(e) => { e.stopPropagation(); onWishlist(product); }}
        >
          <HeartIcon className="w-5 h-5" />
        </button>
        <button
          className="absolute top-2 left-2 p-2 rounded-full bg-zaytun-cream shadow text-zaytun-green"
          onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
        >
          <EyeIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-zaytun-black mb-1">{product.name}</h3>
        <div className="flex items-center mb-2">
          <span className="text-zaytun-green font-bold text-xl mr-2">₹{product.price}</span>
          {product.oldPrice && <span className="text-gray-400 line-through">₹{product.oldPrice}</span>}
        </div>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
          ))}
          <span className="ml-2 text-xs text-gray-500">({product.reviews})</span>
        </div>
      </div>
      <ClickSpark>
        <StarBorder
          as="button"
          color="#1A7F37"
          speed="2s"
          className="mt-2 w-full py-2 text-center text-white bg-zaytun-green rounded-lg hover:bg-zaytun-black transition-colors"
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
        >
          <ShoppingCartIcon className="w-5 h-5 inline-block mr-2 align-text-bottom" />Add to Cart
        </StarBorder>
      </ClickSpark>
    </GlareHover>
  );
};

export default ProductCard;