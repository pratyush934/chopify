import Image from "next/image";
import HeaderTwo from "./HeaderTwo";
import { Button } from "./ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full bg-gradient-to-r  pt-20 min-h-[750px]">
      <div className="container mx-auto px-6">
        <HeaderTwo />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-14">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-1 bg-black/10 rounded-full text-sm font-medium">
              🎉 Summer Collection 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 leading-tight">
              Discover Your <span className="text-white drop-shadow-sm">Perfect Style</span> Today
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-md">
              Explore our curated collection of premium products at unbeatable prices. Quality meets affordability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg rounded-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
              <Button variant="outline" className="bg-white/70 hover:bg-white/90 px-8 py-6 text-lg rounded-full">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="pt-4 flex justify-center md:justify-start gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">250+</div>
                <div className="text-sm text-gray-700">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-sm text-gray-700">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-gray-700">Happy Customers</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative">
              <Image 
                src={"/herosection2.png"} 
                alt="Fashion collection showcase" 
                width={700} 
                height={700}
                className="relative z-10 drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
