import React from 'react';
import { Phone, MapPin, Clock, UtensilsCrossed, Star, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, SEO_KEYWORDS } from '../data/businessData';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-24 md:pb-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-red-800 flex items-center justify-center text-white">
                <UtensilsCrossed className="w-5 h-5 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-white tracking-tight">
                  Huzur<span className="text-red-500 ml-1">Büfe</span>
                </span>
                <span className="text-xs text-stone-400 font-medium">
                  Yenibosna / Bahçelievler
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {BUSINESS_INFO.aboutShort}
            </p>

            {/* Google rating indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-800 border border-stone-700 text-xs">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <Star className="w-3.5 h-3.5 text-stone-600 fill-stone-600" />
              </div>
              <span className="font-bold text-white">4,0 / 5</span>
              <span className="text-stone-400">(6 Google Yorumu)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Hızlı Menü
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#tost-spotlight" className="hover:text-white transition-colors">
                  Tostlarımız
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Lezzet Menüsü
                </a>
              </li>
              <li>
                <a href="#neden-biz" className="hover:text-white transition-colors">
                  Neden Huzur Büfe?
                </a>
              </li>
              <li>
                <a href="#yorumlar" className="hover:text-white transition-colors">
                  Müşteri Yorumları
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-white transition-colors">
                  Foto Galeri
                </a>
              </li>
              <li>
                <a href="#konum" className="hover:text-white transition-colors">
                  Konum & Ulaşım
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              İletişim & Adres
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={BUSINESS_INFO.phoneCallUrl} className="text-white hover:underline font-bold">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Haftanın 6 Günü: 07:00 - 19:00</span>
                  <span>Pazar: 08:00 - 17:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Local Area Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Bölgesel Hizmet
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Yenibosna Merkez Mahallesi ve 29 Ekim Caddesi civarında sıcak kahvaltı, çıtır tost, taze poğaça, börek ve çay servisi.
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>Google Haritalarda Aç</span>
            </a>
          </div>

        </div>

        {/* SEO Keywords Tag Cloud (Natural Local SEO) */}
        <div className="py-6 border-b border-stone-800">
          <span className="text-[11px] text-stone-500 font-semibold block mb-2">
            Öne Çıkan Arama Etiketleri:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {SEO_KEYWORDS.map((kw, i) => (
              <span
                key={i}
                className="text-[11px] px-2 py-0.5 rounded bg-stone-800/80 text-stone-400"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Huzur Büfe. Tüm hakları saklıdır. Yenibosna, Bahçelievler / İstanbul.
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors"
          >
            <span>Yukarı Çık</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
