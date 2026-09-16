import React from 'react';
import { Star, Quote, Heart, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/veterinariaData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-600 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 border border-brand-200">
            <Heart className="w-4 h-4 fill-brand-500 text-brand-500" />
            <span>Familias Felices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Lo que dicen quienes nos confían a sus peluditos
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            La confianza se gana con hechos, diagnósticos acertados y cariño incondicional en cada consulta.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-brand-200 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Pet */}
              <div className="pt-5 mt-4 border-t border-slate-200/60 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.ownerName}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {t.ownerName}
                  </h4>
                  <p className="text-[11px] text-brand-600 font-medium">
                    Mamá/Papá de {t.petName} ({t.petBreed})
                  </p>
                  <span className="text-[10px] text-slate-400 block">
                    {t.branchVisited}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-12 bg-brand-50/60 border border-brand-100 rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-slate-900 font-display">4.9</span>
            <div className="flex text-amber-400">
              {'★'.repeat(5)}
            </div>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 font-medium">
            Promedio de satisfacción en Google Maps y redes sociales en Santo Domingo
          </div>
        </div>

      </div>
    </section>
  );
};
