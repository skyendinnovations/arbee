import React, { useState, useEffect } from "react";
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

const ongoingProjects = [
  {
    id: 1,
    name: "Metro City Mall",
    images: [img11, img12, img13, img14],
    description: "A large-scale commercial mall currently under construction in the city center.",
    completion: "Expected Dec 2026",
    category: "Commercial",
  },
  {
    id: 2,
    name: "Skyline Residences",
    images: [img15, img16, img1, img2],
    description: "Premium residential apartments with modern amenities and eco-friendly design.",
    completion: "Expected Aug 2026",
    category: "Residential",
  },
  {
    id: 3,
    name: "Riverfront Plaza",
    images: [img3, img4, img5, img6],
    description: "Mixed-use development along the river, featuring retail and office spaces.",
    completion: "Expected Mar 2027",
    category: "Commercial",
  },
  {
    id: 4,
    name: "Tech Park Expansion",
    images: [img7, img8, img9, img10],
    description: "Expansion of the city’s technology park with new labs and offices.",
    completion: "Expected Nov 2026",
    category: "Industrial",
  },
  {
    id: 5,
    name: "Harbor View Hotel",
    images: [img11, img15, img3, img7],
    description: "A luxury hotel with waterfront views and modern amenities.",
    completion: "Expected Jul 2027",
    category: "Hotel",
  },
  {
    id: 6,
    name: "City Heights Residences",
    images: [img12, img16, img4, img8],
    description: "Premium residential towers with cityscape views.",
    completion: "Expected Nov 2026",
    category: "Residential",
  },
  {
    id: 7,
    name: "Innovation Hub",
    images: [img13, img1, img5, img9],
    description: "A business innovation center for startups and tech companies.",
    completion: "Expected Mar 2027",
    category: "Industrial",
  },
  {
    id: 8,
    name: "Lakeside Villas",
    images: [img14, img2, img6, img10],
    description: "Exclusive lakeside villas with private docks.",
    completion: "Expected Aug 2026",
    category: "Elevations",
  },
  {
    id: 9,
    name: "Metro Plaza",
    images: [img11, img13, img15, img1, img3],
    description: "A mixed-use commercial plaza in the city center.",
    completion: "Expected Feb 2027",
    category: "Interior Designs",
  },
  {
    id: 10,
    name: "Artisan Lofts",
    images: [img12, img14, img16, img2, img4],
    description: "Modern loft apartments for urban living.",
    completion: "Expected Oct 2026",
    category: "Hotel",
  },
];

export default function OngoingProjects() {
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

  const [modal, setModal] = useState<null | { projectIdx: number; imageIdx: number }>(null);
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
  const filteredProjects = ongoingProjects.filter(
    (proj) => selectedCategory === "All Projects" || proj.category === selectedCategory
  );

  const openModal = (projectIdx: number, imageIdx: number = 0) => setModal({ projectIdx, imageIdx });
  const closeModal = () => setModal(null);

  const prevImage = () => {
    if (!modal) return;
    const images = ongoingProjects[modal.projectIdx]?.images || [];
    setModal({
      projectIdx: modal.projectIdx,
      imageIdx: (modal.imageIdx - 1 + images.length) % images.length,
    });
  };

  const nextImage = () => {
    if (!modal) return;
    const images = ongoingProjects[modal.projectIdx]?.images || [];
    setModal({
      projectIdx: modal.projectIdx,
      imageIdx: (modal.imageIdx + 1) % images.length,
    });
  };

  return (
    <section className="bg-[#f7f7f5] py-6 md:py-10 lg:py-16 px-2 md:px-8 lg:px-12 min-h-screen">
      <div className="max-w-5xl md:max-w-6xl lg:max-w-7xl xl:max-w-8xl mx-auto mb-8 mt-16 md:mt-20 lg:mt-24">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#232323] mb-2 text-center">
          Ongoing Projects
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-500 text-center mb-6 md:mb-8 lg:mb-10 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
          Discover our exciting projects currently under construction across the region.
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
            <p className="text-lg">No projects found in this category.</p>
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
            .map((proj, idx) => {
              const originalIdx = ongoingProjects.findIndex(p => p.id === proj.id);
              return (
              <div
                key={proj.id}
                className={`flex flex-col items-center transition-opacity duration-700 ${idx > lastAnimated ? 'opacity-0 animate-fadeInUp' : 'opacity-100'}`}
                style={{ animationDelay: idx > lastAnimated ? `${(idx - lastAnimated) * 0.08}s` : undefined }}
              >
                <button
                  type="button"
                    className="w-full h-36 md:h-48 lg:h-56 xl:h-64 object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
                  onClick={() => openModal(originalIdx, 0)}
                  aria-label={`View ${proj.name} in fullscreen`}
                >
                  <img
                    src={proj.images[0]}
                    alt={proj.name}
                    className="w-full h-36 md:h-48 lg:h-56 xl:h-64 object-cover rounded-lg"
                    draggable={false}
                    style={{ animationDelay: `${proj.id * 0.15}s` }}
                    onAnimationEnd={e => e.currentTarget.classList.remove('opacity-0', 'scale-95')}
                  />
                </button>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#232323] mt-4 mb-1 text-center">{proj.name}</h3>
                <p className="text-xs md:text-sm lg:text-base text-[#5a5a5a] mb-1 text-center">{proj.description}</p>
                <span className="text-xs md:text-sm text-gray-500 text-center">{proj.completion}</span>
              </div>
            );
            })}
          </div>
        )}

        {/* MODAL */}
        {modal !== null && ongoingProjects[modal.projectIdx] && (
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
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-gray-100 focus:outline-none"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                </button>

                <div className="relative">
                  {/* Project Name Overlay */}
                  <div className="absolute top-0 left-0 w-full bg-black/60 text-white text-lg font-semibold py-2 px-4 rounded-t shadow text-center z-10">
                    {ongoingProjects[modal.projectIdx].name}
                  </div>
                  <img
                    src={ongoingProjects[modal.projectIdx].images[modal.imageIdx]}
                    alt={ongoingProjects[modal.projectIdx].name}
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
              {/* Image Indicator Dots at Bottom, outside image container */}
              <div className="w-full flex justify-center mb-2">
                <div className="flex gap-2">
                  {ongoingProjects[modal.projectIdx].images.map((_, idx) => (
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
                setVisibleCount(c => Math.min(c + increment, filteredProjects.length));
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
