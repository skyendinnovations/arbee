import {
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  BadgeCheck,
  ShieldCheck,
  Clock,
} from "lucide-react";
import logo from "./logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f5] border-t border-[#e2e2e2] mt-16 text-[#232323]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded bg-[#ffb347] bg-opacity-90">
              <img src={logo} alt="Arbee Constructions Logo" className="w-7 h-7" />
            </span>
            <span className="text-xl font-bold">Arbee Constructions</span>
          </div>

          <p className="text-base leading-relaxed text-[#5a5a5a]">
            Building the future of infrastructure with steel, concrete, and
            commitment. Industrial & commercial construction expertise.
          </p>

          <div className="flex gap-3">
            <a href="#" aria-label="LinkedIn" className="hover:text-[#ff9900]">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#ff9900]">
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="flex gap-2 mt-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#f3e7d1] text-xs text-[#b97a1a]">
              <ShieldCheck className="w-4 h-4" /> ISO 9001
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#f3e7d1] text-xs text-[#b97a1a]">
              <BadgeCheck className="w-4 h-4" /> Safety First
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h3 className="text-sm font-bold mb-4 tracking-widest text-[#ff9900]">
            QUICK LINKS
          </h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#ff9900]">Home</a></li>
            <li><a href="/about" className="hover:text-[#ff9900]">About</a></li>
            <li><a href="/services" className="hover:text-[#ff9900]">Services</a></li>
            <li><a href="/projects" className="hover:text-[#ff9900]">Projects</a></li>
            <li><a href="/contact" className="hover:text-[#ff9900]">Contact</a></li>
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="text-sm font-bold mb-4 tracking-widest text-[#ff9900]">
            SERVICES
          </h3>
          <ul className="space-y-2">
            <li>Architectural Design</li>
            <li>Civil Engineering</li>
            <li>Renovation</li>
            <li>Project Management</li>
          </ul>
        </nav>

        {/* Contact */}
        <address className="not-italic">
          <h3 className="text-sm font-bold mb-4 tracking-widest text-[#ff9900]">
            CONTACT
          </h3>
          <ul className="space-y-2 text-[#444]">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 text-[#ff9900]" />
              <span>123 Industrial Parkway, NY 10001</span>
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
            </li>
          </ul>
        </address>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e2e2e2] bg-[#f2f2f0]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-[#6a6a6a]">
          <span>© 2026 Arbee Constructions. All rights reserved.</span>
          <nav className="flex gap-6 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-[#ff9900]">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#ff9900]">Terms & Conditions</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
