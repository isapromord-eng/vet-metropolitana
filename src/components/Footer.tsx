import React from 'react';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  ArrowUp,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO, BRANCHES } from '../data/veterinariaData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="VetMetro Logo"
                className="h-12 w-auto object-contain brightness-125"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <span className="text-xl font-extrabold text-white font-display">
                  Vet<span className="text-brand-500">Metro</span> RD
                </span>
                <p className="text-xs text-slate-400">
                  Clínica Veterinaria Metropolitana
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Somos una red de salud y amor dedicada a garantizar la longevidad, vitalidad y felicidad de perros y gatos en Santo Domingo con medicina compasiva y de alta calidad.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500 text-slate-300 hover:text-brand-400 flex items-center justify-center transition-all"
                aria-label="Instagram @vetmetropolitanard"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500 text-slate-300 hover:text-brand-400 flex items-center justify-center transition-all"
                aria-label="Facebook VetMetropolitanaRD"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <div className="text-xs text-slate-400 pl-2">
                @{COMPANY_INFO.instagram}
              </div>
            </div>
          </div>

          {/* Quick Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-display">
              Contacto Central
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-200 font-bold">Central Telefónica:</span>
                  <a href={`tel:${COMPANY_INFO.centralPhone.replace(/-/g, '')}`} className="hover:text-brand-400 transition-colors">
                    {COMPANY_INFO.centralPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-red-400 font-bold">Emergencias 24/7:</span>
                  <a href={`tel:${COMPANY_INFO.emergencyPhone.replace(/-/g, '')}`} className="hover:text-red-300 transition-colors">
                    {COMPANY_INFO.emergencyPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-slate-200 font-bold">Correo Electrónico:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-teal-300 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Branches (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase font-display">
              Nuestras 4 Sucursales
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {BRANCHES.map((b) => (
                <div key={b.id} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="font-bold text-slate-200 flex items-center justify-between">
                    <span>{b.shortName}</span>
                    {b.is24hEmergency && (
                      <span className="text-[9px] bg-red-900/60 text-red-300 px-1.5 py-0.5 rounded font-bold">
                        24h
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-[11px] mt-1 line-clamp-1">
                    {b.address.split(',')[0]}
                  </p>
                  <p className="text-brand-400 text-[10px] mt-0.5">
                    {b.reference}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Clínica Veterinaria Metropolitana (VetMetro RD). Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Subir al inicio</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
