
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.jpg";
import img16 from "../assets/images/img16.jpg";


const completedProjects = [
  {
    id: 1,
    name: "Sunrise Mall",
    images: [img1, img2, img3, img4],
    description: "A modern shopping mall completed in 2024 with sustainable design.",
    completion: "Completed Jan 2024",
    category: "Commercial",
  },
  {
    id: 2,
    name: "Greenview Apartments",
    images: [img5, img6, img7, img8],
    description: "Luxury residential apartments delivered with green spaces and smart features.",
    completion: "Completed Sep 2025",
    category: "Residential",
  },
  {
    id: 3,
    name: "Central Business Tower",
    images: [img9, img10, img11, img12],
    description: "High-rise office tower in the heart of the business district.",
    completion: "Completed May 2023",
    category: "Commercial",
  },
  {
    id: 4,
    name: "EcoTech Campus",
    images: [img13, img14, img15, img16],
    description: "Technology campus with green buildings and smart infrastructure.",
    completion: "Completed Dec 2025",
    category: "Industrial",
  },
  {
    id: 5,
    name: "Harbor View Hotel",
    images: [img1, img5, img9, img13],
    description: "A luxury hotel with waterfront views and modern amenities.",
    completion: "Completed Jul 2022",
    category: "Hotel",
  },
  {
    id: 6,
    name: "City Heights Residences",
    images: [img2, img6, img10, img14],
    description: "Premium residential towers with cityscape views.",
    completion: "Completed Nov 2021",
    category: "Residential",
  },
  {
    id: 7,
    name: "Innovation Hub",
    images: [img3, img7, img11, img15],
    description: "A business innovation center for startups and tech companies.",
    completion: "Completed Mar 2023",
    category: "Industrial",
  },
  {
    id: 8,
    name: "Lakeside Villas",
    images: [img4, img8, img12, img16],
    description: "Exclusive lakeside villas with private docks.",
    completion: "Completed Aug 2024",
    category: "Elevations",
  },
  {
    id: 9,
    name: "Metro Plaza",
    images: [img1, img3, img5, img7, img9],
    description: "A mixed-use commercial plaza in the city center.",
    completion: "Completed Feb 2022",
    category: "Interior Designs",
  },
  {
    id: 10,
    name: "Artisan Lofts",
    images: [img2, img4, img6, img8, img10],
    description: "Modern loft apartments for urban living.",
    completion: "Completed Oct 2023",
    category: "Hotel",
  },
];



export default function CompletedProjects() {
  // Responsive initial count based on screen size
  const getInitialCount = () => {
    if (typeof window === 'undefined') return 8;
    const width = window.innerWidth;
    if (width < 640) return 4;        // Mobile: 4 items (1 column)
    if (width < 768) return 6;        // Small tablet: 6 items (2 columns)
    if (width < 1024) return 9;       // Tablet: 9 items (3 columns) 
    if (width < 1280) return 12;      // Desktop: 12 items (4 columns)
    return 15;                        // Large desktop: 15 items (5 columns)
  };

  const getLoadIncrement = () => {
    if (typeof window === 'undefined') return 4;
    const width = window.innerWidth;
    if (width < 640) return 4;        // Mobile: load 4 more
    if (width < 768) return 6;        // Small tablet: load 6 more
    if (width < 1024) return 9;       // Tablet: load 9 more
    if (width < 1280) return 8;       // Desktop: load 8 more
    return 10;                        // Large desktop: load 10 more
  };

  const [modal, setModal] = useState<{
    projectIdx: number;
    imageIdx: number;
  } | null>(null);
  const [visibleCount, setVisibleCount] = useState(getInitialCount());
  const [lastAnimated, setLastAnimated] = useState(getInitialCount() - 1);

  const categories = [
    "All Projects",
    "Residential",
    "Commercial",
    "Industrial",
    "Hotel",
    "Elevations",
    "Interior Designs",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    
    // Handle window resize for responsive load more
    const handleResize = () => {
      const initialCount = getInitialCount();
      if (visibleCount <= initialCount) {
        setVisibleCount(initialCount);
        setLastAnimated(initialCount - 1);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset visible count when category changes
  useEffect(() => {
    const initialCount = getInitialCount();
    setVisibleCount(initialCount);
    setLastAnimated(initialCount - 1);
  }, [selectedCategory]);

  // Get filtered projects
  const filteredProjects = completedProjects.filter(
    (proj) => selectedCategory === "All Projects" || proj.category === selectedCategory
  );

  const openModal = (projectIdx: number, imageIdx: number) =>
    setModal({ projectIdx, imageIdx });

  const closeModal = () => {
    setModal(null);
  };

  const nextImage = () => {
    if (!modal) return;
    const images = completedProjects[modal.projectIdx]?.images || [];
    setModal({
      projectIdx: modal.projectIdx,
      imageIdx: (modal.imageIdx + 1) % images.length,
    });
  };

  const prevImage = () => {
    if (!modal) return;
    const images = completedProjects[modal.projectIdx]?.images || [];
    setModal({
      projectIdx: modal.projectIdx,
      imageIdx: (modal.imageIdx - 1 + images.length) % images.length,
    });
  };

  return (
    <section className="bg-[#f7f7f5] py-6 md:py-10 lg:py-16 px-2 md:px-8 lg:px-12 min-h-screen">
      <div className="max-w-5xl md:max-w-6xl lg:max-w-7xl xl:max-w-8xl mx-auto mt-16 md:mt-20 lg:mt-24">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#232323] mb-2 text-center">
          Completed Projects
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-500 text-center mb-6 md:mb-8 lg:mb-10 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
          Explore our portfolio of successfully delivered projects across various sectors.
        </p>
        {/* Project Categories Nav */}
        <nav className="mb-6 md:mb-8 lg:mb-10 flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-3 py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-full font-medium text-xs md:text-sm lg:text-base transition ${selectedCategory === cat ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'}`}
              type="button"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="text-base md:text-lg lg:text-xl">No projects found in this category.</p>
            <button
              type="button"
              className="mt-4 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-md bg-amber-600 text-white font-medium text-sm md:text-base lg:text-lg hover:bg-amber-700 transition"
              onClick={() => setSelectedCategory("All Projects")}
            >
              View All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {filteredProjects
            .slice(0, visibleCount)
            .map((proj, pIdx) => {
              const globalIdx = pIdx;
              const originalIdx = completedProjects.findIndex(p => p.id === proj.id);
              return (
                <div
                  key={proj.id}
                  className={`flex flex-col items-center transition-opacity duration-700 ${globalIdx > lastAnimated ? 'opacity-0 animate-fadeInUp' : 'opacity-100'}`}
                  style={{ animationDelay: globalIdx > lastAnimated ? `${(globalIdx - lastAnimated) * 0.08}s` : undefined }}
                >
                  <button
                    type="button"
                    className="w-full h-36 md:h-48 lg:h-56 xl:h-64 object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
                    onClick={() => openModal(originalIdx, 0)}
                    aria-label={`Open gallery for ${proj.name}`}
                  >
                    <img
                      src={proj.images[0]}
                      alt={proj.name}
                      className="w-full h-36 md:h-48 lg:h-56 xl:h-64 object-cover rounded-lg"
                      draggable={false}
                    />
                  </button>
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mt-4 text-center">
                    {proj.name}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-gray-600 text-center">
                    {proj.description}
                  </p>
                  <span className="text-xs md:text-sm text-gray-500">
                    {proj.completion}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* MODAL */}
        {modal && completedProjects[modal.projectIdx] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            role="dialog"
            tabIndex={0}
            aria-modal="true"
            onClick={e => {
              if (e.target === e.currentTarget) closeModal();
            }}
            onKeyDown={e => {
              if (e.key === "Escape") closeModal();
            }}
          >
            <div
              className="relative bg-white rounded-lg p-3 md:p-4 lg:p-6 max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl w-full outline-none"
              role="document"
              tabIndex={0}
              onClick={e => e.stopPropagation()}
              onKeyDown={e => {
                if (e.key === "Escape") closeModal();
              }}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={closeModal}
                className="absolute top-2 right-2 md:top-3 md:right-3 z-50 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center cursor-pointer bg-transparent hover:bg-gray-200 transition-colors duration-200 focus:outline-none"
              >
                <span className="text-xl md:text-2xl lg:text-3xl leading-none">×</span>
              </button>

              <div className="relative flex items-center justify-center min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh] mb-3 md:mb-4 lg:mb-6">
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-1 md:p-2 lg:p-3 bg-white/80 rounded-full shadow hover:bg-gray-100 focus:outline-none z-20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                </button>

                <div className="relative">
                  {/* Project Name Overlay */}
                  <div className="absolute top-0 left-0 w-full bg-black/60 text-white text-lg font-semibold py-2 px-4 rounded-t shadow text-center z-10">
                    {completedProjects[modal.projectIdx]?.name}
                  </div>
                  <img
                    src={completedProjects[modal.projectIdx]?.images[modal.imageIdx]}
                    alt={completedProjects[modal.projectIdx]?.name || "Project image"}
                    className="w-[280px] h-[200px] md:w-[400px] md:h-[280px] lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] object-cover rounded shadow-lg"
                    draggable={false}
                  />
                </div>

                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-1 md:p-2 lg:p-3 bg-white/80 rounded-full shadow hover:bg-gray-100 focus:outline-none z-20"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                </button>
              </div>

              {/* Indicator dots - outside image */}
              <div className="w-full flex justify-center mb-2">
                <div className="flex gap-2">
                  {completedProjects[modal.projectIdx]?.images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setModal({ projectIdx: modal.projectIdx, imageIdx: idx })}
                      aria-label={`Go to image ${idx + 1}`}
                      className={`w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full border border-gray-400 transition-all duration-200 ${modal.imageIdx === idx ? 'bg-gray-800' : 'bg-white'}`}
                      style={{ outline: 'none' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Load More Button */}
        {filteredProjects.length > 0 && visibleCount < filteredProjects.length && (
          <div className="flex flex-col items-center mt-6 md:mt-8 lg:mt-10">
            <p className="text-xs md:text-sm text-gray-500 mb-3">
              Showing {visibleCount} of {filteredProjects.length} projects
            </p>
            <button
              type="button"
              className="px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-md bg-amber-600 text-white font-semibold text-sm md:text-base lg:text-lg shadow hover:bg-amber-700 transition"
              onClick={() => {
                const increment = getLoadIncrement();
                setLastAnimated(visibleCount - 1);
                setVisibleCount((c) => Math.min(c + increment, filteredProjects.length));
              }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s cubic-bezier(.23,1.01,.32,1) both;
        }
      `}</style>
    </section>
  );
}
