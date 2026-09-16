import React, { useState } from 'react';
import { MessageCircle, Phone, X, AlertTriangle } from 'lucide-react';
import { BRANCHES, COMPANY_INFO } from '../data/veterinariaData';

export const FloatingActions: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      {/* Floating Action Button Group (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        
        {/* WhatsApp Branch Selector Flyout */}
        {showOptions && (
          <div className="bg-white rounded-3xl p-4 shadow-2xl border border-brand-100 w-72 mb-2 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>¿A qué sucursal deseas escribir?</span>
              </div>
              <button
                onClick={() => setShowOptions(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1.5 pt-2">
              {BRANCHES.map((b) => (
                <a
                  key={b.id}
                  href={`https://wa.me/${b.whatsapp}?text=${encodeURIComponent(`¡Hola VetMetro ${b.shortName}! 👋 Deseo consultar sobre atención médica para mi mascota.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-emerald-50 text-xs font-bold text-slate-700 hover:text-emerald-700 transition-colors"
                >
                  <div>
                    <span>{b.shortName}</span>
                    <span className="block text-[10px] text-slate-400 font-normal line-clamp-1">{b.address.split(',')[0]}</span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                    Chat
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* WhatsApp Main Bubble */}
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="relative group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95"
          aria-label="Abrir chat de WhatsApp"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
          </span>
          <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-1">
            WhatsApp Citas
          </span>
        </button>

      </div>
    </>
  );
};
