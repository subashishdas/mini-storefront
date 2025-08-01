import React from "react";
import HeroBanner from "../components/component/HeroBanner";
import NewArrivals from "../components/component/NewArrivals";
import ShopByCategory from "../components/component/ShopByCategory";
import NewsletterSignup from "../components/component/NewsletterSignup";

function page() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <NewArrivals />
      <ShopByCategory />
      <NewsletterSignup />
    </main>
  );
}

export default page;
