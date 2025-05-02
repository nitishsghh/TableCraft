'use client';

import { Product } from '@/data/products';
import ProductCard from './ProductCard';
import { Suspense } from 'react';

interface ProductGridProps {
  products: Product[];
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 w-full bg-gray-200 animate-pulse" />
          <div className="p-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="flex justify-between items-center">
              <div className="h-8 bg-gray-200 rounded animate-pulse w-24" />
              <div className="h-10 bg-gray-200 rounded animate-pulse w-32" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <Suspense fallback={<ProductGridSkeleton />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Suspense>
  );
} 