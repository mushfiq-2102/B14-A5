import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo-text.png";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Mobile: hamburger on the left */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="text-slate-700 md:hidden"
        >
          {menuOpen ? <HiX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
        </button>

        {/* Brand logo — left on desktop, centered on mobile */}
        <div className="flex items-center gap-2 md:mr-auto">
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
        </div>

        {/* Center nav links — desktop only */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="transition-colors hover:text-slate-900">
              {link}
            </a>
          ))}
        </nav>

        {/* Right: auth buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden text-sm font-semibold text-slate-700 hover:text-slate-900 sm:inline">
            Sign In
          </button>
          <button className="brand-gradient-bg rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              {link}
            </a>
          ))}
          <button className="mt-1 rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Sign In
          </button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
