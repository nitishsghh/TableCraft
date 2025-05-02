# TableCraft - Modern Furniture E-commerce

A modern e-commerce website built with Next.js 15, TypeScript, and Tailwind CSS, featuring a collection of premium tables and furniture.

---

## Screenshots

![Home Page](https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg)
![Product Example](https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg)

> _You can replace these with your own screenshots from the deployed site for a more accurate preview._

---

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Product catalog with detailed information
- Shopping cart functionality
- Order history and cancel order feature
- Dynamic color theming
- Clean and intuitive navigation

---

## Project Structure

```
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   ├── window.svg
│   ├── vercel.svg
│   ├── next.svg
│   ├── globe.svg
│   ├── file.svg
│   └── images/
│       └── placeholder.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── page.tsx
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── orders/
│   │   └── products/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── ThemeSwitcher.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ErrorBoundary.tsx
│   ├── context/
│   │   ├── ThemeContext.tsx
│   │   └── CartContext.tsx
│   └── data/
│       └── products.ts
├── package.json
├── tsconfig.json
├── next.config.js / next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

- `public/` - Static assets like images and favicon
- `src/app/` - Next.js app directory containing pages and layouts
- `src/components/` - Reusable React components
- `src/context/` - React context providers for theme and cart
- `src/data/` - Static data and types

---

## Technologies & Modules Used

- **Next.js 15** (App Router, SSR/SSG, Routing)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **ESLint 9**
- **@types/react, @types/node**
- **next/font/google** (for Inter font)
- **LocalStorage** (for cart and order persistence)
- **Pexels** (for product images)

---

## Code Overview

### Frontend Architecture
- **App Router**: Utilizes Next.js 15's App Router for efficient routing and page transitions
- **Component Structure**: Modular components with clear separation of concerns
- **State Management**: React Context API for global state (theme, cart)
- **Styling**: Tailwind CSS for responsive and maintainable styles
- **Type Safety**: TypeScript for enhanced development experience and type checking

### Key Features Implementation
- **Product Catalog**: Dynamic rendering with server-side data fetching
- **Shopping Cart**: Persistent cart state using LocalStorage
- **Theme System**: Dark/Light mode with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Error Handling**: Custom ErrorBoundary component for graceful error management

### Performance Optimizations
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Server-side rendering for improved SEO
- Static site generation where applicable
- Efficient state updates and re-renders

---

## License and Copyright

Copyright © 2024-2025 TableCraft. All rights reserved.

### License Terms
This project is licensed under the MIT License. The MIT License is a permissive license that is short and to the point. It lets people do anything they want with your code as long as they provide attribution back to you and don't hold you liable.

### Usage Rights
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

### Limitations
- ❌ Liability
- ❌ Warranty

### Attribution Requirements
When using this code, you must:
1. Include the original copyright notice
2. Include the MIT License text
3. State significant changes made to the software

For the full license text, see the [LICENSE](LICENSE) file in the root directory.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
