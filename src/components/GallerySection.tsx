import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/businessData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'Tostlar', label: '🥪 Tostlar' },
    { id: 'Atıştırmalıklar', label: '🥐 Atıştırmalıklar' },
    { id: 'İçecekler', label: '☕ Çay & İçecekler' },
    { id: 'Mekan', label: '🪑 Oturma Alanı & Büfe' },
  ];

  const filteredGallery = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleOpenModal = (index: number) => {
    setActiveModalIndex(index);
  };

  const handleCloseModal = () => {
    setActiveModalIndex(null);
  };

  const handleNext = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % filteredGallery.length);
    }
  };

  const handlePrev = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section id="galeri" className="py-14 sm:py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Görsel Vitrin</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
            Bizden Kareler
          </h2>

          <p className="text-stone-600 text-sm sm:text-base">
            Tostlarımızın çıtırlığı, demli çayımızın rengi ve samimi büfe atmosferimizden anlar.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry-like Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredGallery.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(index)}
              className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden bg-stone-100 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay on hover / touch */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5">
                <div className="flex justify-end">
                  <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-xs text-white">
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>
                
                <div>
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalIndex !== null && filteredGallery[activeModalIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-3xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredGallery[activeModalIndex].imageUrl}
              alt={filteredGallery[activeModalIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="text-center mt-4 text-white">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">
                {filteredGallery[activeModalIndex].category}
              </span>
              <h3 className="text-lg font-bold">
                {filteredGallery[activeModalIndex].title}
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                {filteredGallery[activeModalIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
