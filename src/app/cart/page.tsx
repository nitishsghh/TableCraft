'use client';

import { useCart } from '@/context/CartContext';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [clearing, setClearing] = useState(false);

  useEffect(() => {
    setIsClient(true);
    router.prefetch('/checkout');
  }, [router]);

  const handleRemoveItem = (itemId: string) => {
    try {
      removeFromCart(itemId);
    } catch (error) {
      alert('Error removing item from cart.');
      console.error('Error removing item:', error);
    }
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    try {
      updateQuantity(itemId, newQuantity);
    } catch (error) {
      alert('Error updating item quantity.');
      console.error('Error updating quantity:', error);
    }
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const handleClearCart = () => {
    setClearing(true);
    try {
      clearCart();
    } catch (error) {
      alert('Error clearing cart.');
      console.error('Error clearing cart:', error);
    } finally {
      setClearing(false);
    }
  };

  if (!isClient) {
    return null; // Prevent hydration errors
  }

  if (items.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
            <button
              onClick={() => router.push('/products')}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.material}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-3 py-1">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-700 transition-all duration-300 transform hover:scale-105"
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-gray-500">
                    ₹{item.price.toLocaleString('en-IN')} each
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <div 
              className="bg-white rounded-lg shadow-lg p-6 sticky top-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              style={{
                transform: hoveredItem === 'summary' ? 'perspective(1000px) rotateX(5deg) rotateY(5deg)' : 'perspective(1000px) rotateX(0) rotateY(0)',
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={() => setHoveredItem('summary')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold">₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="space-y-4 pt-4">
                  <button
                    onClick={handleClearCart}
                    className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    disabled={clearing}
                  >
                    {clearing ? 'Clearing...' : 'Clear Cart'}
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 