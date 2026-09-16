import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Stethoscope
} from 'lucide-react';
import { COMPANY_INFO, BRANCHES, SERVICES } from '../data/veterinariaData';

interface HeroProps {
  onOpenAppointmentModal: (branchId?: string, serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  // Quick booking state in hero
  const [petType, setPetType] = useState<'perro' | 'gato' | 'otro'>('perro');
  const [petName, setPetName] = useState('');
  const [selectedService, setSelectedService] = useState('consultas');
  const [selectedBranch, setSelectedBranch] = useState('independencia');
  const [preferredDate, setPreferredDate] = useState('');

  const handleHeroBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const branch = BRANCHES.find(b => b.id === selectedBranch) || BRANCHES[0];
    const service = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

    const petText = petName ? `${petName} (${petType.toUpperCase()})` : `mi ${petType}`;
    const dateText = preferredDate ? ` para la fecha ${preferredDate}` : '';

    const message = encodeURIComponent(
      `¡Hola Clínica Veterinaria Metropolitana! 👋 Deseo agendar una cita para ${petText}.\n\n` +
      `🩺 *Servicio:* ${service.title}\n` +
      `📍 *Sucursal:* ${branch.name}\n` +
      `📅 *Fecha solicitada:* ${dateText || 'Lo antes posible'}\n\n` +
      `¿Tienen disponibilidad en este horario? Muchas gracias.`
    );

    const whatsappNumber = branch.whatsapp || COMPANY_INFO.defaultWhatsapp;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#FFF0F5] via-[#FFF9FB] to-white">
      
      {/* Decorative Glow Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 bg-white/90 border border-brand-200/80 px-4 py-1.5 rounded-full shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-ping" />
              <Heart className="w-4 h-4 text-brand-500 fill-brand-500" />
              <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
                Red de Salud y Amor en Santo Domingo
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-display">
              La mejor atención médica y todo el amor que tu mascota merece.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              En <strong className="text-brand-600 font-bold">Clínica Veterinaria Metropolitana</strong> garantizamos el bienestar y la felicidad de tus peluditos con médicos certificados, emergencias 24/7, tecnología quirúrgica y 4 sucursales estratégicas en la ciudad.
            </p>

            {/* Value Points Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                <span>Emergencias 24 Horas en Sede Paraíso</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                <span>Sucursal Km 8 Independencia (frente a Sirena)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                <span>Quirófano & Laboratorio Clínico in-house</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                <span>Protocolos de atención sin miedo (Fear Free)</span>
              </div>
            </div>

            {/* CTAs & Social Proof */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold px-7 py-4 rounded-2xl shadow-brand hover:shadow-brand-lg transition-all transform hover:-translate-y-0.5 text-base"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Cita Ahora</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.emergencyPhone.replace(/-/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-red-50 text-red-600 border-2 border-red-200 hover:border-red-300 font-bold px-6 py-4 rounded-2xl transition-all text-base shadow-sm"
              >
                <PhoneCall className="w-5 h-5 text-red-500 animate-pulse" />
                <span>Emergencia 24h</span>
              </a>
            </div>

            {/* Mini Trust Bar */}
            <div className="pt-4 border-t border-slate-200/60 flex items-center gap-6">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Cliente" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Cliente" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Cliente" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Cliente" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {'★'.repeat(5)}
                  <span className="text-xs font-bold text-slate-800 ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Más de 25,000 mascotas atendidas con amor
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Booking Widget */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-brand-100 relative overflow-hidden">
              
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-500 via-teal-500 to-brand-600" />
              
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Cita Rápida</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1 font-display">
                    Reserva tu Visita
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-teal-700 bg-teal-50 font-bold px-2.5 py-1 rounded-lg border border-teal-200">
                    Confirmación Inmediata
                  </span>
                </div>
              </div>

              <form onSubmit={handleHeroBooking} className="space-y-4 pt-5">
                
                {/* Pet Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                    1. ¿Qué mascota nos visitará?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPetType('perro')}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-2xl border-2 transition-all ${
                        petType === 'perro'
                          ? 'border-brand-500 bg-brand-50/70 text-brand-700 shadow-sm font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xl">🐶</span>
                      <span className="text-xs mt-1">Perro</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPetType('gato')}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-2xl border-2 transition-all ${
                        petType === 'gato'
                          ? 'border-brand-500 bg-brand-50/70 text-brand-700 shadow-sm font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xl">🐱</span>
                      <span className="text-xs mt-1">Gato</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPetType('otro')}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-2xl border-2 transition-all ${
                        petType === 'otro'
                          ? 'border-brand-500 bg-brand-50/70 text-brand-700 shadow-sm font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xl">🐰</span>
                      <span className="text-xs mt-1">Otro / Exótico</span>
                    </button>
                  </div>
                </div>

                {/* Pet Name (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Nombre de tu mascota
                  </label>
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="Ej. Toby, Luna, Max..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    2. Servicio que necesitas
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Branch Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    3. Sucursal más cercana
                  </label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white transition-colors"
                  >
                    {BRANCHES.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name} {b.is24hEmergency ? '(🚨 24h)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    4. Fecha preferida
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white transition-colors"
                  />
                </div>

                {/* Action Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
                  <span>Agendar por WhatsApp al Instante</span>
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  🔒 Coordinación directa y segura con nuestro personal de recepción.
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
