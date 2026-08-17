import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="konum" className="py-14 sm:py-20 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-red-700" />
            <span>Kolay Ulaşım & Merkezi Konum</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
            Buradayız
          </h2>

          <p className="text-stone-600 text-sm sm:text-base">
            Yenibosna 29 Ekim Caddesi üzerinde merkezi ve kolay ulaşılabilir noktadayız.
          </p>
        </div>

        {/* Grid: Info Card + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Details & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 mb-1">
                    Açık Adresimiz
                  </h3>
                  <p className="text-sm text-stone-700 font-medium leading-relaxed">
                    {BUSINESS_INFO.fullAddress}
                  </p>
                </div>
              </div>

              {/* Action Buttons for Address */}
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] py-2.5 px-4 rounded-xl bg-red-800 hover:bg-red-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                  id="location-directions-btn"
                >
                  <Navigation className="w-4 h-4 text-amber-300" />
                  <span>Yol Tarifi Al</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="py-2.5 px-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                  id="location-copy-btn"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-500" />
                      <span>Adresi Kopyala</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Telephone & Fast Call Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 mb-1">
                    Telefonla Sipariş & İletişim
                  </h3>
                  <a
                    href={BUSINESS_INFO.phoneCallUrl}
                    className="text-lg sm:text-xl font-extrabold text-stone-900 hover:text-red-800 transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-xs text-stone-500">
                    Önceden arayıp tostunuzu sıcak hazırlatabilirsiniz.
                  </span>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.phoneCallUrl}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-emerald-200" />
                <span>Doğrudan Ara ({BUSINESS_INFO.phone})</span>
              </a>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-amber-700" />
                <h3 className="text-base font-bold text-stone-900">
                  Çalışma Saatleri
                </h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                {BUSINESS_INFO.workingHours.map((wh, idx) => (
                  <div key={idx} className="flex justify-between py-1 border-b border-stone-100 last:border-0">
                    <span className="text-stone-600 font-medium">{wh.days}</span>
                    <span className="text-stone-900 font-bold">{wh.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{BUSINESS_INFO.openingHoursDisplay}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[380px] lg:min-h-[460px] rounded-3xl overflow-hidden border border-stone-300/80 shadow-md relative bg-stone-100">
              <iframe
                title="Huzur Büfe Yenibosna Konumu"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Floating Maps Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-stone-200 max-w-xs pointer-events-auto">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-800 text-white flex items-center justify-center font-bold text-sm">
                    HB
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Huzur Büfe</h4>
                    <span className="text-[11px] text-stone-500 block">29 Ekim Cd. Bahçelievler</span>
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-[11px] font-bold text-red-800 hover:text-red-950 flex items-center gap-1"
                >
                  <span>Google Haritalar'da Aç</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
