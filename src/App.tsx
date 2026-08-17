/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToastSpotlight } from './components/ToastSpotlight';
import { MenuSection } from './components/MenuSection';
import { WhyUs } from './components/WhyUs';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-red-900 selection:text-white">
      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section: Direct call/maps actions, rating badge & appetizing visual */}
        <Hero />

        {/* 2. Star Focus: Toast Spotlight (Kavurmalı, Sucuklu, Kaşarlı Tost) */}
        <ToastSpotlight />

        {/* 3. Categorized Full Menu (Tostlar, Atıştırmalıklar, İçecekler) */}
        <MenuSection />

        {/* 4. Why Huzur Büfe? ("Bir Tosttan Fazlası") */}
        <WhyUs />

        {/* 5. Real Google Customer Reviews (All 6 verified reviews + 4.0 rating) */}
        <ReviewsSection />

        {/* 6. Visual Photo Gallery ("Bizden Kareler") */}
        <GallerySection />

        {/* 7. Location & Interactive Map ("Buradayız" - Yenibosna 29 Ekim Cd.) */}
        <LocationSection />

        {/* 8. Call to Action ("Acıktınız mı? Bir telefon kadar yakınız") */}
        <ContactCta />
      </main>

      {/* Footer with Business & Local SEO Info */}
      <Footer />

      {/* Mobile Sticky Bottom Bar (Call & Directions) */}
      <MobileStickyBar />
    </div>
  );
}
