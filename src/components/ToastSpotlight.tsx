import React from 'react';
import { Phone, Star, Flame, Sparkles, Check } from 'lucide-react';
import { BUSINESS_INFO, MENU_ITEMS } from '../data/businessData';

export const ToastSpotlight: React.FC = () => {
  const toastItems = MENU_ITEMS.filter((item) => item.category === 'tostlar');

  return (
    <section id="tost-spotlight" className="py-12 sm:py-16 bg-gradient-to-b from-stone-900 via-[#221010] to-stone-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-red-950/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with Real Quote Callout */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/60 border border-red-700/50 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Huzur Büfe Özel İmzası</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-display">
            Çıtır, Bol Malzemeli & Sıcak Tostlarımız
          </h2>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Yenibosna'da tost denince akla gelen ilk adres: Kaliteli ekmek, taze malzemeler ve ustalıkla kızartılan çıtır lezzet.
          </p>

          {/* Featured Customer Testimonial Quote Banner */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex -space-x-1 shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <p className="text-xs sm:text-sm text-amber-100 font-medium italic">
                "{BUSINESS_INFO.featuredQuote.text}"
              </p>
              <span className="text-[11px] text-stone-400 font-semibold block mt-0.5">
                — {BUSINESS_INFO.featuredQuote.author} (Google Doğrulanmış Yorumu)
              </span>
            </div>
          </div>
        </div>

        {/* Big Toast Cards Grid (Kavurmalı, Sucuklu, Kaşarlı, Karışık) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {toastItems.slice(0, 3).map((item, index) => (
            <div 
              key={item.id}
              className={`rounded-3xl overflow-hidden bg-stone-800/80 border ${
                index === 0 ? 'border-amber-500/60 shadow-xl shadow-red-950/50' : 'border-stone-700/60'
              } flex flex-col transition-all duration-300 hover:border-amber-400/80 hover:-translate-y-1 group`}
            >
              {/* Image Container with high appetite presentation */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/20"></div>

                {/* Highlight Badge */}
                {item.highlight && (
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-red-800/90 text-amber-200 text-xs font-bold backdrop-blur-sm border border-red-600/40 flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>{item.highlight}</span>
                  </div>
                )}

                {/* Toast Type Tag */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 text-white text-xs font-medium backdrop-blur-xs">
                  Sıcak & Çıtır
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  
                  <p className="text-sm text-stone-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Ingredients Checklist */}
                  {item.ingredients && (
                    <div className="space-y-1.5 pt-3 border-t border-stone-700/60 mb-5">
                      <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                        Öne Çıkan Özellikler
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {item.ingredients.map((ing, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-stone-300">
                            <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span className="truncate">{ing}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Call to Order */}
                <a
                  href={BUSINESS_INFO.phoneCallUrl}
                  className="w-full py-3 rounded-xl bg-red-800 hover:bg-red-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors active:scale-98 shadow-sm"
                  id={`order-toast-${item.id}`}
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Sipariş İçin Ara</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for All Toast Variations */}
        <div className="rounded-2xl bg-gradient-to-r from-red-950/90 via-stone-800/90 to-red-950/90 border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-1">
              Özel Tost Tercihleriniz Mi Var?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300">
              Acılı, çift kaşarlı, tereyağlı veya ekstra malzemeli tostlarınızı arzunuza göre anında hazırlıyoruz.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.phoneCallUrl}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-md"
          >
            Hemen Arayın: {BUSINESS_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
