"use client";

import React from "react";
import { notFound } from "next/navigation";
import Breadcrumb from "../../../components/ui/breadcrumb";
import ProductImageGallery from "../../../components/product/ProductImageGallery";
import ProductInfo from "../../../components/product/ProductInfo";
import { processedProducts as allProducts } from "../../../constants/contants";

const ProductDetailPage = ({ params }) => {
  const { id } = params;

  // Find product by ID (convert to number for comparison)
  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  // Ensure product has all required fields (safety check)
  const safeProduct = {
    ...product,
    images: product.images || [product.image],
    description:
      product.description ||
      `Discover the ${product.name} - a premium quality product that combines style and functionality.`,
    features: product.features || [
      "High Quality",
      "Comfortable",
      "Durable",
      "Stylish Design",
    ],
  };

  // Create breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    {
      label: safeProduct.category,
      href: `/products?category=${safeProduct.category
        .toLowerCase()
        .replace("'s", "s")}`,
    },
    { label: safeProduct.name, href: "#" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Main Product Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <ProductImageGallery
              images={safeProduct.images}
              productName={safeProduct.name}
            />
          </div>

          {/* Product Information */}
          <div className="lg:py-4">
            <ProductInfo product={safeProduct} />
          </div>
        </div>
      </div>

      {/* Related Products Section (Optional Enhancement) */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              You Might Also Like
            </h2>
            <p className="text-gray-600">
              Discover more products from the same category
            </p>
          </div>

          {/* Related products grid would go here */}
          <div className="text-center text-gray-500">
            <p>Related products coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
