"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, Filter } from "lucide-react";
import { Button } from "../ui/button";
import ProductCard from "../common/ProductCard";
import { sortOptions } from "../../constants/contants";
import { cn } from "@/lib/utils";

const ProductGrid = ({
  products,
  currentSort,
  onSortChange,
  onFilterToggle,
  isLoading = false,
  className,
  ...props
}) => {
  const [itemsToShow, setItemsToShow] = useState(12);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // Sort products based on current sort option
  const sortedProducts = useMemo(() => {
    if (!products) return [];

    const sorted = [...products];

    switch (currentSort) {
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "newest":
        return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  }, [products, currentSort]);

  const displayedProducts = sortedProducts.slice(0, itemsToShow);
  const hasMoreProducts = sortedProducts.length > itemsToShow;

  const handleSortChange = (sortValue) => {
    onSortChange(sortValue);
    setSortDropdownOpen(false);
  };

  const loadMore = () => {
    setItemsToShow((prev) => Math.min(prev + 12, sortedProducts.length));
  };

  const currentSortOption = sortOptions.find(
    (option) => option.value === currentSort
  );

  if (isLoading) {
    return (
      <div className={cn("", className)} {...props}>
        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={onFilterToggle}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <div className="text-sm text-gray-600">Loading products...</div>
          </div>
        </div>

        {/* Loading Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse"
            >
              <div className="aspect-square bg-gray-200" />
              <div className="p-4 space-y-3">
                <div className="h-3 bg-gray-200 rounded w-1/3" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
                <div className="h-4 bg-gray-200 rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("", className)} {...props}>
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={onFilterToggle}
            className="lg:hidden"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <div className="text-sm text-gray-600">
            Showing {displayedProducts.length} of {sortedProducts.length}{" "}
            products
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <Button
            variant="outline"
            onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
            className="min-w-[200px] justify-between"
          >
            <span>Sort by: {currentSortOption?.name || "Default"}</span>
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-200",
                sortDropdownOpen && "rotate-180"
              )}
            />
          </Button>

          {sortDropdownOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setSortDropdownOpen(false)}
              />

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSortChange(option.value)}
                    className={cn(
                      "w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg",
                      currentSort === option.value &&
                        "bg-blue-50 text-blue-700 font-medium"
                    )}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Products Grid */}
      {sortedProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Filter className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms to find what you're
              looking for.
            </p>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Reset Filters
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${(index % 12) * 50}ms`,
                  animationFillMode: "both",
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreProducts && (
            <div className="text-center mt-12">
              <Button size="lg" onClick={loadMore} className="min-w-[200px]">
                Load More Products
              </Button>
              <p className="text-sm text-gray-500 mt-2">
                {sortedProducts.length - itemsToShow} more products available
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
