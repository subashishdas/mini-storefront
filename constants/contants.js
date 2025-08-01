export const menuItems = [
  { title: "Home", href: "/" },
  {
    title: "Products",
    href: "/products",
    items: [
      { title: "All Products", href: "/products" },
      { title: "Men's Collection", href: "/products?category=mens" },
      { title: "Women's Collection", href: "/products?category=womens" },
      { title: "Kids Collection", href: "/products?category=kids" },
      { title: "New Arrivals", href: "/products?sort=newest" },
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

// Extended product catalog for the products page
export const allProducts = [
  // Men's Products
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop",
    ],
    category: "Men's",
    isNew: true,
    rating: 4.5,
    reviews: 124,
    description:
      "Crafted from premium 100% organic cotton, this t-shirt offers unparalleled comfort and style. The soft, breathable fabric makes it perfect for everyday wear, while the classic fit ensures a timeless look that never goes out of style. Features reinforced seams for durability and a tagless design for maximum comfort.",
    features: [
      "100% Organic Cotton",
      "Tagless Design",
      "Reinforced Seams",
      "Machine Washable",
      "Classic Fit",
    ],
    slug: "premium-cotton-t-shirt",
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    price: 89.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
    ],
    category: "Men's",
    isNew: true,
    rating: 4.8,
    reviews: 89,
    description:
      "A timeless denim jacket crafted from premium heavyweight cotton denim. This versatile piece features classic styling with modern updates, including reinforced stitching and a comfortable relaxed fit. Perfect for layering or wearing on its own.",
    features: [
      "Premium Heavyweight Denim",
      "Classic Styling",
      "Reinforced Stitching",
      "Relaxed Fit",
      "Multiple Pockets",
    ],
    slug: "casual-denim-jacket",
  },
  {
    id: 3,
    name: "Classic Chino Pants",
    price: 59.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop",
    ],
    category: "Men's",
    isNew: true,
    rating: 4.3,
    reviews: 67,
    description:
      "Versatile chino pants that seamlessly blend comfort and style. Made from premium cotton twill with a modern slim fit that's perfect for both casual and business casual occasions. Features classic styling with contemporary details.",
    features: [
      "Premium Cotton Twill",
      "Slim Fit",
      "Classic Styling",
      "Versatile Design",
      "Easy Care",
    ],
    slug: "classic-chino-pants",
  },
  {
    id: 4,
    name: "Leather Sneakers",
    price: 129.99,
    originalPrice: 159.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=600&auto=format&fit=crop",
    ],
    category: "Men's",
    isNew: true,
    rating: 4.7,
    reviews: 203,
    description:
      "Premium leather sneakers that combine style and comfort. Crafted from genuine leather with a modern silhouette that works for both casual and smart-casual occasions. Features cushioned insole and durable rubber sole.",
    features: [
      "Genuine Leather Upper",
      "Cushioned Insole",
      "Durable Rubber Sole",
      "Modern Silhouette",
      "Versatile Styling",
    ],
    slug: "leather-sneakers",
  },
  {
    id: 13,
    name: "Oxford Dress Shirt",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=400&auto=format&fit=crop",
    category: "Men's",
    isNew: false,
    rating: 4.6,
    reviews: 142,
  },
  {
    id: 14,
    name: "Wool Blazer",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    category: "Men's",
    isNew: false,
    rating: 4.4,
    reviews: 78,
  },
  {
    id: 15,
    name: "Athletic Shorts",
    price: 34.99,
    originalPrice: 44.99,
    image:
      "https://images.unsplash.com/photo-1506629905958-b0b2a3d2d5c5?q=80&w=400&auto=format&fit=crop",
    category: "Men's",
    isNew: false,
    rating: 4.2,
    reviews: 156,
  },
  {
    id: 16,
    name: "Casual Polo Shirt",
    price: 49.99,
    originalPrice: 64.99,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop",
    category: "Men's",
    isNew: false,
    rating: 4.5,
    reviews: 93,
  },

  // Women's Products
  {
    id: 5,
    name: "Elegant Silk Blouse",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564257577385-8b19b07aab37?q=80&w=600&auto=format&fit=crop",
    ],
    category: "Women's",
    isNew: true,
    rating: 4.6,
    reviews: 156,
    description:
      "Luxurious silk blouse that embodies elegance and sophistication. Made from 100% pure mulberry silk with a lustrous finish that drapes beautifully. Features a classic button-front design with subtle feminine details.",
    features: [
      "100% Pure Mulberry Silk",
      "Classic Button-Front",
      "Elegant Drape",
      "Professional Styling",
      "Hand Wash Recommended",
    ],
    slug: "elegant-silk-blouse",
  },
  {
    id: 6,
    name: "High-Waist Jeans",
    price: 69.99,
    originalPrice: 89.99,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d14?q=80&w=600&auto=format&fit=crop",
    ],
    category: "Women's",
    isNew: true,
    rating: 4.4,
    reviews: 98,
    description:
      "Flattering high-waist jeans that enhance your silhouette. Made from premium stretch denim that moves with you while maintaining its shape. Perfect for creating effortless, stylish looks.",
    features: [
      "Premium Stretch Denim",
      "High-Waist Design",
      "Shape Retention",
      "Flattering Fit",
      "Versatile Styling",
    ],
    slug: "high-waist-jeans",
  },
  {
    id: 7,
    name: "Floral Summer Dress",
    price: 89.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d14?q=80&w=600&auto=format&fit=crop",
    ],
    category: "Women's",
    isNew: true,
    rating: 4.9,
    reviews: 234,
    description:
      "Beautiful floral summer dress perfect for warm weather occasions. Features a flattering A-line silhouette with delicate floral print. Made from lightweight, breathable fabric that flows beautifully.",
    features: [
      "Lightweight Fabric",
      "Floral Print",
      "A-line Silhouette",
      "Breathable Material",
      "Summer Perfect",
    ],
    slug: "floral-summer-dress",
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
  {
    id: 17,
    name: "Cashmere Sweater",
    price: 159.99,
    originalPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400&auto=format&fit=crop",
    category: "Women's",
    isNew: false,
    rating: 4.8,
    reviews: 167,
  },
  {
    id: 18,
    name: "Midi Skirt",
    price: 54.99,
    originalPrice: 69.99,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d14?q=80&w=400&auto=format&fit=crop",
    category: "Women's",
    isNew: false,
    rating: 4.3,
    reviews: 89,
  },
  {
    id: 19,
    name: "Designer Handbag",
    price: 189.99,
    originalPrice: 229.99,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop",
    category: "Women's",
    isNew: false,
    rating: 4.7,
    reviews: 145,
  },
  {
    id: 20,
    name: "Workout Leggings",
    price: 39.99,
    originalPrice: 49.99,
    image:
      "https://images.unsplash.com/photo-1506629905958-b0b2a3d2d5c5?q=80&w=400&auto=format&fit=crop",
    category: "Women's",
    isNew: false,
    rating: 4.4,
    reviews: 234,
  },

  // Kids Products
  {
    id: 9,
    name: "Colorful Hoodie",
    price: 34.99,
    originalPrice: 44.99,
    image:
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=600&auto=format&fit=crop",
    ],
    category: "Kids",
    isNew: true,
    rating: 4.7,
    reviews: 143,
    description:
      "Bright and cheerful hoodie that kids love to wear. Made from soft cotton blend fabric that's gentle on sensitive skin. Features vibrant colors and fun design elements that spark imagination and joy.",
    features: [
      "Soft Cotton Blend",
      "Vibrant Colors",
      "Comfortable Fit",
      "Kid-Friendly Design",
      "Easy Care",
    ],
    slug: "colorful-hoodie",
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
  {
    id: 21,
    name: "School Backpack",
    price: 29.99,
    originalPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop",
    category: "Kids",
    isNew: false,
    rating: 4.5,
    reviews: 112,
  },
  {
    id: 22,
    name: "Winter Jacket",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=400&auto=format&fit=crop",
    category: "Kids",
    isNew: false,
    rating: 4.6,
    reviews: 87,
  },
  {
    id: 23,
    name: "Summer Shorts",
    price: 24.99,
    originalPrice: 29.99,
    image:
      "https://images.unsplash.com/photo-1506629905958-b0b2a3d2d5c5?q=80&w=400&auto=format&fit=crop",
    category: "Kids",
    isNew: false,
    rating: 4.3,
    reviews: 65,
  },
  {
    id: 24,
    name: "Sports Shoes",
    price: 54.99,
    originalPrice: 69.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400&auto=format&fit=crop",
    category: "Kids",
    isNew: false,
    rating: 4.7,
    reviews: 134,
  },
];

// Categories for filtering
export const productCategories = [
  { id: "all", name: "All Products", count: 24 },
  { id: "mens", name: "Men's", count: 8 },
  { id: "womens", name: "Women's", count: 8 },
  { id: "kids", name: "Kids", count: 8 },
];

// Utility function to ensure all products have required fields
const ensureProductFields = (product) => {
  return {
    ...product,
    images: product.images || [product.image],
    description:
      product.description ||
      `Discover the ${product.name} - a premium quality product that combines style and functionality. Perfect for everyday use.`,
    features: product.features || [
      "High Quality",
      "Comfortable",
      "Durable",
      "Stylish Design",
    ],
    slug:
      product.slug ||
      product.name
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") ||
      `product-${product.id}`,
  };
};

// Process all products to ensure they have required fields
export const processedProducts = allProducts.map(ensureProductFields);

// Sort options
export const sortOptions = [
  { id: "default", name: "Default", value: "default" },
  { id: "price-low-high", name: "Price: Low to High", value: "price-asc" },
  { id: "price-high-low", name: "Price: High to Low", value: "price-desc" },
  { id: "newest", name: "Newest", value: "newest" },
  { id: "rating", name: "Highest Rated", value: "rating" },
];

export const faqData = [
  {
    id: 1,
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-5 business days. Express shipping is available for next-day delivery. We also offer free shipping on orders over $50!",
  },
  {
    id: 2,
    question: "What's your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in original packaging. Returns are free and easy - just contact our support team to get started.",
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer:
      "Yes! We ship to over 50 countries worldwide. Shipping costs vary by location, but we often have promotional free international shipping events.",
  },
  {
    id: 4,
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can also log into your account to view real-time tracking information.",
  },
];
