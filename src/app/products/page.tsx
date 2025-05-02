'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import Layout from '@/components/Layout';

type Room = 'all' | 'living' | 'bedroom' | 'dining' | 'office' | 'outdoor';
type Category = 'all' | 'wood' | 'glass' | 'metal';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedRoom, setSelectedRoom] = useState<Room>('all');

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const roomMatch = selectedRoom === 'all' || product.room === selectedRoom;
    return categoryMatch && roomMatch;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter by Room</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => setSelectedRoom('all')}
              className={`px-4 py-2 rounded-md ${
                selectedRoom === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Rooms
            </button>
            <button
              onClick={() => setSelectedRoom('living')}
              className={`px-4 py-2 rounded-md ${
                selectedRoom === 'living'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Living Room
            </button>
            <button
              onClick={() => setSelectedRoom('bedroom')}
              className={`px-4 py-2 rounded-md ${
                selectedRoom === 'bedroom'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Bedroom
            </button>
            <button
              onClick={() => setSelectedRoom('dining')}
              className={`px-4 py-2 rounded-md ${
                selectedRoom === 'dining'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Dining Room
            </button>
            <button
              onClick={() => setSelectedRoom('office')}
              className={`px-4 py-2 rounded-md ${
                selectedRoom === 'office'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Office
            </button>
            <button
              onClick={() => setSelectedRoom('outdoor')}
              className={`px-4 py-2 rounded-md ${
                selectedRoom === 'outdoor'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Outdoor
            </button>
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter by Material</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Materials
            </button>
            <button
              onClick={() => setSelectedCategory('wood')}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === 'wood'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Wood
            </button>
            <button
              onClick={() => setSelectedCategory('glass')}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === 'glass'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Glass
            </button>
            <button
              onClick={() => setSelectedCategory('metal')}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === 'metal'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Metal
            </button>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredProducts.length} products
          </p>
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </Layout>
  );
} 