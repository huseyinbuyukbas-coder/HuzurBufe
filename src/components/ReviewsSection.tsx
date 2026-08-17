import React, { useState } from 'react';
import { Star, MessageSquare, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GOOGLE_REVIEWS, BUSINESS_INFO } from '../data/businessData';

export const ReviewsSection: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  const filteredReviews = filterRating === 'all'
    ? GOOGLE_REVIEWS
    : GOOGLE_REVIEWS.filter(r => r.rating === filterRating);

  return (
    <section id="yorumlar" className="py-14 sm:py-20 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Şeffaf ve Gerçek Müşteri Deneyimleri</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
            Müşterilerimiz Ne Diyor?
          </h2>

          <p className="text-stone-600 text-sm sm:text-base">
            Google İşletme Profilimizdeki tüm gerçek müşteri değerlendirmelerini şeffaflıkla paylaşıyoruz.
          </p>
        </div>

        {/* Google Rating Overview Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm max-w-3xl mx-auto mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center sm:text-left">
            
            {/* Score Big Display */}
            <div className="flex flex-col items-center sm:items-start border-b sm:border-b-0 sm:border-r border-stone-100 pb-5 sm:pb-0 sm:pr-6">
              <div className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
                4.0<span className="text-stone-400 text-2xl font-semibold">/5</span>
              </div>
              
              <div className="flex items-center gap-1 my-2">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <Star className="w-5 h-5 text-stone-300 fill-stone-200" />
              </div>

              <span className="text-xs text-stone-500 font-medium">
                Toplam 6 Google Değerlendirmesi
              </span>
            </div>

            {/* Rating Breakdown & Transparency statement */}
            <div className="sm:col-span-2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-stone-800">
                  Google Haritalar Doğrulanmış Profil
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                Esnaf ahlakımızın gereği olarak tüm yorumları filtrelemeden, olduğu gibi sunuyoruz. Müşterilerimizin memnuniyeti ve geri bildirimleri bizim için en değerli rehberdir.
              </p>

              <div className="flex items-center gap-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-800 hover:text-red-950 hover:underline"
                >
                  <span>Google'da Tüm Yorumları İncele</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Pills for Reviews */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setFilterRating('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterRating === 'all'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            Tüm Yorumlar ({GOOGLE_REVIEWS.length})
          </button>
          <button
            onClick={() => setFilterRating(5)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterRating === 5
                ? 'bg-amber-500 text-stone-950 shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            ⭐ 5 Yıldızlı ({GOOGLE_REVIEWS.filter(r => r.rating === 5).length})
          </button>
          <button
            onClick={() => setFilterRating(3)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterRating === 3
                ? 'bg-stone-700 text-white'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            ⭐ 3 Yıldızlı (1)
          </button>
          <button
            onClick={() => setFilterRating(1)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterRating === 1
                ? 'bg-stone-700 text-white'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            ⭐ 1 Yıldızlı (1)
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredReviews.map((review) => {
            const isTopRated = review.rating >= 5;
            return (
              <div
                key={review.id}
                className={`rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 ${
                  isTopRated
                    ? 'bg-white border-2 border-amber-200/80 shadow-sm hover:shadow-md'
                    : 'bg-white/80 border border-stone-200 shadow-xs'
                }`}
              >
                <div>
                  {/* Top Bar: Stars + Author */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-stone-200 text-stone-200'
                          }`}
                        />
                      ))}
                    </div>

                    <span className="text-[11px] font-semibold text-stone-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Google Yorumu
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm font-medium text-stone-800 leading-relaxed mb-4">
                    "{review.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-stone-200 to-amber-100 text-stone-800 font-bold text-xs flex items-center justify-center border border-stone-200">
                      {review.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-stone-900 leading-tight">
                        {review.author}
                      </span>
                      <span className="text-[10px] text-stone-400">
                        {review.timeAgo}
                      </span>
                    </div>
                  </div>

                  {isTopRated && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[10px] font-bold">
                      Öne Çıkan
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
