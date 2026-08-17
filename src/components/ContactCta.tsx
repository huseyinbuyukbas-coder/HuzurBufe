import React from 'react';
import { Phone, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const ContactCta: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-gradient-to-br from-red-900 via-red-950 to-stone-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sıcak & Hızlı Esnaf Servisi</span>
        </div>

        {/* Headlines */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
          Acıktınız mı?
        </h2>

        <p className="text-xl sm:text-2xl text-amber-200/90 font-medium mb-6 font-display italic">
          "Bir telefon kadar yakınız."
        </p>

        <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto mb-8 leading-relaxed">
          Tostunuzu, çayınızı veya kahvaltılık börek ve poğaçanızı siz gelene kadar sıcacık hazırlayalım.
        </p>

        {/* Big Phone Action Box */}
        <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-3xl p-6 sm:p-8 max-w-lg mx-auto shadow-2xl">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
            Doğrudan Arayın
          </span>

          <a
            href={BUSINESS_INFO.phoneCallUrl}
            className="text-3xl sm:text-4xl font-extrabold text-white hover:text-amber-300 transition-colors block mb-5 tracking-tight"
            id="contact-cta-phone-link"
          >
            {BUSINESS_INFO.phone}
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BUSINESS_INFO.phoneCallUrl}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-base flex items-center justify-center gap-2.5 transition-all shadow-lg active:scale-95"
              id="contact-cta-call-btn"
            >
              <Phone className="w-5 h-5 fill-stone-950" />
              <span>Hemen Ara</span>
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              id="contact-cta-maps-btn"
            >
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>Yol Tarifi Al</span>
            </a>
          </div>

          <div className="mt-4 text-[11px] text-stone-400">
            Adres: Yenibosna Merkez, 29 Ekim Cd., Bahçelievler / İstanbul
          </div>
        </div>

      </div>
    </section>
  );
};
