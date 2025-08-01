# Mini Storefront

A modern, responsive e-commerce storefront built with **Next.js 15** and **React 19**. This mini storefront showcases a complete shopping experience with product browsing, filtering, detailed product views, and essential e-commerce pages.

## 🚀 Features

### 🏪 Core E-commerce Functionality

- **Product Catalog**: Browse through a comprehensive collection of products
- **Advanced Filtering**: Filter by category, price range, and search functionality
- **Product Details**: Individual product pages with detailed information and image galleries
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices

### 🎨 User Interface

- **Hero Banner**: Dynamic carousel showcasing featured products and promotions
- **Product Grid**: Clean, organized product display with hover effects
- **Mobile-First Design**: Optimized mobile experience with touch-friendly interactions
- **Modern UI Components**: Built with Radix UI primitives and custom styling

### 📱 Navigation & Layout

- **Responsive Navbar**: Desktop navigation with mobile hamburger menu
- **Breadcrumb Navigation**: Easy navigation tracking
- **Footer**: Comprehensive footer with links and information
- **Mobile Filter Sheet**: Slide-out filter panel for mobile devices

### 🔧 Technical Features

- **Next.js 15 App Router**: Latest Next.js features with app directory structure
- **React 19**: Cutting-edge React features and performance improvements
- **Tailwind CSS 4**: Modern utility-first CSS framework
- **TypeScript Support**: Type-safe development (JSX/JS files)
- **Component Architecture**: Modular, reusable component structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Development**: ESLint, PostCSS

## 📁 Project Structure

```
mini-storefront/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Product pages
│   │   ├── [id]/         # Dynamic product detail pages
│   │   └── page.jsx      # Product listing page
│   ├── layout.js         # Root layout
│   ├── page.js           # Homepage
│   └── not-found.jsx     # 404 page
├── components/            # Reusable components
│   ├── common/           # Shared components
│   ├── component/        # Feature components
│   ├── layout/           # Layout components
│   ├── product/          # Product-specific components
│   └── ui/               # UI primitives
├── constants/            # Application constants and data
├── lib/                  # Utility libraries
├── utils/                # Helper functions
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mini-storefront
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 📱 Pages & Features

### Homepage (`/`)

- Hero banner carousel with featured content
- New arrivals section
- Shop by category section
- Newsletter signup

### Products (`/products`)

- Complete product catalog
- Advanced filtering (category, price, search)
- Sorting options
- Responsive product grid
- Mobile filter sheet

### Product Details (`/products/[id]`)

- Detailed product information
- Image gallery
- Product specifications
- Related products

### About (`/about`)

- Company information and story
- Team details
- Mission and values

### Contact (`/contact`)

- Contact form
- Company contact information
- Location details

## 🎨 Design System

The application uses a consistent design system with:

- **Color Palette**: Modern, accessible color scheme
- **Typography**: Clean, readable font hierarchy
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components built with Radix UI
- **Responsive Breakpoints**: Mobile-first responsive design

## 🔧 Customization

### Adding New Products

Edit `constants/contants.js` to add or modify product data.

### Styling

The project uses Tailwind CSS for styling. Customize the design by:

- Modifying `app/globals.css` for global styles
- Updating component-specific styles in individual files
- Customizing the Tailwind configuration

### Components

All components are modular and can be easily customized or extended. Key component directories:

- `components/ui/` - Base UI components
- `components/layout/` - Layout-specific components
- `components/product/` - Product-related components

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Deployment Options

- **Netlify**: Static site deployment
- **AWS**: Using AWS Amplify or EC2
- **Docker**: Containerized deployment

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework
- [Radix UI](https://www.radix-ui.com) - Low-level UI primitives
- [Lucide React](https://lucide.dev) - Beautiful & consistent icon toolkit

---

Built with ❤️ using Next.js and React
