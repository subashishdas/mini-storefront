"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, Heart, ShoppingCart, Check } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const ProductInfo = ({ product, className, ...props }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const {
    name = "Product Name",
    price = 0,
    originalPrice,
    category = "General",
    rating = 0,
    reviews = 0,
    description = "Product description coming soon...",
    features = [],
    isNew = false,
  } = product || {};

  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    // Reset after 2 seconds
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const getCategorySlug = (category) => {
    return category.toLowerCase().replace("'s", "s");
  };

  return (
    <div className={cn("space-y-6", className)} {...props}>
      {/* Category Tag */}
      <div className="flex items-center gap-2">
        <Link
          href={`/products?category=${getCategorySlug(category)}`}
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
        >
          {category}
        </Link>
        {isNew && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
            New
          </span>
        )}
      </div>

      {/* Product Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : i < rating
                    ? "text-yellow-400 fill-current opacity-50"
                    : "text-gray-300"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {rating} ({reviews} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold text-gray-900">${price}</span>
        {originalPrice && originalPrice > price && (
          <>
            <span className="text-xl text-gray-500 line-through">
              ${originalPrice}
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
              -{discountPercentage}% OFF
            </span>
          </>
        )}
      </div>

      {/* Description */}
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Features */}
      {features.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Key Features
          </h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-4 pt-6 border-t border-gray-200">
        {/* Add to Cart */}
        <Button
          size="lg"
          onClick={handleAddToCart}
          disabled={addedToCart}
          className={cn(
            "w-full transition-all duration-200",
            addedToCart && "bg-green-600 hover:bg-green-600"
          )}
        >
          {addedToCart ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Added to Cart!
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </>
          )}
        </Button>

        {/* Add to Wishlist */}
        <Button
          variant="outline"
          size="lg"
          onClick={handleWishlistToggle}
          className={cn(
            "w-full transition-all duration-200",
            isWishlisted &&
              "border-red-200 bg-red-50 text-red-700 hover:bg-red-100"
          )}
        >
          <Heart
            className={cn(
              "w-5 h-5 mr-2 transition-all duration-200",
              isWishlisted ? "fill-current text-red-600" : "text-gray-600"
            )}
          />
          {isWishlisted ? "Added to Wishlist" : "Add to Wishlist"}
        </Button>
      </div>

      {/* Additional Info */}
      <div className="pt-6 border-t border-gray-200 space-y-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="font-medium">Free shipping</span>
          <span>on orders over $75</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Easy returns</span>
          <span>within 30 days</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Secure checkout</span>
          <span>SSL encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
