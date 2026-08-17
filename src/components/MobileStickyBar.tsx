import React from 'react';
import { Phone, MapPin, Utensils } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const MobileStickyBar: React.FC = () => {
  const handleScrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-stone-200 px-3 py-2 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Button */}
        <a
          href={BUSINESS_INFO.phoneCallUrl}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-red-800 text-white font-bold text-xs active:scale-95 transition-transform shadow-xs"
          id="mobile-sticky-call-btn"
        >
          <Phone className="w-4 h-4 mb-0.5 text-amber-300 fill-amber-300" />
          <span className="truncate">📞 Ara</span>
        </a>

        {/* Directions Button */}
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-stone-100 text-stone-900 font-bold text-xs hover:bg-stone-200 active:scale-95 transition-transform border border-stone-200"
          id="mobile-sticky-maps-btn"
        >
          <MapPin className="w-4 h-4 mb-0.5 text-red-700" />
          <span className="truncate">📍 Yol Tarifi</span>
        </a>

        {/* Menu Quick Button */}
        <button
          onClick={handleScrollToMenu}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-stone-100 text-stone-900 font-bold text-xs hover:bg-stone-200 active:scale-95 transition-transform border border-stone-200"
          id="mobile-sticky-menu-btn"
        >
          <Utensils className="w-4 h-4 mb-0.5 text-amber-600" />
          <span className="truncate">🥪 Menü</span>
        </button>

      </div>
    </div>
  );
};
