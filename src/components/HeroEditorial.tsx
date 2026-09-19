import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { BRANCHES, COMPANY_INFO } from '../data/veterinariaData';

interface HeroEditorialProps {
  onOpenAppointmentModal: (branchId?: string, serviceId?: string) => void;
}

export const HeroEditorial: React.FC<HeroEditorialProps> = ({ onOpenAppointmentModal }) => {
  const [selectedBranch, setSelectedBranch] = useState('independencia');

  const handleBooking = () => {
    onOpenAppointmentModal(selectedBranch, undefined);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#030712] text-[#fbe9ee] overflow-hidden flex flex-col justify-center pt-24 pb-12">
      
      {/* Abstract floating ambient lights (Glassmorphism blobs) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full blur-[140px] bg-brand-600/20 mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] bg-teal-600/20 mix-blend-screen pointer-events-none"
      />

      {/* Floating Aesthetic Image (Hidden on mobile for cleaner look) */}
      <motion.img 
        initial={{ opacity: 0, scale: 0.8, y: 100, rotate: 15 }}
        animate={{ opacity: 0.4, scale: 1, y: 0, rotate: 6 }}
        whileHover={{ opacity: 1, rotate: 0, scale: 1.05, zIndex: 50 }}
        transition={{ duration: 1.5, delay: 0.8, type: 'spring' }}
        src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop"
        alt="Estética Veterinaria"
        className="absolute right-[-2%] top-[20%] w-[45vw] max-w-[500px] h-[60vh] object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-700 hidden lg:block shadow-2xl border border-white/5 cursor-crosshair"
      />

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10 w-full">
        {/* Editorial Massive Typography */}
        <div className="flex flex-col items-start gap-2">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-teal-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm ml-1 md:ml-3"
          >
            Clínica Veterinaria Metropolitana
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, type: 'spring', damping: 20 }}
            className="text-[14vw] sm:text-[10vw] lg:text-[9vw] leading-[0.85] font-black tracking-tighter text-white"
          >
            Medicina.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 italic font-serif font-light pr-8">
              Con empatía.
            </span>
          </motion.h1>
        </div>

        {/* Asymmetrical Natural Language Booking */}
        <motion.div 
           initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
           animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
           transition={{ duration: 1, delay: 1 }}
           className="mt-16 md:mt-24 max-w-4xl border-l-[3px] border-brand-500 pl-6 md:pl-10"
        >
          <div className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug md:leading-relaxed text-slate-300">
            Hola. Deseo coordinar una visita para mi mascota en la sede de 
            <div className="inline-block relative mx-2 md:mx-4">
              <select 
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="bg-transparent border-b-2 border-brand-400 text-white font-semibold focus:outline-none focus:border-teal-400 text-center appearance-none cursor-pointer pb-1 pr-6"
              >
                {BRANCHES.map(b => (
                  <option key={b.id} value={b.id} className="bg-slate-900 text-base">
                    {b.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-0 bottom-3 w-3 h-3 border-r-2 border-b-2 border-brand-400 transform rotate-45 pointer-events-none" />
            </div>
            lo antes posible.
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 md:gap-6">
            <button 
              onClick={handleBooking}
              className="group relative px-8 py-5 bg-white text-black font-bold rounded-full overflow-hidden flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl shadow-white/5"
            >
              <span className="relative z-10 text-sm md:text-base tracking-wide uppercase">Comenzar</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <a 
              href={`tel:${COMPANY_INFO.emergencyPhone}`} 
              className="px-8 py-5 border border-white/20 text-white rounded-full flex items-center justify-center gap-3 hover:bg-white/5 transition-colors text-sm md:text-base tracking-wide"
            >
              <PhoneCall className="w-5 h-5 text-teal-400" />
              Emergencia 24/7
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
