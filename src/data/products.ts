export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'wood' | 'glass' | 'metal';
  dimensions: string;
  material: string;
  room: 'living' | 'bedroom' | 'dining' | 'office' | 'outdoor';
  discount?: {
    percentage: number;
    validUntil: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Wooden Coffee Table',
    description: 'Elegant coffee table with a modern design, perfect for your living room.',
    price: 15999.99,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    category: 'wood',
    dimensions: '120 x 60 x 45 cm',
    material: 'Solid Oak',
    room: 'living',
  },
  {
    id: '2',
    name: 'Glass Dining Table',
    description: 'Contemporary glass dining table with metal frame, seats 6-8 people.',
    price: 42999.99,
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
    category: 'glass',
    dimensions: '180 x 90 x 75 cm',
    material: 'Tempered Glass, Stainless Steel',
    room: 'dining',
  },
  {
    id: '3',
    name: 'Metal Office Chair',
    description: 'Ergonomic office chair with adjustable height and lumbar support.',
    price: 18999.99,
    image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg',
    category: 'metal',
    dimensions: '65 x 65 x 110 cm',
    material: 'Aluminum, Mesh',
    room: 'office',
  },
  {
    id: '4',
    name: 'Wooden Bookshelf',
    description: 'Classic wooden bookshelf with adjustable shelves and storage space.',
    price: 24999.99,
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
    category: 'wood',
    dimensions: '180 x 40 x 200 cm',
    material: 'Pine Wood',
    room: 'living',
  },
  {
    id: '5',
    name: 'Glass TV Stand',
    description: 'Modern TV stand with glass shelves and cable management.',
    price: 21999.99,
    image: 'https://images.pexels.com/photos/1571455/pexels-photo-1571455.jpeg',
    category: 'glass',
    dimensions: '160 x 45 x 50 cm',
    material: 'Tempered Glass, Metal',
    room: 'living',
  },
  {
    id: '6',
    name: 'Metal Bed Frame',
    description: 'Sturdy metal bed frame with headboard and footboard.',
    price: 35999.99,
    image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg',
    category: 'metal',
    dimensions: '200 x 160 x 40 cm',
    material: 'Steel',
    room: 'bedroom',
  },
  {
    id: '7',
    name: 'Wooden Dining Chairs',
    description: 'Set of 4 wooden dining chairs with comfortable cushions.',
    price: 28999.99,
    image: 'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg',
    category: 'wood',
    dimensions: '45 x 45 x 85 cm',
    material: 'Mahogany',
    room: 'dining',
  },
  {
    id: '8',
    name: 'Glass Coffee Table',
    description: 'Modern glass coffee table with metal legs and storage shelf.',
    price: 19999.99,
    image: 'https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg',
    category: 'glass',
    dimensions: '100 x 60 x 45 cm',
    material: 'Tempered Glass, Chrome',
    room: 'living',
  },
  {
    id: '9',
    name: 'Metal Outdoor Table',
    description: 'Weather-resistant outdoor dining table with umbrella hole.',
    price: 32999.99,
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
    category: 'metal',
    dimensions: '150 x 90 x 75 cm',
    material: 'Aluminum',
    room: 'outdoor',
  },
  {
    id: '10',
    name: 'Wooden Desk',
    description: 'Spacious wooden desk with drawers and cable management.',
    price: 27999.99,
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg',
    category: 'wood',
    dimensions: '140 x 70 x 75 cm',
    material: 'Oak',
    room: 'office',
  },
  {
    id: '11',
    name: 'Glass Side Table',
    description: 'Elegant glass side table with metal base, perfect for living room.',
    price: 12999.99,
    image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg',
    category: 'glass',
    dimensions: '50 x 50 x 60 cm',
    material: 'Tempered Glass, Brass',
    room: 'living',
  },
  {
    id: '12',
    name: 'Metal Bar Stools',
    description: 'Set of 2 modern metal bar stools with comfortable seats.',
    price: 16999.99,
    image: 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg',
    category: 'metal',
    dimensions: '35 x 35 x 75 cm',
    material: 'Stainless Steel',
    room: 'dining',
  }
]; 