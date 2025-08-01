"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import FilterSidebar from "../../components/layout/FilterSidebar";
import ProductGrid from "../../components/layout/ProductGrid";
import MobileFilterSheet from "../../components/layout/MobileFilterSheet";
import { processedProducts as allProducts } from "../../constants/contants";

const ProductPage = () => {
  const searchParams = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize filters from URL params
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "all",
    priceRange: [0, 300],
    searchQuery: searchParams.get("search") || "",
  });

  const [currentSort, setCurrentSort] = useState("default");

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Category filter
    if (filters.category !== "all") {
      const categoryMap = {
        mens: "Men's",
        womens: "Women's",
        kids: "Kids",
      };
      const categoryName = categoryMap[filters.category] || filters.category;
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === categoryName.toLowerCase()
      );
    }

    // Price range filter
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // Search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [filters]);

  const handleFiltersChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  const handleSortChange = (sortValue) => {
    setCurrentSort(sortValue);
  };

  const handleMobileFilterToggle = () => {
    setMobileFilterOpen(!mobileFilterOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of premium products
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <FilterSidebar
                filters={filters}
                onFiltersChange={handleFiltersChange}
                className="border border-gray-200 rounded-lg p-6 shadow-sm"
              />
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1 min-w-0">
            <ProductGrid
              products={filteredProducts}
              currentSort={currentSort}
              onSortChange={handleSortChange}
              onFilterToggle={handleMobileFilterToggle}
              isLoading={isLoading}
            />
          </main>
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      <MobileFilterSheet
        isOpen={mobileFilterOpen}
        onOpenChange={setMobileFilterOpen}
        filters={filters}
        onFiltersChange={handleFiltersChange}
      />
    </div>
  );
};

export default ProductPage;
