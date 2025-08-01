"use client";

import React from "react";
import { shopByCategories } from "../../constants/contants";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const ShopByCategory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <h3 className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your perfect style
          </h3>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {shopByCategories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-[4/5] block transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-8">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  {/* Category Name */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:scale-105">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 text-sm lg:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {category.description}
                  </p>

                  {/* Call to Action */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <span className="inline-flex items-center text-white font-medium text-sm">
                      Shop Now
                      <svg
                        className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 delay-200">
                <div className="absolute inset-2 bg-white/20 rounded-full animate-pulse" />
              </div>
            </Link>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h4>
            <p className="text-gray-600 mb-6">
              Browse our complete collection with advanced filtering options
            </p>
            <Button className="py-3 px-8">
              View All Products
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
