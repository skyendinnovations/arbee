
<<<<<<< HEAD
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
=======

import { Linkedin, Instagram, MapPin, Phone, Mail, BadgeCheck, ShieldCheck, Clock } from "lucide-react";
import logo from "./logo.svg";

>>>>>>> efad29f (modified Footer.tsx)

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f5] border-t border-[#e2e2e2] mt-16 text-[#232323]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Summary */}
<<<<<<< HEAD
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
=======
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded bg-[#ffb347] bg-opacity-90">
              <img src={logo} alt="Arbee Constructions Logo" className="w-7 h-7" />
            </span>
            <span className="text-xl font-bold text-[#232323]">Arbee Constructions</span>
          </div>
          <p className="text-base leading-relaxed text-[#5a5a5a]">
            Building the future of infrastructure with steel, concrete, and commitment.<br />
            Industrial &amp; commercial construction expertise.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#ff9900] transition-colors" tabIndex={0}>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#ff9900] transition-colors" tabIndex={0}>
              <Instagram className="w-6 h-6" />
>>>>>>> efad29f (modified Footer.tsx)
            </a>
          </div>
          <div className="flex gap-2 mt-4">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#f3e7d1] text-xs font-medium text-[#b97a1a]">
              <ShieldCheck className="w-4 h-4" /> ISO 9001
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#f3e7d1] text-xs font-medium text-[#b97a1a]">
              <BadgeCheck className="w-4 h-4" /> Safety First
            </span>
          </div>
        </div>
        {/* Quick Links */}
<<<<<<< HEAD
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
=======
        <nav aria-label="Quick Links">
          <h3 className="text-sm font-bold mb-4 tracking-widest text-[#ff9900]">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#ff9900] transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-[#ff9900] transition-colors">About Us</a></li>
            <li><a href="/services" className="hover:text-[#ff9900] transition-colors">Services</a></li>
            <li><a href="/projects" className="hover:text-[#ff9900] transition-colors">Projects</a></li>
            <li><a href="/contact" className="hover:text-[#ff9900] transition-colors">Contact</a></li>
          </ul>
        </nav>
        {/* Services */}
        <nav aria-label="Services">
          <h3 className="text-sm font-bold mb-4 tracking-widest text-[#ff9900]">SERVICES</h3>
>>>>>>> efad29f (modified Footer.tsx)
          <ul className="space-y-2">
            <li>Architectural Design</li>
            <li>Civil Engineering</li>
            <li>Renovation</li>
            <li>Project Management</li>
          </ul>
        </nav>
        {/* Contact Info */}
<<<<<<< HEAD
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
=======
        <address className="not-italic">
          <h3 className="text-sm font-bold mb-4 tracking-widest text-[#ff9900]">CONTACT</h3>
          <ul className="space-y-2 text-[#444]">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 text-[#ff9900]" />
              <span>123 Industrial Parkway,<br />Sector 4, NY 10001</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#ff9900]" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#ff9900]" />
              <span>contact@arbeeconstructions.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#ff9900]" />
              <span>Mon–Fri: 8:00–18:00</span>
>>>>>>> efad29f (modified Footer.tsx)
            </li>
          </ul>
          {/* Newsletter subscription */}
          <form className="mt-6 flex flex-col gap-2" onSubmit={e => e.preventDefault()} aria-label="Newsletter Subscription">
            <label htmlFor="newsletter-email" className="text-xs font-semibold text-[#232323]">Subscribe to our newsletter</label>
            <div className="flex gap-2">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded border border-[#e2e2e2] focus:border-[#ff9900] bg-white text-[#232323] text-sm outline-none"
                aria-label="Email address"
              />
              <button type="submit" className="px-4 py-2 rounded bg-[#ff9900] text-white font-semibold text-sm hover:bg-[#e88c00] transition-colors">Subscribe</button>
            </div>
          </form>
        </address>
      </div>
<<<<<<< HEAD
      <div className="border-t border-[#d1d1d1] bg-[#f2f2f0] mt-8">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-[#232323] text-sm">
          © 2026 Arbee Constructions. All rights reserved.
=======
      {/* Bottom Bar */}
      <div className="border-t border-[#e2e2e2] bg-[#f2f2f0]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-[#6a6a6a] text-sm">
          <span>© 2026 Arbee Constructions Inc. All rights reserved.</span>
          <nav className="flex gap-6 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-[#ff9900] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#ff9900] transition-colors">Terms &amp; Conditions</a>
          </nav>
>>>>>>> efad29f (modified Footer.tsx)
        </div>
      </div>
    </footer>
  );
};

export default Footer;
