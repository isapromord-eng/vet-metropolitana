import React from 'react';
import { AlertCircle, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/veterinariaData';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-brand-600 to-brand-700 text-white text-xs sm:text-sm py-2 px-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Emergency Status */}
        <div className="flex items-center gap-2 font-medium">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
          </span>
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-yellow-300 shrink-0" />
            <span className="font-bold tracking-wide uppercase">Emergencias 24 Horas:</span>
            <span className="hidden md:inline text-white/90">Personal médico veterinario activo toda la noche en Sede Paraíso</span>
          </div>
        </div>

        {/* Right: Quick Emergency Call & Sede */}
        <div className="flex items-center gap-3 ml-auto">
          <div className="hidden sm:flex items-center gap-1 text-white/80 text-xs">
            <MapPin className="w-3.5 h-3.5 text-yellow-300" />
            <span>Ensanche Paraíso</span>
          </div>
          <a
            href={`tel:${COMPANY_INFO.emergencyPhone.replace(/-/g, '')}`}
            className="inline-flex items-center gap-1.5 bg-white text-red-700 hover:bg-yellow-100 font-bold px-3 py-1 rounded-full text-xs transition-all transform hover:scale-105 shadow-sm"
          >
            <Phone className="w-3 h-3 text-red-600 animate-bounce" />
            <span>Llamar Urgencia: {COMPANY_INFO.emergencyPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
