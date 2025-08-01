"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Check, Loader2 } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section
      className="relative w-full overflow-hidden py-16 lg:py-20 "
      style={{
        backgroundImage: "linear-gradient(to bottom right, #F9FAFB, #D1D5DB)",
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading and Sub-heading */}
        <div className="mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 tracking-tight">
            Stay in the Loop
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sign up for our newsletter to get exclusive deals and the latest
            product updates.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="max-w-md mx-auto">
          {isSubscribed ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-1">
                Welcome to our community!
              </h3>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Thank you for subscribing. You'll receive our latest updates
                soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="w-full h-12 text-base transition-all duration-200 focus:ring-2 focus:ring-offset-2"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="h-12 px-8 focus:ring-2  focus:ring-offset-2 text-white font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:transform-none cursor-pointer"
                  size="lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Joining...
                    </div>
                  ) : (
                    "Join"
                  )}
                </Button>
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-muted-foreground mt-3">
                By subscribing, you agree to our privacy policy. Unsubscribe at
                any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
