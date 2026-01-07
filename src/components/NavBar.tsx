import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

    // Active/inactive link styling
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
            isActive 
                ? "text-amber-600" 
                : "text-gray-700 hover:text-amber-600"
        }`;

    const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
        `block px-4 py-3 text-base font-medium transition-colors duration-200 ${
            isActive 
                ? "text-amber-600 bg-gray-50" 
                : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
        }`;

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo and Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-md flex items-center justify-center shadow-sm">
                            <svg 
                                className="w-6 h-6 text-white" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2.5} 
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                                />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 tracking-tight">ARBEE</h1>
                            <p className="text-xs text-gray-500 tracking-wider uppercase">Construction</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        <NavLink to="/" end className={linkClass}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={linkClass}>
                            About Us
                        </NavLink>
                        
                        {/* Projects Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                            onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                        >
                            <button
                                className="px-4 py-2 text-sm font-medium tracking-wide text-gray-700 hover:text-amber-600 transition-colors duration-200 flex items-center gap-1"
                            >
                                Projects
                                <svg 
                                    className={`w-4 h-4 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {isProjectsDropdownOpen && (
                                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-2 animate-fadeIn">
                                    <NavLink 
                                        to="/projects/completed" 
                                        className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        Completed Projects
                                    </NavLink>
                                    <NavLink 
                                        to="/projects/ongoing" 
                                        className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        Ongoing Projects
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        <NavLink to="/services" className={linkClass}>
                            Services
                        </NavLink>
                        <NavLink to="/gallery" className={linkClass}>
                            Gallery
                        </NavLink>
                        <NavLink to="/contact" className={linkClass}>
                            Contact Us
                        </NavLink>
                    </nav>

                    {/* CTA Button and Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <a
                            href="/contact"
                            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-amber-600 text-white text-sm font-semibold rounded-md hover:bg-amber-700 transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            Request Quote
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="lg:hidden border-t border-gray-100 py-4 animate-slideDown">
                        <NavLink to="/" end className={mobileLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                            About Us
                        </NavLink>
                        
                        {/* Mobile Projects Section */}
                        <div>
                            <button
                                onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
                            >
                                Projects
                                <svg 
                                    className={`w-5 h-5 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isProjectsDropdownOpen && (
                                <div className="bg-gray-50 pl-4">
                                    <NavLink 
                                        to="/projects/completed" 
                                        className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Completed Projects
                                    </NavLink>
                                    <NavLink 
                                        to="/projects/ongoing" 
                                        className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Ongoing Projects
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        <NavLink to="/services" className={mobileLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                            Services
                        </NavLink>
                        <NavLink to="/gallery" className={mobileLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                            Gallery
                        </NavLink>
                        <NavLink to="/contact" className={mobileLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                            Contact Us
                        </NavLink>

                        {/* Mobile CTA */}
                        <div className="px-4 pt-4">
                            <a
                                href="/contact"
                                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-amber-600 text-white text-base font-semibold rounded-md hover:bg-amber-700 transition-all duration-200 shadow-sm"
                            >
                                Request Quote
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </nav>
                )}
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideDown {
                    from { opacity: 0; max-height: 0; }
                    to { opacity: 1; max-height: 500px; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-slideDown {
                    animation: slideDown 0.3s ease-out;
                }
            `}</style>
        </header>
    );
}
