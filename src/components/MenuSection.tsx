import React, { useState } from 'react';
import { Phone, Utensils, Coffee, Sandwich, Cookie, Info } from 'lucide-react';
import { MENU_ITEMS, BUSINESS_INFO, MenuItem } from '../data/businessData';

type CategoryFilter = 'all' | 'tostlar' | 'atistirmaliklar' | 'icecekler';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const categories = [
    { id: 'all' as CategoryFilter, name: 'Tüm Lezzetler', icon: Utensils, count: MENU_ITEMS.length },
    { id: 'tostlar' as CategoryFilter, name: 'Tost Çeşitleri', icon: Sandwich, count: MENU_ITEMS.filter(i => i.category === 'tostlar').length },
    { id: 'atistirmaliklar' as CategoryFilter, name: 'Atıştırmalıklar', icon: Cookie, count: MENU_ITEMS.filter(i => i.category === 'atistirmaliklar').length },
    { id: 'icecekler' as CategoryFilter, name: 'Sıcak & Soğuk İçecekler', icon: Coffee, count: MENU_ITEMS.filter(i => i.category === 'icecekler').length },
  ];

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-14 sm:py-20 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Günlük & Taze Çeşitler</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
            Menümüzden Lezzetler
          </h2>

          <p className="text-stone-600 text-sm sm:text-base">
            Günün her saati sıcak servis edilen enfes tostlar, fırından yeni çıkmış hamur işleri ve demli çayımızla tanışın.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-red-800 text-white shadow-md shadow-red-900/20 scale-102'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
                id={`menu-filter-${cat.id}`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-stone-500'}`} />
                <span>{cat.name}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  isActive ? 'bg-red-950 text-amber-200' : 'bg-stone-100 text-stone-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {item.highlight && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-xs text-amber-300 text-[11px] font-bold">
                    {item.highlight}
                  </div>
                )}

                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-white/90 text-stone-800 text-[11px] font-semibold backdrop-blur-xs">
                  {item.category === 'tostlar' ? 'Tost Çeşidi' : item.category === 'atistirmaliklar' ? 'Atıştırmalık' : 'İçecek'}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2 group-hover:text-red-800 transition-colors">
                    {item.name}
                  </h3>
                  
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[11px] font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Order Call Action */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <span className="text-xs text-stone-500 font-medium">
                    Taze & Sıcak Hazırlanır
                  </span>
                  
                  <a
                    href={BUSINESS_INFO.phoneCallUrl}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-800 text-red-800 hover:text-white text-xs font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Sipariş Ver</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Honest Pricing & Ordering Notice Box */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left max-w-3xl mx-auto">
          <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-xs sm:text-sm font-bold text-stone-900 mb-0.5">
              Sipariş & Porsiyon Bilgisi
            </h4>
            <p className="text-xs text-stone-600">
              Ürünlerimiz sipariş anında taze olarak hazırlanmaktadır. Günlük porsiyon detayları veya paket siparişleriniz için dükkanımızı doğrudan arayabilirsiniz: <strong className="text-stone-800">{BUSINESS_INFO.phone}</strong>
            </p>
          </div>
          <a
            href={BUSINESS_INFO.phoneCallUrl}
            className="shrink-0 px-4 py-2 rounded-xl bg-red-800 hover:bg-red-900 text-white text-xs font-bold transition-colors"
          >
            Hemen Ara
          </a>
        </div>

      </div>
    </section>
  );
};
