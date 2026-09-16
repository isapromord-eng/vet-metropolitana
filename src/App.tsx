import React, { useState } from 'react';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PetCareEstimator } from './components/PetCareEstimator';
import { BranchesSection } from './components/BranchesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { InstagramFeed } from './components/InstagramFeed';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AppointmentModal } from './components/AppointmentModal';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBranchId, setSelectedBranchId] = useState<string | undefined>();
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [modalNotes, setModalNotes] = useState<string>('');

  const handleOpenAppointmentModal = (branchId?: string, serviceId?: string, notes?: string) => {
    setSelectedBranchId(branchId);
    setSelectedServiceId(serviceId);
    setModalNotes(notes || '');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF9FB] flex flex-col selection:bg-brand-500 selection:text-white">
      {/* 24/7 Sticky Emergency Top Ribbon */}
      <EmergencyBanner />

      {/* Main Sticky Navbar */}
      <Navbar onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Quick Booking Widget */}
        <Hero onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* Services & Medical Catalog */}
        <ServicesSection onSelectService={(serviceId) => handleOpenAppointmentModal(undefined, serviceId)} />

        {/* Interactive Custom Care Calculator */}
        <PetCareEstimator onOpenBookingWithPlan={(planDetails) => handleOpenAppointmentModal(undefined, undefined, planDetails)} />

        {/* Branches & Locations Directory (Santo Domingo) */}
        <BranchesSection onSelectBranch={(branchId) => handleOpenAppointmentModal(branchId)} />

        {/* Why Choose Us & Standards of Care */}
        <WhyUsSection />

        {/* Instagram Feed & Community Showcase */}
        <InstagramFeed />

        {/* Client Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Speed Actions (WhatsApp & Emergency) */}
      <FloatingActions />

      {/* Dynamic Appointment Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialBranchId={selectedBranchId}
        initialServiceId={selectedServiceId}
        customNotes={modalNotes}
      />
    </div>
  );
};

export default App;
