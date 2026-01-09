import React from "react";
import { Home, Building2, Factory, Hotel, Layers, Palette } from "lucide-react";

type AboutSectionProps = {
  imageUrl?: string;
};

export default function AboutSection({
  imageUrl = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
}: AboutSectionProps) {
  return (
    <section className="w-full bg-gray-50 py-8 sm:py-12 md:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative order-2 lg:order-1 w-full hidden lg:block">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={imageUrl}
                alt="Hands holding a house model"
                className="w-full h-auto object-cover min-h-[480px] xl:min-h-[550px] 2xl:min-h-[600px]"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 order-1 lg:order-2 max-w-3xl lg:max-w-none mx-auto lg:mx-0">
            {/* Label */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-10 md:w-11 lg:w-12 h-1 bg-[#ff9900]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ff9900]">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold leading-tight -mt-2 sm:-mt-2">
              <span className="text-gray-900">Building Excellence </span>
              <span className="text-[#ff9900]">Since 1998</span>
            </h2>

            {/* Description */}
            <div className="border-l-4 border-gray-300 pl-4 sm:pl-5 md:pl-6">
              <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-base text-gray-600 leading-relaxed">
                Arbee Construction Company is a prominent construction firm with 8 years of experience in the building industry, serving clients across the region. Our dynamic team comprises young and talented minds, dedicated to delivering cutting-edge solutions with a focus on innovation and aesthetic designs. We take pride in transforming your dreams into architectural marvels that stand the test of time. Trust Arbee Construction for your construction needs, as we redefine excellence in the Field of building and design.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 pt-2 sm:pt-4">
              <div className="flex items-start gap-2 sm:gap-3 md:gap-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
                </div>
                <div className="flex items-center min-h-[40px] sm:min-h-[44px] md:min-h-[48px]">
                  <h3 className="text-sm sm:text-sm md:text-base lg:text-base font-semibold text-gray-900">Residential Building</h3>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 md:gap-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
                </div>
                <div className="flex items-center min-h-[40px] sm:min-h-[44px] md:min-h-[48px]">
                  <h3 className="text-sm sm:text-sm md:text-base lg:text-base font-semibold text-gray-900">Commercial Building</h3>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 md:gap-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Factory className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
                </div>
                <div className="flex items-center min-h-[40px] sm:min-h-[44px] md:min-h-[48px]">
                  <h3 className="text-sm sm:text-sm md:text-base lg:text-base font-semibold text-gray-900">Industrial Building</h3>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 md:gap-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Hotel className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
                </div>
                <div className="flex items-center min-h-[40px] sm:min-h-[44px] md:min-h-[48px]">
                  <h3 className="text-sm sm:text-sm md:text-base lg:text-base font-semibold text-gray-900">Hotel</h3>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 md:gap-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
                </div>
                <div className="flex items-center min-h-[40px] sm:min-h-[44px] md:min-h-[48px]">
                  <h3 className="text-sm sm:text-sm md:text-base lg:text-base font-semibold text-gray-900">Elevation</h3>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 md:gap-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
                </div>
                <div className="flex items-center min-h-[40px] sm:min-h-[44px] md:min-h-[48px]">
                  <h3 className="text-sm sm:text-sm md:text-base lg:text-base font-semibold text-gray-900">Interior Design</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
