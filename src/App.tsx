import { Linkedin, Instagram, MapPin, Phone, Mail, BadgeCheck, ShieldCheck, Clock } from "lucide-react";
import logo from "./logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f5] border-t border-[#e2e2e2] mt-16 text-[#232323]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Summary */}
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
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#ff9900] transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#ff9900] transition-colors">
              <Instagram className="w-6 h-6" />
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

        <main className="mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="text-sm font-bold mb-4 tracking-widest text-[#ff9900]">SERVICES</h3>
          <ul className="space-y-2">
            <li>Architectural Design</li>
            <li>Civil Engineering</li>
            <li>Renovation</li>
            <li>Project Management</li>
          </ul>
        </nav>

        {/* Contact Info */}
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

      {/* Bottom Bar */}
      <div className="border-t border-[#e2e2e2] bg-[#f2f2f0]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-[#6a6a6a] text-sm">
          <span>© 2026 Arbee Constructions Inc. All rights reserved.</span>
          <nav className="flex gap-6 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-[#ff9900] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#ff9900] transition-colors">Terms &amp; Conditions</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
