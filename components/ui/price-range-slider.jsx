"use client";

import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

const PriceRangeSlider = ({
  min = 0,
  max = 300,
  defaultValue = [0, 300],
  onValueChange,
  className,
  ...props
}) => {
  const [values, setValues] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(null);

  // Calculate percentage for positioning
  const getPercentage = (value) => ((value - min) / (max - min)) * 100;

  // Calculate value from percentage
  const getValue = (percentage) => min + (percentage / 100) * (max - min);

  // Handle drag operations
  const handleMouseDown = (index) => (e) => {
    e.preventDefault();
    setIsDragging(index);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging === null) return;

      const slider =
        e.currentTarget?.closest("[data-slider]") ||
        document.querySelector("[data-slider]");
      if (!slider) return;

      const rect = slider.getBoundingClientRect();
      const percentage = Math.max(
        0,
        Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)
      );
      const newValue = Math.round(getValue(percentage));

      setValues((prev) => {
        const newValues = [...prev];
        newValues[isDragging] = newValue;

        // Ensure min doesn't exceed max and vice versa
        if (isDragging === 0 && newValue > prev[1]) {
          newValues[1] = newValue;
        } else if (isDragging === 1 && newValue < prev[0]) {
          newValues[0] = newValue;
        }

        return newValues;
      });
    },
    [isDragging, min, max]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  // Touch events for mobile
  const handleTouchStart = (index) => (e) => {
    setIsDragging(index);
  };

  const handleTouchMove = (e) => {
    if (isDragging === null) return;

    const touch = e.touches[0];
    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const percentage = Math.max(
      0,
      Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100)
    );
    const newValue = Math.round(getValue(percentage));

    setValues((prev) => {
      const newValues = [...prev];
      newValues[isDragging] = newValue;

      // Ensure min doesn't exceed max and vice versa
      if (isDragging === 0 && newValue > prev[1]) {
        newValues[1] = newValue;
      } else if (isDragging === 1 && newValue < prev[0]) {
        newValues[0] = newValue;
      }

      return newValues;
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(null);
  };

  // Track if this is the initial render to avoid calling onValueChange on mount
  const isInitialRender = React.useRef(true);

  // Notify parent of value changes (skip initial render)
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    onValueChange?.(values);
  }, [values]);

  return (
    <div className={cn("relative w-full", className)} {...props}>
      {/* Value display */}
      <div className="flex justify-between items-center mb-4 text-sm font-medium text-gray-700">
        <span>${values[0]}</span>
        <span>${values[1]}</span>
      </div>

      {/* Slider container */}
      <div
        data-slider
        className="relative h-2 bg-gray-200 rounded-full cursor-pointer"
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Active range */}
        <div
          className="absolute h-full bg-blue-600 rounded-full"
          style={{
            left: `${getPercentage(values[0])}%`,
            width: `${getPercentage(values[1]) - getPercentage(values[0])}%`,
          }}
        />

        {/* Min handle */}
        <div
          className={cn(
            "absolute w-5 h-5 bg-white border-2 border-blue-600 rounded-full cursor-grab transform -translate-y-1/2 top-1/2 transition-all duration-150",
            isDragging === 0 && "scale-110 cursor-grabbing shadow-lg"
          )}
          style={{ left: `${getPercentage(values[0])}%`, marginLeft: "-10px" }}
          onMouseDown={handleMouseDown(0)}
          onTouchStart={handleTouchStart(0)}
          role="slider"
          aria-label="Minimum price"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={values[0]}
          tabIndex={0}
        />

        {/* Max handle */}
        <div
          className={cn(
            "absolute w-5 h-5 bg-white border-2 border-blue-600 rounded-full cursor-grab transform -translate-y-1/2 top-1/2 transition-all duration-150",
            isDragging === 1 && "scale-110 cursor-grabbing shadow-lg"
          )}
          style={{ left: `${getPercentage(values[1])}%`, marginLeft: "-10px" }}
          onMouseDown={handleMouseDown(1)}
          onTouchStart={handleTouchStart(1)}
          role="slider"
          aria-label="Maximum price"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={values[1]}
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
