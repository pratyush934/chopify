"use client"

import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const HeaderTwo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black w-full">
      <div className="bg-black shadow-sm overflow-hidden flex justify-between items-center">
        <div className="flex flex-wrap justify-between items-center px-4 py-3 w-full">
          {/* Mobile menu button */}
          <div className="md:hidden flex w-full justify-end">
            <Button 
              variant="ghost" 
              className="text-white p-2" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex flex-wrap md:flex-nowrap items-center justify-between gap-1 md:gap-2 max-w-7xl  scrollbar-hide">
            <Button
              variant="ghost"
              className="text-white text-lg font-medium rounded-md px-4 py-2 hover:underline"
            >
              <span>Home</span>
            </Button>
            <Button
              variant="ghost"
              className="text-white text-lg font-medium rounded-md px-4 py-2 hover:underline"
            >
              <span>Categories</span>
            </Button>
            <Button
              variant="ghost"
              className="text-white text-lg font-medium rounded-md px-4 py-2 hover:underline"
            >
              <span>Products</span>
            </Button>
            <Button
              variant="ghost"
              className="text-white text-lg font-medium rounded-md px-4 py-2 hover:underline"
            >
              <span>New Arrivals</span>
            </Button>
            <Button
              variant="ghost"
              className="text-white text-lg font-medium rounded-md px-4 py-2 hover:underline"
            >
              <span>Sales & Deals</span>
            </Button>
            <Button
              variant="ghost"
              className="text-white text-lg font-medium rounded-md px-4 py-2 hover:underline"
            >
              <span>Contact Us</span>
            </Button>
          </div>

          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className="md:hidden w-full flex flex-col items-start bg-black border-t border-gray-700 mt-2">
              <Button
                variant="ghost"
                className="text-white text-lg font-medium rounded-md px-4 py-2 hover:underline w-full text-left"
              >
                <span>Home</span>
              </Button>
              <Button
                variant="ghost"
                className="text-white text-lg font-medium rounded-md px-4 py-2 hover:underline w-full text-left"
              >
                <span>Categories</span>
              </Button>
              <Button
                variant="ghost"
                className="text-white text-lg font-medium rounded-md px-4 py-2 hover:underline w-full text-left"
              >
                <span>Products</span>
              </Button>
              <Button
                variant="ghost"
                className="text-white text-lg font-medium rounded-md px-4 py-2 hover:underline w-full text-left"
              >
                <span>New Arrivals</span>
              </Button>
              <Button
                variant="ghost"
                className="text-white text-lg font-medium rounded-md px-4 py-2 hover:underline w-full text-left"
              >
                <span>Sales & Deals</span>
              </Button>
              <Button
                variant="ghost"
                className="text-white text-lg font-medium rounded-md px-4 py-2 hover:underline w-full text-left"
              >
                <span>Contact Us</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
