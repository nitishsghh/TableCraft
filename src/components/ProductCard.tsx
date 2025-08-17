'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [discountEndDate, setDiscountEndDate] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (product.discount?.validUntil) {
      const endDate = new Date(product.discount.validUntil);
      if (!isNaN(endDate.getTime())) {
        setDiscountEndDate(endDate.toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }));
      }
    }
  }, [product.discount]);

  const handleAddToCart = () => {
    try {
      addToCart(product);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleImageError = () => {
    setImageError(true);
    setIsImageLoading(false);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  if (!isMounted) {
    return null;
  }

  const calculateDiscountedPrice = (price: number, discount: number) => {
    return Math.round(price * (1 - discount / 100));
  };

  const get3DTransform = () => {
    if (!isHovered) return 'perspective(1000px) rotateX(0) rotateY(0)';
    
    const rotateX = (mousePosition.y - 0.5) * 10;
    const rotateY = (mousePosition.x - 0.5) * 10;
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const getImageUrl = () => {
    // Fallback image if the main image fails to load
    const fallbackImage = '/images/placeholder.jpg';
    
    if (imageError) {
      return fallbackImage;
    }
    
    return product.image;
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:shadow-2xl"
      style={{
        transform: get3DTransform(),
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="relative aspect-square">
        {isImageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-gray-400 text-sm">Image not available</div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={getImageUrl()}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-transform duration-300 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              priority={false}
              quality={85}
              unoptimized={true}
            />
          </div>
        )}
        {product.discount && (
          <div
            className={`absolute top-2 right-2 px-2 py-1 rounded-full text-sm font-semibold transition-transform duration-300 bg-red-500 text-white ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            style={{
              transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
            }}
          >
            {product.discount.percentage}% OFF
          </div>
        )}
      </div>
      <div 
        className="p-4"
        style={{
          transform: isHovered ? 'translateZ(10px)' : 'translateZ(0)',
        }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        {/* Product Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium w-24">Dimensions:</span>
            <span>{product.dimensions}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium w-24">Material:</span>
            <span>{product.material}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium w-24">Room:</span>
            <span className="capitalize">{product.room}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium w-24">Category:</span>
            <span className="capitalize">{product.category}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            {product.discount ? (
              <>
                <p className="text-lg font-bold text-gray-900">
                  ₹{calculateDiscountedPrice(product.price, product.discount.percentage).toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-gray-500 line-through">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
                {discountEndDate && (
                  <p className="text-xs text-red-500 mt-1">
                    Offer ends: {discountEndDate}
                  </p>
                )}
              </>
            ) : (
              <p className="text-lg font-bold text-gray-900">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!product.price || product.price <= 0}
            style={{
              transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 