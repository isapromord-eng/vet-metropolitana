import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/veterinariaData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-600 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 border border-brand-200">
            <HelpCircle className="w-4 h-4" />
            <span>Respuestas Claras</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Todo lo que necesitas saber antes de traer a tu mascota a VetMetro.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-brand-600 transition-colors gap-4"
                >
                  <span className="text-sm sm:text-base font-display">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-gradient-to-r from-brand-50 to-teal-50 border border-brand-100 rounded-3xl p-6 sm:p-8 text-center">
          <h3 className="text-lg font-bold text-slate-900 font-display">
            ¿Tienes alguna otra duda sobre la salud de tu mascota?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-md mx-auto">
            Nuestro equipo médico y de atención al cliente está disponible para orientarte sin costo por WhatsApp.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.defaultWhatsapp}?text=${encodeURIComponent('¡Hola! Tengo una consulta sobre los servicios de Clínica Veterinaria Metropolitana.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Preguntar por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
