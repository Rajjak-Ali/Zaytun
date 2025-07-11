import React, { useState, useEffect } from 'react';
import SplitText from '../components/SplitText';
import ProductCard from '../components/ProductCard';
import { Dialog } from '@headlessui/react';

// Mock data for products
const mockProducts = [
  {
    id: 1,
    name: 'Premium Olive Oil',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    price: 499,
    oldPrice: 599,
    rating: 5,
    reviews: 120,
    category: 'Oil',
    isNew: true,
    popularity: 90,
  },
  {
    id: 2,
    name: 'Organic Dates',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
    price: 299,
    oldPrice: 349,
    rating: 4,
    reviews: 80,
    category: 'Dry Fruits',
    isNew: false,
    popularity: 70,
  },
  {
    id: 3,
    name: 'Natural Honey',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    price: 399,
    oldPrice: 449,
    rating: 5,
    reviews: 150,
    category: 'Honey',
    isNew: true,
    popularity: 95,
  },
  // Add more mock products as needed
];

const categories = ['All', 'Oil', 'Dry Fruits', 'Honey'];
const sortOptions = [
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'New Arrivals', value: 'new' },
  { label: 'Popularity', value: 'popularity' },
];

const ProductListing = () => {
  const [products, setProducts] = useState(mockProducts);
  const [displayed, setDisplayed] = useState(6);
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('price-asc');
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist') || '[]'));
  const [quickView, setQuickView] = useState(null);
  const [grid, setGrid] = useState(true);

  // Filtering
  const filtered = products.filter(p =>
    (category === 'All' || p.category === category)
  );

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'new') return b.isNew - a.isNew;
    if (sort === 'popularity') return b.popularity - a.popularity;
    return 0;
  });

  // Lazy loading
  const visibleProducts = sorted.slice(0, displayed);

  // Wishlist logic
  const handleWishlist = (product) => {
    let newWishlist;
    if (wishlist.includes(product.id)) {
      newWishlist = wishlist.filter(id => id !== product.id);
    } else {
      newWishlist = [...wishlist, product.id];
    }
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  // Quick view logic
  const handleQuickView = (product) => setQuickView(product);
  const closeQuickView = () => setQuickView(null);

  // Add to cart (mock)
  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
  };

  // Infinite scroll
  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        setDisplayed(d => Math.min(d + 3, sorted.length));
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [sorted.length]);

  return (
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
        {/* Filters */}
        <div className="w-1/4 bg-white rounded-lg shadow p-4">
          <div className="mb-4 font-semibold text-zaytun-black">Category</div>
          <div className="flex flex-col gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                className={`text-left px-2 py-1 rounded ${category === cat ? 'bg-zaytun-green text-white' : 'hover:bg-zaytun-cream'}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        {/* Product grid/list */}
        <div className="flex-1">
          <div className="mb-4 flex justify-between items-center">
            {/* Sort */}
            <select
              className="border rounded px-2 py-1"
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            {/* Grid/List toggle */}
            <button
              className="ml-4 px-3 py-1 rounded border bg-white shadow"
              onClick={() => setGrid(g => !g)}
            >
              {grid ? 'List View' : 'Grid View'}
            </button>
          </div>
          <div className={grid ? 'grid grid-cols-1 md:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
            {visibleProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onWishlist={handleWishlist}
                onQuickView={handleQuickView}
                onAddToCart={handleAddToCart}
                isWishlisted={wishlist.includes(product.id)}
              />
            ))}
          </div>
          {displayed < sorted.length && (
            <div className="text-center mt-8 text-zaytun-green animate-pulse">Loading more products...</div>
          )}
        </div>
      </div>
      {/* Quick View Modal */}
      <Dialog open={!!quickView} onClose={closeQuickView} className="fixed z-50 inset-0 flex items-center justify-center">
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
        {quickView && (
          <div className="relative bg-white rounded-lg shadow-lg p-8 z-10 max-w-md w-full">
            <img src={quickView.image} alt={quickView.name} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-2xl font-bold mb-2">{quickView.name}</h2>
            <div className="mb-2 text-zaytun-green font-bold text-xl">₹{quickView.price}</div>
            <div className="mb-2">{[...Array(5)].map((_, i) => (
              <span key={i} className={i < quickView.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
            ))} <span className="ml-2 text-xs text-gray-500">({quickView.reviews})</span></div>
            <div className="mb-4 text-gray-600">Category: {quickView.category}</div>
            <button
              className="w-full py-2 bg-zaytun-green text-white rounded-lg font-semibold mt-2 hover:bg-zaytun-black transition-colors"
              onClick={() => { handleAddToCart(quickView); closeQuickView(); }}
            >Add to Cart</button>
            <button
              className="absolute top-2 right-2 text-zaytun-green hover:text-zaytun-black text-2xl"
              onClick={closeQuickView}
            >&times;</button>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default ProductListing;