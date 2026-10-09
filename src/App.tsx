/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { CoursesSection } from './components/CoursesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LightboxModal } from './components/LightboxModal';
import { BookingModal } from './components/BookingModal';
import { ShareModal } from './components/ShareModal';
import { PortfolioItem, ServiceItem } from './data/studioData';

export default function App() {
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (service?: ServiceItem) => {
    setPreselectedService(service || null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-stone-800 flex flex-col font-sans selection:bg-[#E6D5B8] selection:text-[#5B4822]">
      {/* Top Header Bar */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero / Bio Profile Section */}
        <HeroSection 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenShare={() => setIsShareOpen(true)}
        />

        {/* 2. Sobre Rachel */}
        <AboutSection />

        {/* 3. Serviços de Alto Padrão */}
        <ServicesSection 
          onSelectServiceToBook={(service) => handleOpenBooking(service)}
        />

        {/* 4. Galeria - Conheça Meu Trabalho */}
        <GallerySection 
          onOpenLightbox={(item) => setSelectedPortfolioItem(item)}
        />

        {/* 5. Cursos e Formação */}
        <CoursesSection />

        {/* 6. Avaliações de Clientes (Google 5.0) */}
        <ReviewsSection />

        {/* 7. Instagram Destaque */}
        <InstagramSection />

        {/* 8. Localização (Onde Estamos em BH) */}
        <LocationSection />

        {/* 9. Perguntas Frequentes */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile/Desktop WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedPortfolioItem}
        onClose={() => setSelectedPortfolioItem(null)}
        onSelect={(item) => setSelectedPortfolioItem(item)}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedService}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
}
