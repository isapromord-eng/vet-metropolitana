import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Dog,
  Cat,
  Rabbit,
} from 'lucide-react';
import { COMPANY_INFO, BRANCHES, SERVICES } from '../data/veterinariaData';
import { getGsap } from '../lib/gsap';

interface HeroWowProps {
  onOpenAppointmentModal: (branchId?: string, serviceId?: string) => void;
}

const HERO_VIDEO =
  'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18 },
  },
};

export const HeroWow: React.FC<HeroWowProps> = ({ onOpenAppointmentModal }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [petType, setPetType] = useState<'perro' | 'gato' | 'otro'>('perro');
  const [petName, setPetName] = useState('');
  const [selectedService, setSelectedService] = useState('consultas');
  const [selectedBranch, setSelectedBranch] = useState('independencia');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.15]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  useEffect(() => {
    const { gsap } = getGsap();
    const video = videoRef.current;
    if (!video || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(video, {
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleHeroBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const branch = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];
    const service = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];
    const petText = petName ? `${petName} (${petType.toUpperCase()})` : `mi ${petType}`;

    const message = encodeURIComponent(
      `¡Hola Clínica Veterinaria Metropolitana! Deseo agendar una cita para ${petText}.\n\n` +
        `Servicio: ${service.title}\n` +
        `Sucursal: ${branch.name}\n\n` +
        `Por favor confirmar disponibilidad. ¡Gracias!`
    );
    window.open(`https://wa.me/${branch.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const petIcon = (type: string) => {
    if (type === 'perro') return <Dog className="w-5 h-5" />;
    if (type === 'gato') return <Cat className="w-5 h-5" />;
    return <Rabbit className="w-5 h-5" />;
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-[100svh] flex items-center bg-[#0a0a0c]"
    >
      {/* Full-bleed video plane */}
      <motion.div style={{ scale: videoScale }} className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover"
          src={HERO_VIDEO}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#0a0a0c]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/50 via-transparent to-teal-950/30" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-28 lg:py-32 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            className="lg:col-span-7 space-y-7"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={itemVariants}
              className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-white/70"
            >
              Clínica Veterinaria Metropolitana
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.75rem,7vw,5.5rem)] font-semibold text-white tracking-[-0.04em] leading-[0.95] font-display"
            >
              Cuidado clínico
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-white to-teal-300">
                con precisión.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed font-light"
            >
              Cuatro sedes en Santo Domingo. Diagnóstico exacto, protocolos Fear Free y guardia 24h cuando más lo necesitas.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() =>
                  document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex justify-center items-center gap-2 bg-white text-slate-900 font-semibold py-3.5 px-7 rounded-full transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Agendar cita
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${COMPANY_INFO.emergencyPhone}`}
                className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold py-3.5 px-7 rounded-full backdrop-blur-md border border-white/15 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                Emergencias 24h
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            id="booking-widget"
          >
            <div className="rounded-[1.75rem] p-6 sm:p-7 bg-white/[0.08] backdrop-blur-2xl border border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]">
              <h2 className="text-xl font-semibold text-white tracking-tight font-display">
                Reserva rápida
              </h2>
              <p className="text-sm text-white/55 mt-1 mb-5">
                Te conectamos por WhatsApp con la sucursal.
              </p>

              <form onSubmit={handleHeroBooking} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-2">
                    Mascota
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['perro', 'gato', 'otro'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPetType(type)}
                        className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border transition-all ${
                          petType === type
                            ? 'border-white/40 bg-white/15 text-white'
                            : 'border-white/10 bg-white/[0.04] text-white/55 hover:bg-white/[0.08]'
                        }`}
                      >
                        {petIcon(type)}
                        <span className="text-xs capitalize">{type}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-1.5">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="Opcional"
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.06] text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/40"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-1.5">
                    Servicio
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.06] text-white/90 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/40 [&>option]:bg-slate-900"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-1.5">
                    Sucursal
                  </label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.06] text-white/90 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400/40 [&>option]:bg-slate-900"
                  >
                    {BRANCHES.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-teal-500 text-white font-semibold py-3.5 px-6 rounded-2xl mt-2 shadow-lg shadow-brand-500/25"
                >
                  <MessageCircle className="w-5 h-5" />
                  Continuar por WhatsApp
                </motion.button>

                <button
                  type="button"
                  onClick={() => onOpenAppointmentModal(selectedBranch, selectedService)}
                  className="w-full text-center text-sm text-white/50 hover:text-white/80 transition-colors pt-1"
                >
                  O abrir formulario completo
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.25em] uppercase">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
        />
      </div>
    </section>
  );
};
