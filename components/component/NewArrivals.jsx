"use client";

import React, { useState } from "react";
import Link from "next/link";
import { newArrivalsProducts } from "../../constants/contants";
import ProductCard from "../common/ProductCard";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("Men's");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const tabs = ["Men's", "Women's", "Kids"];

  const handleTabChange = (tab) => {
    if (tab === activeTab || isTransitioning) return;

    setIsTransitioning(true);

    // Smooth transition delay
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

  const currentProducts = newArrivalsProducts[activeTab] || [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            New Arrivals
          </h2>
          <h3 className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the latest additions to our collection
          </h3>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="flex space-x-4 relative">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`relative px-4 py-2 text-base md:text-lg font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "text-blue-600 font-bold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}

                  {/* Active Tab Underline */}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transform origin-left animate-in slide-in-from-left-full duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="relative">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300 ${
              isTransitioning
                ? "opacity-0 transform translate-y-4"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            {currentProducts.map((product, index) => (
              <div
                key={`${activeTab}-${product.id}`}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Loading State */}
          {isTransitioning && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg">
              View All
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
