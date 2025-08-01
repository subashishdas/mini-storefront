import React from "react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

const ProductNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the product you're looking for. It may have
            been removed or the link might be incorrect.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/products">
            <Button size="lg" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>

          <Link href="/">
            <Button variant="outline" size="lg" className="w-full">
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductNotFound;
