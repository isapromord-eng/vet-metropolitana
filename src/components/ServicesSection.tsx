import React, { useState } from 'react';
import { 
  Stethoscope, 
  Ambulance, 
  Activity, 
  Syringe, 
  Sparkles, 
  Home, 
  Microscope, 
  Car, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  HeartHandshake
} from 'lucide-react';
import { SERVICES } from '../data/veterinariaData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'medica' | 'estetica' | 'hospital' | 'preventiva'>('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-brand-500" />;
      case 'Ambulance': return <Ambulance className="w-6 h-6 text-red-500" />;
      case 'Activity': return <Activity className="w-6 h-6 text-brand-600" />;
      case 'Syringe': return <Syringe className="w-6 h-6 text-teal-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-brand-500" />;
      case 'Home': return <Home className="w-6 h-6 text-amber-500" />;
      case 'Microscope': return <Microscope className="w-6 h-6 text-teal-600" />;
      case 'Car': return <Car className="w-6 h-6 text-emerald-600" />;
      default: return <Stethoscope className="w-6 h-6 text-brand-500" />;
    }
  };

  return (
    <section id="servicios" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-600 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 border border-brand-200">
            <HeartHandshake className="w-4 h-4" />
            <span>Servicios de Salud y Bienestar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Cuidado integral para cada etapa de su vida
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Desde chequeos preventivos y peluquería hasta cirugías de alta complejidad y emergencias 24 horas. Tu mascota en las mejores manos de Santo Domingo.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-brand-500 text-white shadow-brand'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todos los Servicios
            </button>
            <button
              onClick={() => setActiveTab('medica')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'medica'
                  ? 'bg-brand-500 text-white shadow-brand'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Consultas & Cirugías
            </button>
            <button
              onClick={() => setActiveTab('hospital')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'hospital'
                  ? 'bg-brand-500 text-white shadow-brand'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🚨 Emergencias & Hotel
            </button>
            <button
              onClick={() => setActiveTab('estetica')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'estetica'
                  ? 'bg-brand-500 text-white shadow-brand'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Grooming & Spa
            </button>
            <button
              onClick={() => setActiveTab('preventiva')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'preventiva'
                  ? 'bg-brand-500 text-white shadow-brand'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Vacunas & Domicilio
            </button>
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                service.id === 'emergencias'
                  ? 'bg-gradient-to-b from-red-50/50 to-white border-red-200 hover:border-red-400 shadow-md hover:shadow-xl'
                  : 'bg-white border-slate-200/80 hover:border-brand-300 glass-card-hover'
              }`}
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${
                      service.badge.includes('24 Horas')
                        ? 'bg-red-100 text-red-700 animate-pulse'
                        : 'bg-brand-50 text-brand-600 border border-brand-200'
                    }`}>
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title & Tagline */}
                <h3 className="text-lg font-bold text-slate-900 leading-snug font-display">
                  {service.title}
                </h3>
                <p className="text-xs text-brand-600 font-semibold mt-1">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  {service.highlights.map((hl, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectService(service.id)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    service.id === 'emergencias'
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-sm'
                      : 'bg-brand-50 hover:bg-brand-500 text-brand-700 hover:text-white border border-brand-200 hover:border-brand-500'
                  }`}
                >
                  <span>Solicitar {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Emergency Callout Card Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-brand-600 via-brand-700 to-slate-900 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h4 className="text-xl font-bold font-display">
                ¿Tu mascota presenta vómitos, apatía o un golpe severo?
              </h4>
              <p className="text-white/80 text-sm mt-1 max-w-xl">
                No esperes. En emergencias cada minuto cuenta. Comunícate de inmediato con el médico veterinario de guardia en Sede Paraíso las 24 horas.
              </p>
            </div>
          </div>
          <a
            href="tel:8093833234"
            className="shrink-0 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-extrabold px-6 py-3.5 rounded-2xl text-sm shadow-md transition-all transform hover:scale-105"
          >
            Línea de Urgencia: 809-383-3234
          </a>
        </div>

      </div>
    </section>
  );
};
