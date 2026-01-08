import React from "react";
import { useNavigate } from "react-router-dom";
import completedCover from "../assets/images/completed_cover.jpg";
import ongoingCover from "../assets/images/ongoing_cover.jpg";
import img1 from "../assets/images/img1.jpg";
import img11 from "../assets/images/img11.jpg";

const cards = [
  {
    key: "completed",
    title: "Completed Projects",
    imagePrimary: completedCover,
    imageSecondary: img1,
    description: "Explore our portfolio of successfully delivered construction projects.",
    link: "/projects/completed",
    count: "10+ Projects",
  },
  {
    key: "ongoing",
    title: "Ongoing Projects",
    imagePrimary: ongoingCover,
    imageSecondary: img11,
    description: "See our current construction projects actively in progress.",
    link: "/projects/ongoing",
    count: "10+ Projects",
  },
];

export default function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f7f7f5] py-6 md:py-10 lg:py-16 px-2 md:px-8 lg:px-12">
      <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#232323] mb-2 text-center">
          Projects
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-500 text-center mb-6 md:mb-10 lg:mb-12 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
          Discover our portfolio of excellence in construction — from landmark completions to exciting works in progress.
        </p>

        {/* FLEX CONTAINER */}
        <div className="flex gap-4 md:gap-6 lg:gap-8 flex-col md:flex-row">
          {cards.map((card, idx) => (
            <div
              key={card.key}
              tabIndex={0}
              onClick={() => navigate(card.link)}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && navigate(card.link)
              }
              className="
                group relative cursor-pointer overflow-hidden rounded-xl
                bg-white shadow-md transition-all duration-500 ease-in-out
                flex-1 md:hover:flex-[2.5] lg:hover:flex-[3] md:focus:flex-[2.5] lg:focus:flex-[3]
              "
              style={{
                animation: `fadeInUp 0.5s ${idx * 0.15 + 0.1}s both`,
              }}
            >
              {/* IMAGE WRAPPER */}
              <div className="relative h-48 md:h-64 lg:h-72 xl:h-80 w-full overflow-hidden">
                {/* PRIMARY IMAGE (DEFAULT ONLY) */}
                <img
                  src={card.imagePrimary}
                  alt={card.title}
                  className="
                    absolute inset-0 w-full h-full object-cover
                    transition-all duration-500 ease-in-out
                    opacity-100 scale-100
                    group-hover:opacity-0 group-hover:scale-105
                  "
                />

                {/* SECONDARY IMAGE (ONLY ON HOVER) */}
                <img
                  src={card.imageSecondary}
                  alt=""
                  className="
                    absolute inset-0 w-full h-full object-cover
                    transition-all duration-500 ease-in-out
                    opacity-0 scale-105
                    group-hover:opacity-100 group-hover:scale-100
                  "
                />

                {/* OVERLAY CONTENT */}
                <div
                  className="
                    absolute inset-0 flex flex-col justify-end
                    bg-gradient-to-t from-black/70 via-black/40 to-transparent
                    transition-all duration-300
                    p-4 md:p-6 lg:p-8
                  "
                >
                  <div className="flex items-center gap-2 mb-1 md:mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    <span className="w-fit px-3 py-1 text-xs font-semibold rounded-full bg-[#ff9900] text-white">
                      {card.key === "ongoing" ? "Ongoing" : "Completed"}
                    </span>
                    <span className="w-fit px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white backdrop-blur-sm">
                      {card.count}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 md:mb-2 transform transition-all duration-300 group-hover:translate-y-[-4px] group-hover:text-[#ff9900]">
                    {card.title}
                  </h3>

                  <p className="text-xs md:text-sm lg:text-base text-white/90 mb-2 md:mb-4 max-w-xs md:max-w-md transform transition-all duration-300 group-hover:translate-y-[-4px] group-hover:text-white">
                    {card.description}
                  </p>

                  <button
                    className="
                      w-fit px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 rounded-md
                      bg-[#ff9900] text-white font-semibold
                      text-xs md:text-sm lg:text-base
                      hover:bg-[#d98100] transition-all duration-300
                      transform group-hover:translate-y-[-4px] group-hover:scale-105
                    "
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ENTRY ANIMATION */}
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
      `}</style>
    </section>
  );
}
