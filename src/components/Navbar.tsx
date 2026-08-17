import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu as MenuIcon, X, Clock, UtensilsCrossed } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenOrderModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Tostlarımız', href: '#tost-spotlight' },
    { name: 'Menü', href: '#menu' },
    { name: 'Neden Huzur?', href: '#neden-biz' },
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Konum & İletişim', href: '#konum' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-announcement bar */}
      <div className="bg-[#801313] text-amber-100 text-xs py-1.5 px-4 font-medium">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{BUSINESS_INFO.openingHoursDisplay}</span>
            <span className="hidden sm:inline text-amber-300">|</span>
            <span className="hidden sm:inline">Yenibosna 29 Ekim Caddesi</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline">Sıcak Tost & Çay Keyfi</span>
            <a 
              href={BUSINESS_INFO.phoneCallUrl} 
              className="flex items-center gap-1 text-white hover:text-amber-200 font-semibold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3' 
            : 'bg-white/90 backdrop-blur-sm border-b border-stone-100 py-3.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo with warm diner icon */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2.5 group"
            id="brand-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-800 to-red-950 flex items-center justify-center text-white shadow-md shadow-red-900/10 group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl text-stone-900 tracking-tight leading-none group-hover:text-red-800 transition-colors">
                Huzur<span className="text-red-700 ml-1">Büfe</span>
              </span>
              <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider mt-0.5">
                Yenibosna · İstanbul
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-stone-700 hover:text-red-800 hover:bg-red-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center gap-1.5"
              id="nav-maps-btn"
            >
              <MapPin className="w-3.5 h-3.5 text-red-700" />
              <span>Yol Tarifi</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneCallUrl}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-red-800 hover:bg-red-900 shadow-sm transition-all flex items-center gap-2 active:scale-95"
              id="nav-call-btn"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Hemen Ara</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-stone-800 hover:bg-stone-100 transition-colors"
            aria-label="Menüyü Aç/Kapat"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-stone-800 hover:text-red-800 hover:bg-red-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.phoneCallUrl}
                className="w-full py-3 rounded-xl font-bold text-white bg-red-800 hover:bg-red-900 flex items-center justify-center gap-2 text-center text-sm shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Hemen Ara (0212 639 32 40)</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 flex items-center justify-center gap-2 text-center text-sm"
              >
                <MapPin className="w-4 h-4 text-red-700" />
                <span>Google Haritalarda Aç</span>
              </a>

              <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>{BUSINESS_INFO.openingHoursDisplay}</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
