import React from 'react';
import { Heart, ShieldCheck, Award, Clock, Users, Microscope, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/veterinariaData';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      icon: <Heart className="w-6 h-6 text-brand-500" />,
      title: 'Vocación & Amor Genuino',
      description: 'No somos solo una clínica, somos una familia comprometida con tratar a tu mascota con la misma ternura y respeto que le das en tu hogar.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
      title: 'Protocolos Fear Free (Sin Miedo)',
      description: 'Espacios y técnicas adaptadas para minimizar el estrés felino y canino. Menos ansiedad, diagnósticos más certeros y visitas felices.'
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: 'Tranquilidad 24/7 los 365 días',
      description: 'Las emergencias no avisan. Saber que cuentas con médicos de guardia toda la noche en Santo Domingo te da la mayor paz mental.'
    },
    {
      icon: <Microscope className="w-6 h-6 text-brand-600" />,
      title: 'Tecnología Quirúrgica & Diagnóstica',
      description: 'Quirófano moderno con anestesia inhalatoria, analizadores sanguíneos automatizados y monitores de última generación in-house.'
    }
  ];

  return (
    <section id="por-que-vetmetro" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage & Experience (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Main Photo */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80"
                  alt="Veterinaria examinando un perro feliz en VetMetro"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-brand-100 max-w-[220px]">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-lg">
                    +15
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Años de Confianza</div>
                    <div className="text-[11px] text-slate-500">en Santo Domingo</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-teal-700 font-bold bg-teal-50 px-2 py-1 rounded-lg">
                  <Award className="w-3.5 h-3.5" />
                  <span>Equipo Certificado</span>
                </div>
              </div>

              {/* Secondary Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-800">Guardia 24 Horas</span>
                  <span className="block text-[10px] text-slate-500">Sede Paraíso</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Text & 4 Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-600 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 border border-brand-200">
                <Award className="w-4 h-4" />
                <span>¿Por Qué Elegir VetMetro?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Calidad médica y devoción por los que no tienen voz
              </h2>
              <p className="text-slate-600 text-base mt-4 leading-relaxed">
                Sabemos que tu perro o tu gato no es simplemente una mascota; es un miembro amado de tu familia. Por eso, en cada una de nuestras sucursales fusionamos ciencia veterinaria avanzada con empatía profunda.
              </p>
            </div>

            {/* Grid of 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((p, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3">
                    {p.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Summary Stats Bar */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {COMPANY_INFO.stats.map((stat, i) => (
                <div key={i} className="p-2">
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-600 font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
