"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import { menuItems } from "@/constants/contants";
import { renderMenuItems, renderMobileMenuItem } from "@/utils/helper";
import { Accordion } from "../ui/accordion";

const Navbar = () => {
  return (
    <header className="py-3 shadow-md">
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="store-logo.svg" alt="logo" width={40} height={40} />
              <span className="text-2xl font-bold text-gray-900">
                <span className="text-[#1aa3b5]">Mini</span>
                Store
              </span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menuItems.map((item) => renderMenuItems(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/signup">SignUp</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden px-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex item-center gap-2">
              <Image src="store-logo.svg" alt="logo" width={40} height={40} />
              <span className="text-xl md:text-2xl font-bold text-gray-900">
                <span className="text-[#1aa3b5]">Mini</span>
                Store
              </span>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto" side="left">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex item-center gap-2">
                      <Image
                        src="store-logo.svg"
                        alt="logo"
                        width={40}
                        height={40}
                      />
                      <span className="text-xl md:text-2xl font-bold text-gray-900">
                        <span className="text-[#1aa3b5]">Mini</span>
                        Store
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full flex flex-col gap-4"
                  >
                    {menuItems.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/signup">SignUp</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
