"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import FilterSidebar from "./FilterSidebar";

const MobileFilterSheet = ({
  isOpen,
  onOpenChange,
  filters,
  onFiltersChange,
  children,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
        <SheetHeader className="p-6 pb-0">
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="px-6 pb-6 overflow-y-auto h-[calc(100vh-80px)]">
          <FilterSidebar
            filters={filters}
            onFiltersChange={onFiltersChange}
            className="border-0 shadow-none bg-transparent"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilterSheet;
