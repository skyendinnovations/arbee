
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f5] border-t border-[#e2e2e2] mt-16 text-[#232323]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Summary */}
        <div className="pl-4 md:pl-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded bg-[#ffb347] bg-opacity-90">
              <span className="text-white text-xl font-bold">A</span>
            </span>
            <span className="text-lg font-bold text-[#232323]">Arbee Constructions</span>
          </div>
          <p className="mb-6 text-base leading-relaxed text-[#444]">
            Building quality and delivering trust since 1998. We provide expert construction solutions for commercial, industrial, and residential projects.
          </p>
          <div className="flex space-x-5 text-2xl mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-[#ff9900] transition-colors" tabIndex={0}>
              <Facebook className="w-7 h-7" color="#ff9900" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#ff9900] transition-colors" tabIndex={0}>
              <Twitter className="w-7 h-7" color="#ff9900" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#ff9900] transition-colors" tabIndex={0}>
              <Linkedin className="w-7 h-7" color="#ff9900" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#ff9900] transition-colors" tabIndex={0}>
              <Instagram className="w-7 h-7" color="#ff9900" />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-bold mb-4 tracking-widest text-[#ff9900] uppercase">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#ff9900] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[#ff9900] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#ff9900] transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-[#ff9900] transition-colors">Projects</a></li>
            <li><a href="#" className="hover:text-[#ff9900] transition-colors">Gallery</a></li>
            <li><a href="#" className="hover:text-[#ff9900] transition-colors">Contact</a></li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="text-sm font-bold mb-4 tracking-widest text-[#ff9900] uppercase">Services</h3>
          <ul className="space-y-2">
            <li>Commercial Construction</li>
            <li>Industrial Construction</li>
            <li>Residential Construction</li>
            <li>Hotel Construction</li>
            <li>Excavation</li>
            <li>Interior Design</li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-bold mb-4 tracking-widest text-[#ff9900] uppercase">Contact Info</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#ff9900]" />
              <span>123 Main Street, City, Country</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#ff9900]" />
              <span>Phone: (123) 456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#ff9900]" />
              <span>Email: info@constructionco.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#d1d1d1] bg-[#f2f2f0] mt-8">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-[#232323] text-sm">
          © 2026 Arbee Constructions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
