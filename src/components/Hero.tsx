import React from 'react';
import { Phone, MapPin, Star, Sparkles, Clock, Flame, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#FAF8F5] pt-4 pb-12 sm:py-16 lg:py-20">
      {/* Background warm ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {/* Google Rating Trust Pill */}
              <a
                href="#yorumlar"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold shadow-xs hover:bg-amber-100 transition-colors"
                id="hero-rating-badge"
              >
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>Google'da 4,0 / 5</span>
                <span className="text-stone-400 font-normal">({BUSINESS_INFO.googleReviewCount} Yorum)</span>
              </a>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{BUSINESS_INFO.openingHoursDisplay}</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-stone-900 tracking-tight leading-[1.15] mb-4">
              Lezzetin Adresi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-700 to-amber-700">
                Huzur Büfe
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 mb-6 sm:mb-8 max-w-xl font-normal leading-relaxed">
              Taptaze tostlar, sıcak çay, poğaça, börek ve daha fazlası... Yenibosna 29 Ekim Caddesi'nde samimi esnaf lezzeti ve ferah oturma alanıyla hizmetinizdeyiz.
            </p>

            {/* Main CTA Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              {/* Primary Call Button */}
              <a
                href={BUSINESS_INFO.phoneCallUrl}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-red-800 hover:bg-red-900 text-white font-bold text-base shadow-lg shadow-red-900/20 active:scale-[0.98] transition-all"
                id="hero-call-button"
              >
                <Phone className="w-5 h-5 text-amber-300 fill-amber-300" />
                <span>📞 Hemen Ara</span>
              </a>

              {/* Directions Button */}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-bold text-base shadow-xs active:scale-[0.98] transition-all"
                id="hero-maps-button"
              >
                <MapPin className="w-5 h-5 text-red-700" />
                <span>📍 Yol Tarifi</span>
              </a>

              {/* View Menu anchor */}
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl text-stone-700 hover:text-red-800 font-semibold text-sm transition-colors text-center"
              >
                <span>Menüyü Gör</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Highlights Grid */}
            <div className="w-full grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-stone-200/80">
              <div className="flex flex-col">
                <span className="flex items-center gap-1 text-xs font-bold text-stone-900 mb-0.5">
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  Sıcak & Taze
                </span>
                <span className="text-[11px] sm:text-xs text-stone-500">Anında Tost & Çay</span>
              </div>

              <div className="flex flex-col">
                <span className="flex items-center gap-1 text-xs font-bold text-stone-900 mb-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-red-600" />
                  Oturma Alanı
                </span>
                <span className="text-[11px] sm:text-xs text-stone-500">Rahat ve Temiz</span>
              </div>

              <div className="flex flex-col">
                <span className="flex items-center gap-1 text-xs font-bold text-stone-900 mb-0.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  Hızlı Servis
                </span>
                <span className="text-[11px] sm:text-xs text-stone-500">Paket & Masa</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Feature Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900 group">
                <img
                  src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=85"
                  alt="Huzur Büfe Kavurmalı ve Kaşarlı Tost"
                  className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                
                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="inline-block px-2.5 py-1 rounded-md bg-red-700/90 text-white text-xs font-bold mb-1.5 uppercase tracking-wider backdrop-blur-xs">
                    Öne Çıkan Lezzet
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Kavurmalı & Kaşarlı Çıtır Tost
                  </h3>
                  <p className="text-xs text-stone-200 mt-1 line-clamp-1">
                    Özel dana kavurma, taze kaşar ve demli çay eşliğinde
                  </p>
                </div>
              </div>

              {/* Floating Tea Card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-stone-100 flex items-center gap-3 max-w-[220px]">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-amber-50">
                  <img 
                    src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=200&q=80" 
                    alt="Taze Rize Çayı"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="block text-xs font-bold text-stone-900">Demli Çay</span>
                  <span className="text-[11px] text-amber-800 font-medium">Tavşan Kanı Taze</span>
                </div>
              </div>

              {/* Floating Customer Quote Badge */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-amber-900/95 text-amber-50 backdrop-blur-md rounded-2xl p-3 shadow-xl max-w-[210px] border border-amber-700/50 hidden sm:block">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] font-medium leading-snug italic text-amber-100">
                  "İstanbul'da yediğim en güzel tostun adresi..."
                </p>
                <span className="text-[10px] text-amber-300 font-semibold block mt-1">
                  — Google İncelemesi
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
