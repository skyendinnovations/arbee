import React from "react";
import Hero from "../components/Hero";
import { Building2, Palette, Leaf, Ruler, Wrench, Sparkles } from "lucide-react";

export default function Home() {
    const services = [
        {
            icon: Building2,
            title: "Strategic Project Management",
            tagline: "From Vision to Reality",
            description: "End-to-end project orchestration with military precision. We turn ambitious blueprints into standing monuments through meticulous planning, risk mitigation, and seamless execution.",
            delay: "0ms"
        },
        {
            icon: Palette,
            title: "Interior Architecture",
            tagline: "Where Function Meets Artistry",
            description: "We craft environments that don't just look extraordinary—they work flawlessly. Every material, every angle, every element designed to elevate human experience.",
            delay: "100ms"
        },
        {
            icon: Leaf,
            title: "Sustainable Engineering",
            tagline: "Building Tomorrow's Legacy",
            description: "Future-proof construction integrating cutting-edge green technology. Reduce carbon footprint while maximizing efficiency, durability, and long-term value.",
            delay: "200ms"
        },
        {
            icon: Ruler,
            title: "Architectural Innovation",
            tagline: "Design That Defies Limits",
            description: "Bold architectural concepts that push boundaries. We marry structural brilliance with aesthetic excellence to create landmarks that inspire generations.",
            delay: "300ms"
        },
        {
            icon: Wrench,
            title: "Precision Construction",
            tagline: "Craftsmanship at Scale",
            description: "World-class building execution powered by master craftsmen and advanced methodologies. Zero compromise on quality, safety, or structural integrity.",
            delay: "400ms"
        },
        {
            icon: Sparkles,
            title: "Transformation & Renewal",
            tagline: "Reimagine Every Space",
            description: "Breathe new life into existing structures. From historic restorations to modern makeovers, we revitalize properties with surgical precision and creative vision.",
            delay: "500ms"
        }
    ];

    return (
        <>
            <Hero />

            {/* Services Section — professional B/W with subtle background image */}
            <section className="relative bg-gray-50 py-24">
                {/* background image overlay (subtle, desaturated) */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1505691723518-36a9d0c6b12a?auto=format&fit=crop&w=1600&q=80')`,
                        filter: 'grayscale(100%) brightness(0.8)',
                        opacity: 0.28,
                        pointerEvents: 'none'
                    }}
                    aria-hidden="true"
                />
                {/* subtle white overlay to keep text readable */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 pointer-events-none" aria-hidden="true" />

                <div className="relative max-w-7xl mx-auto px-6 z-10">
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4">
                            <span className="px-3 py-1 bg-black text-white text-xs font-semibold uppercase tracking-wider">
                                Services
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-5xl font-bold text-black mb-4">
                            Our Core Services
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional construction and design services delivered with precision, safety, and transparent communication.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="service-card border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
                                >
                                    <div className="flex items-center justify-center w-12 h-12 bg-black rounded-md mb-4">
                                        <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                                    </div>

                                    <div className="text-sm font-medium text-gray-500 uppercase mb-1">{service.tagline}</div>
                                    <h3 className="text-2xl font-semibold text-black mb-2">{service.title}</h3>
                                    <p className="text-gray-700 text-base md:text-lg">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <style>{`
                .service-card { transition: box-shadow 200ms ease, transform 200ms ease; }
            `}</style>
        </>
    );
}
