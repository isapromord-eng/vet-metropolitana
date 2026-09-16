import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, CheckCircle, AlertCircle } from 'lucide-react';
import { BRANCHES } from '../data/veterinariaData';

interface BranchesSectionProps {
  onSelectBranch: (branchId: string) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ onSelectBranch }) => {
  const [activeBranchId, setActiveBranchId] = useState<string>('independencia');

  const selectedBranch = BRANCHES.find(b => b.id === activeBranchId) || BRANCHES[0];

  return (
    <section id="sucursales" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-600 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 border border-brand-200">
            <MapPin className="w-4 h-4" />
            <span>Nuestras Ubicaciones en Santo Domingo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Siempre cerca de ti y de tu mascota
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Contamos con 4 centros veterinarios modernos en Santo Domingo. Encuentra tu sucursal más cercana, consulta horarios y comunícate directamente.
          </p>

          {/* Branch Switcher Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8 max-w-4xl mx-auto">
            {BRANCHES.map((b) => (
              <button
                key={b.id}
                onClick={() => setActiveBranchId(b.id)}
                className={`p-3 rounded-2xl text-left border transition-all ${
                  activeBranchId === b.id
                    ? 'bg-white border-brand-500 shadow-md ring-2 ring-brand-500/20'
                    : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${activeBranchId === b.id ? 'text-brand-600' : 'text-slate-800'}`}>
                    {b.shortName}
                  </span>
                  {b.is24hEmergency && (
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  )}
                </div>
                <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  {b.address.split(',')[0]}
                </div>
              </button>
            ))}
          </div>

        </div>

        {/* Selected Branch Detail Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Info & Contacts (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-brand-50 text-brand-600 font-bold text-xs px-3 py-1 rounded-full border border-brand-200">
                  {selectedBranch.badge || 'Sede Veterinaria'}
                </span>
                {selectedBranch.is24hEmergency && (
                  <span className="bg-red-100 text-red-700 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Emergencias 24 Horas
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                {selectedBranch.name}
              </h3>

              {/* Reference */}
              <p className="text-brand-600 font-semibold text-sm mt-1">
                📍 {selectedBranch.reference}
              </p>

              {/* Address */}
              <p className="text-slate-600 text-sm mt-2">
                {selectedBranch.address}
              </p>
            </div>

            {/* Schedule Block */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold text-slate-800 text-xs uppercase tracking-wider text-teal-700">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Horarios de Atención:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{selectedBranch.hoursWeekday}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{selectedBranch.hoursSaturday}</span>
                </div>
                {selectedBranch.hoursSunday && (
                  <div className="sm:col-span-2 flex items-center gap-1.5 text-slate-500">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{selectedBranch.hoursSunday}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions for this branch */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${selectedBranch.whatsapp}?text=${encodeURIComponent(`¡Hola VetMetro ${selectedBranch.shortName}! 👋 Quisiera información para una cita médica para mi mascota.`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp: {selectedBranch.phone.split('/')[0]}</span>
              </a>

              <a
                href={selectedBranch.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-brand-500" />
                <span>Cómo Llegar (GPS)</span>
              </a>

              <button
                onClick={() => onSelectBranch(selectedBranch.id)}
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-brand transition-all"
              >
                <span>Agendar en esta Sede</span>
              </button>
            </div>

          </div>

          {/* Right: Branch Photo / Image (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-200">
            <img
              src={selectedBranch.image}
              alt={selectedBranch.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
              <span className="text-xs font-bold bg-brand-500 px-2 py-0.5 rounded">
                {selectedBranch.shortName}
              </span>
              <p className="text-xs text-white/90 mt-1">{selectedBranch.reference}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
