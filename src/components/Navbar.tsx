import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, MapPin, Heart, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, BRANCHES } from '../data/veterinariaData';

interface NavbarProps {
  onOpenAppointmentModal: (branchId?: string, serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointmentModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass-nav shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="VetMetro Clínica Veterinaria Metropolitana"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if network image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-display">
                  Vet<span className="text-brand-500">Metro</span>
                </span>
                <span className="hidden sm:inline-block bg-brand-50 text-brand-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-brand-200">
                  RD
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                Clínica Veterinaria Metropolitana
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-semibold text-slate-700 hover:text-brand-500 transition-colors">
              Servicios
            </a>

            {/* Sucursales Dropdown */}
            <div className="relative" onMouseLeave={() => setBranchesOpen(false)}>
              <button
                onClick={() => setBranchesOpen(!branchesOpen)}
                onMouseEnter={() => setBranchesOpen(true)}
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-brand-500 transition-colors py-2"
              >
                <span>4 Sucursales</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-500" />
              </button>

              {branchesOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-brand-100 p-2.5 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                    Centros en Santo Domingo
                  </div>
                  {BRANCHES.map((branch) => (
                    <a
                      key={branch.id}
                      href="#sucursales"
                      onClick={() => setBranchesOpen(false)}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-brand-50/70 transition-colors group"
                    >
                      <MapPin className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-800 group-hover:text-brand-600">
                          {branch.name}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {branch.reference}
                        </div>
                        {branch.is24hEmergency && (
                          <span className="inline-block mt-1 bg-red-100 text-red-700 text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                            🚨 24 Horas
                          </span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#por-que-vetmetro" className="text-sm font-semibold text-slate-700 hover:text-brand-500 transition-colors">
              Por Qué Elegirnos
            </a>
            <a href="#instagram" className="text-sm font-semibold text-slate-700 hover:text-brand-500 transition-colors">
              Comunidad @vetmetropolitanard
            </a>
            <a href="#testimonios" className="text-sm font-semibold text-slate-700 hover:text-brand-500 transition-colors">
              Testimonios
            </a>
            <a href="#faq" className="text-sm font-semibold text-slate-700 hover:text-brand-500 transition-colors">
              Preguntas
            </a>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Central Call */}
            <a
              href={`tel:${COMPANY_INFO.centralPhone.replace(/-/g, '')}`}
              className="flex items-center gap-2 text-slate-700 hover:text-brand-500 px-3 py-2 text-xs sm:text-sm font-semibold transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-400 font-medium">Central Telefónica</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm">{COMPANY_INFO.centralPhone}</span>
              </div>
            </a>

            {/* Agendar Cita CTA */}
            <button
              onClick={() => onOpenAppointmentModal()}
              className="relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-brand hover:shadow-brand-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Cita</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="bg-brand-500 text-white p-2 rounded-full shadow-brand"
              aria-label="Agendar Cita Rápida"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-brand-500 hover:bg-brand-50 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-xl border-b border-brand-100 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-2">
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-500"
            >
              Servicios Veterinarios
            </a>
            <a
              href="#sucursales"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-500"
            >
              Nuestras 4 Sucursales
            </a>
            <a
              href="#por-que-vetmetro"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-500"
            >
              Por Qué Elegirnos
            </a>
            <a
              href="#instagram"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-500"
            >
              Instagram @vetmetropolitanard
            </a>
            <a
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-500"
            >
              Testimonios de Familias
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-500"
            >
              Preguntas Frecuentes
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.centralPhone.replace(/-/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-teal-50 text-teal-800 font-bold text-sm border border-teal-200"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Llamar Central: {COMPANY_INFO.centralPhone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold py-3 rounded-xl shadow-brand text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Cita en Línea</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
