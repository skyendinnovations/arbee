import React from "react";

type HeroProps = {
  imageUrl?: string;
};

export default function Hero({
  imageUrl = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80",
}: HeroProps) {
  return (
    <header className="relative w-full min-h-screen flex-1 items-center overflow-hidden bg-black" role="banner">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            filter: "grayscale(100%) brightness(0.4)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-7 space-y-6 sm:space-y-8">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] text-white tracking-tight">
              We Don't Build Structures.
              <span className="block mt-2 text-gray-300">
                We Build Legacies.
              </span>
            </h1>

            <div className="border-l-4 border-white pl-4 sm:pl-6 py-2">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                Every foundation we lay, every beam we raise, every project we deliver —
                built with precision, integrity, and a commitment to excellence that spans generations.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-white/20">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">500+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mt-1">Projects Delivered</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">38+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mt-1">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">100%</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mt-1">Client Trust</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-stretch">
              <a
                href="/projects"
                className="group relative w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-center uppercase tracking-wide transition-all duration-300 hover:bg-black hover:text-white border-2 border-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0" aria-hidden="true"></div>
                <span className="relative z-10">Explore Our Work</span>
              </a>

              <a
                href="/contact"
                className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold text-center uppercase tracking-wide border-2 border-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative p-8 lg:p-10 border-2 border-white/30 backdrop-blur-sm bg-white/5">
              <div className="absolute -top-4 -left-4 text-8xl font-serif text-white/20" aria-hidden="true">"</div>

              <blockquote className="relative z-10 space-y-4">
                <p className="text-xl lg:text-2xl font-light text-white leading-relaxed italic">
                  Excellence is not a destination. It's the standard we build into every square foot.
                </p>
                <footer className="pt-4 border-t border-white/20">
                  <cite className="text-sm text-gray-400 not-italic uppercase tracking-wider">
                    Our Commitment to Quality
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
