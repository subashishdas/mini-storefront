import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center">
            <Search className="w-16 h-16 text-gray-400" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="w-4 h-4 mr-2" />
              Go to Homepage
            </Button>
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Browse Products
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? Check our{" "}
            <Link href="/contact" className="text-blue-600 hover:text-blue-500">
              contact page
            </Link>{" "}
            or browse our{" "}
            <Link
              href="/products"
              className="text-blue-600 hover:text-blue-500"
            >
              product catalog
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
