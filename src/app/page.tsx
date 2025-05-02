import { products } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import Layout from '@/components/Layout';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Home() {
  return (
    <ErrorBoundary>
      <Layout>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to TableCraft
          </h1>
          <p className="text-xl text-gray-600">
            Discover our collection of premium tables and furniture
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Featured Products
          </h2>
          <ProductGrid products={products} />
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose TableCraft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Crafted with the finest materials</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over ₹40,000</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">30-Day Returns</h3>
              <p className="text-gray-600">Hassle-free return policy</p>
            </div>
          </div>
        </div>
      </Layout>
    </ErrorBoundary>
  );
}
