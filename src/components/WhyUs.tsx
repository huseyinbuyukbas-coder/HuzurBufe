import React from 'react';
import { WHY_US_ITEMS, BUSINESS_INFO } from '../data/businessData';
import { HeartHandshake, ShieldCheck } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section id="neden-biz" className="py-14 sm:py-20 bg-white border-y border-stone-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Esnaf Samimiyeti & Temiz Hizmet</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            Bir Tosttan Fazlası
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Huzur Büfe sadece hızlı atıştırmalık değil, Yenibosna'da günün yorgunluğunu taze çay ve sıcacık çıtır tost eşliğinde atabileceğiniz samimi bir lezzet durağıdır.
          </p>
        </div>

        {/* 4 Core Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200/80 hover:border-red-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Large Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-stone-200/60 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-red-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-stone-800 mb-2 leading-snug">
                  {item.description}
                </p>

                <p className="text-xs text-stone-500 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-bold text-red-800">
                <ShieldCheck className="w-3.5 h-3.5 text-red-700" />
                <span>Garantili Tazelik</span>
              </div>
            </div>
          ))}
        </div>

        {/* Neighborhood Atmosphere Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-red-900 to-red-950 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-2">
              Yenibosna Merkez Mahallesi
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight">
              Kapımız Her Zaman Açık, Çayımız Her Zaman Taze
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed mb-5">
              İster sabah işe giderken hızlıca sıcak poğaça ve böreğinizi alın, ister öğle arasında oturup kavurmalı kaşarlı tostunuzu çayınızla keyifle tüketin.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneCallUrl}
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                İletişime Geç ({BUSINESS_INFO.phone})
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                Konumu Haritada Gör
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
