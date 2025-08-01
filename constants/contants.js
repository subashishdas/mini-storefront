export const menuItems = [
  { title: "Home", href: "/" },
  {
    title: "Products",
    href: "/products",
    items: [
      { title: "All Products", href: "/products" },
      { title: "Electronics", href: "/products/electronics" },
      { title: "Clothing", href: "/products/clothing" },
      { title: "Books", href: "/products/books" },
    ],
  },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const heroSlides = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1723650938417-86045118c5ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "New Arrivals",
    description: "Discover the latest trends in our curated collection",
    bgColor: "from-black/40 via-black/20 to-transparent",
    cta: {
      text: "Shop Now",
      href: "/products",
    },
  },
  {
    id: 2,
    image: "/api/placeholder/1920/800",
    title: "Seasonal Collection",
    description: "Embrace the season with our exclusive premium selection",
    bgColor: "from-blue-900/40 via-blue-800/20 to-transparent",
    cta: {
      text: "Explore",
      href: "/products/seasonal",
    },
  },
  {
    id: 3,
    image: "/api/placeholder/1920/800",
    title: "Premium Quality",
    description: "Experience luxury with our handpicked premium products",
    bgColor: "from-purple-900/40 via-purple-800/20 to-transparent",
    cta: {
      text: "View Premium",
      href: "/products/premium",
    },
  },
  {
    id: 4,
    image: "/api/placeholder/1920/800",
    title: "Limited Edition",
    description: "Exclusive pieces available for a limited time only",
    bgColor: "from-emerald-900/40 via-emerald-800/20 to-transparent",
    cta: {
      text: "Get Exclusive",
      href: "/products/limited",
    },
  },
];

export const newArrivalsProducts = {
  "Men's": [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop",
      category: "Men's",
      isNew: true,
      rating: 4.5,
      reviews: 124,
    },
    {
      id: 2,
      name: "Casual Denim Jacket",
      price: 89.99,
      originalPrice: 119.99,
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=400&auto=format&fit=crop",
      category: "Men's",
      isNew: true,
      rating: 4.8,
      reviews: 89,
    },
    {
      id: 3,
      name: "Classic Chino Pants",
      price: 59.99,
      originalPrice: 79.99,
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=400&auto=format&fit=crop",
      category: "Men's",
      isNew: true,
      rating: 4.3,
      reviews: 67,
    },
    {
      id: 4,
      name: "Leather Sneakers",
      price: 129.99,
      originalPrice: 159.99,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400&auto=format&fit=crop",
      category: "Men's",
      isNew: true,
      rating: 4.7,
      reviews: 203,
    },
  ],
  "Women's": [
    {
      id: 5,
      name: "Elegant Silk Blouse",
      price: 79.99,
      originalPrice: 99.99,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400&auto=format&fit=crop",
      category: "Women's",
      isNew: true,
      rating: 4.6,
      reviews: 156,
    },
    {
      id: 6,
      name: "High-Waist Jeans",
      price: 69.99,
      originalPrice: 89.99,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400&auto=format&fit=crop",
      category: "Women's",
      isNew: true,
      rating: 4.4,
      reviews: 98,
    },
    {
      id: 7,
      name: "Floral Summer Dress",
      price: 89.99,
      originalPrice: 119.99,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&auto=format&fit=crop",
      category: "Women's",
      isNew: true,
      rating: 4.9,
      reviews: 234,
    },
    {
      id: 8,
      name: "Ankle Boots",
      price: 119.99,
      originalPrice: 149.99,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop",
      category: "Women's",
      isNew: true,
      rating: 4.5,
      reviews: 187,
    },
  ],
  Kids: [
    {
      id: 9,
      name: "Colorful Hoodie",
      price: 34.99,
      originalPrice: 44.99,
      image:
        "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=400&auto=format&fit=crop",
      category: "Kids",
      isNew: true,
      rating: 4.7,
      reviews: 143,
    },
    {
      id: 10,
      name: "Denim Overalls",
      price: 49.99,
      originalPrice: 64.99,
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=400&auto=format&fit=crop",
      category: "Kids",
      isNew: true,
      rating: 4.6,
      reviews: 76,
    },
    {
      id: 11,
      name: "Rainbow Sneakers",
      price: 39.99,
      originalPrice: 49.99,
      image:
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=400&auto=format&fit=crop",
      category: "Kids",
      isNew: true,
      rating: 4.8,
      reviews: 165,
    },
    {
      id: 12,
      name: "Cartoon T-Shirt",
      price: 19.99,
      originalPrice: 24.99,
      image:
        "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=400&auto=format&fit=crop",
      category: "Kids",
      isNew: true,
      rating: 4.4,
      reviews: 92,
    },
  ],
};

export const shopByCategories = [
  {
    id: 1,
    name: "Men's",
    title: "Men's Collection",
    description: "Discover sophisticated styles for the modern man",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    href: "/products?category=mens",
    featured: true,
  },
  {
    id: 2,
    name: "Women's",
    title: "Women's Collection",
    description: "Elegant and contemporary fashion for every occasion",
    image:
      "https://images.unsplash.com/photo-1572089445665-9fa09d24f2d6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/products?category=womens",
    featured: true,
  },
  {
    id: 3,
    name: "Kids",
    title: "Kids Collection",
    description: "Playful and comfortable styles for little ones",
    image:
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=800&auto=format&fit=crop",
    href: "/products?category=kids",
    featured: true,
  },
];
