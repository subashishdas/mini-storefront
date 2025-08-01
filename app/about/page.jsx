"use client";

import React from "react";
import { Users, Target, Heart, Award, Star, CheckCircle } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { label: "Happy Customers", value: "50,000+", icon: Users },
    { label: "Products Sold", value: "200,000+", icon: Award },
    { label: "Years of Experience", value: "10+", icon: Star },
    { label: "Team Members", value: "25+", icon: Heart },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We never compromise on quality. Every product is carefully selected and tested to meet our high standards.",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description:
        "Our customers are at the heart of everything we do. We're here to help you find exactly what you need.",
    },
    {
      icon: CheckCircle,
      title: "Sustainability",
      description:
        "We're committed to sustainable practices and partnering with brands that share our environmental values.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1e4?q=80&w=400&auto=format&fit=crop",
      description:
        "With over 15 years in retail, Sarah founded our company with a vision to make quality products accessible to everyone.",
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      description:
        "Michael leads our product curation team, ensuring every item meets our strict quality and style standards.",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      description:
        "Emily oversees our customer service team and works to make every shopping experience exceptional.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Our Story
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're passionate about bringing you the finest products that
              combine style, quality, and value. Our journey began with a simple
              mission: to make premium products accessible to everyone.
            </p>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop"
                alt="Our team"
                className="rounded-lg shadow-2xl max-w-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2014, we started as a small team with big dreams.
                  Our founder, Sarah Johnson, noticed a gap in the market for
                  high-quality, affordable products that didn't compromise on
                  style or sustainability.
                </p>
                <p>
                  What began as a small online store has grown into a trusted
                  brand serving customers worldwide. We've carefully curated our
                  product selection to include only items that meet our strict
                  standards for quality, design, and ethical manufacturing.
                </p>
                <p>
                  Today, we're proud to work with a network of trusted suppliers
                  and artisans who share our commitment to excellence and
                  sustainability. Every product tells a story, and we're honored
                  to be part of yours.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                alt="Our workspace"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and help us deliver
              exceptional experiences to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind our mission to bring you the best
              products and shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium products,
            selected with you in mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Browse Products
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
