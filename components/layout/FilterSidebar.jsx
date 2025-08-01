"use client";

import React, { useCallback } from "react";
import { Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import PriceRangeSlider from "../ui/price-range-slider";
import { productCategories } from "../../constants/contants";
import { cn } from "@/lib/utils";

const FilterSidebar = ({ filters, onFiltersChange, className, ...props }) => {
  const { category = "all", priceRange = [0, 300], searchQuery = "" } = filters;

  const handleCategoryChange = (categoryId) => {
    onFiltersChange({
      ...filters,
      category: categoryId,
    });
  };

  const handlePriceRangeChange = useCallback(
    (newRange) => {
      onFiltersChange({
        ...filters,
        priceRange: newRange,
      });
    },
    [filters, onFiltersChange]
  );

  const handleSearchChange = (e) => {
    onFiltersChange({
      ...filters,
      searchQuery: e.target.value,
    });
  };

  const clearSearch = () => {
    onFiltersChange({
      ...filters,
      searchQuery: "",
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      category: "all",
      priceRange: [0, 300],
      searchQuery: "",
    });
  };

  const hasActiveFilters =
    category !== "all" ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 300 ||
    searchQuery !== "";

  return (
    <div className={cn("bg-white", className)} {...props}>
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-blue-600 hover:text-blue-700"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Search Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 text-left rounded-lg transition-all duration-200",
                category === cat.id
                  ? "bg-blue-50 text-blue-700 font-medium border border-blue-200"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <span>{cat.name}</span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          Price Range
        </h3>
        <div className="px-2">
          <PriceRangeSlider
            min={0}
            max={300}
            defaultValue={priceRange}
            onValueChange={handlePriceRangeChange}
          />
        </div>
      </div>

      {/* Filter Summary */}
      {hasActiveFilters && (
        <div className="pt-6 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Active Filters
          </h4>
          <div className="space-y-2">
            {category !== "all" && (
              <div className="flex items-center justify-between bg-blue-50 px-3 py-2 rounded-lg">
                <span className="text-sm text-blue-700">
                  {productCategories.find((c) => c.id === category)?.name}
                </span>
                <button
                  onClick={() => handleCategoryChange("all")}
                  className="text-blue-600 hover:text-blue-800"
                  aria-label="Remove category filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            {(priceRange[0] !== 0 || priceRange[1] !== 300) && (
              <div className="flex items-center justify-between bg-blue-50 px-3 py-2 rounded-lg">
                <span className="text-sm text-blue-700">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
                <button
                  onClick={() => handlePriceRangeChange([0, 300])}
                  className="text-blue-600 hover:text-blue-800"
                  aria-label="Remove price filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            {searchQuery && (
              <div className="flex items-center justify-between bg-blue-50 px-3 py-2 rounded-lg">
                <span className="text-sm text-blue-700 truncate">
                  "{searchQuery}"
                </span>
                <button
                  onClick={clearSearch}
                  className="text-blue-600 hover:text-blue-800 ml-2 flex-shrink-0"
                  aria-label="Remove search filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSidebar;
