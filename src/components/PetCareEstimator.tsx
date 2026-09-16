import React, { useState } from 'react';
import { Sparkles, Heart, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { BRANCHES, COMPANY_INFO } from '../data/veterinariaData';

interface PetCareEstimatorProps {
  onOpenBookingWithPlan: (planDetails: string) => void;
}

export const PetCareEstimator: React.FC<PetCareEstimatorProps> = ({ onOpenBookingWithPlan }) => {
  const [species, setSpecies] = useState<'perro' | 'gato'>('perro');
  const [lifeStage, setLifeStage] = useState<'cachorro' | 'adulto' | 'senior'>('adulto');
  const [lifestyle, setLifestyle] = useState<'casa' | 'patio' | 'viajero'>('casa');
  const [needsSpa, setNeedsSpa] = useState(true);

  // Recommendations calculation
  const getPlanDetails = () => {
    let vaccines = '';
    let checkupFrequency = '';
    let preventiveMed = '';

    if (species === 'perro') {
      if (lifeStage === 'cachorro') {
        vaccines = 'Esquema de cachorro (Parvo, Séxtuple, Rabia, Giardia)';
        checkupFrequency = 'Chequeo cada 3 a 4 semanas durante la pauta inicial';
        preventiveMed = 'Desparasitación quincenal y antipulgas suave';
      } else if (lifeStage === 'adulto') {
        vaccines = 'Refuerzo anual Polivalente, Rabia y Tos de las Perreras';
        checkupFrequency = 'Chequeo preventivo cada 6 a 12 meses';
        preventiveMed = 'Antipulgas/garrapatas mensual y protección contra parásitos';
      } else {
        vaccines = 'Vacunación adaptada con titulación de anticuerpos';
        checkupFrequency = 'Perfil geriátrico cada 6 meses (sangre + ecografía)';
        preventiveMed = 'Condroprotectores articulares y chequeo cardiovascular';
      }
    } else {
      // Gato
      if (lifeStage === 'cachorro') {
        vaccines = 'Triple felina (Panleucopenia, Calicivirus, Rinotraqueítis) + Rabia';
        checkupFrequency = 'Chequeo inicial a los 2, 3 y 4 meses';
        preventiveMed = 'Desparasitación interna y prueba de Leucemia/SIDA Felino';
      } else if (lifeStage === 'adulto') {
        vaccines = 'Refuerzo anual Triple Felina y control de bolas de pelo';
        checkupFrequency = 'Chequeo clínico anual y revisión dental';
        preventiveMed = 'Pipeta antiparasitaria trimestral según salidas';
      } else {
        vaccines = 'Vacunación controlada y monitoreo renal';
        checkupFrequency = 'Perfil renal y presión arterial cada 6 meses';
        preventiveMed = 'Dieta húmeda protectora y salud articular';
      }
    }

    return {
      title: `Plan Personalizado VetMetro: ${species === 'perro' ? 'Canino' : 'Felino'} ${lifeStage.toUpperCase()}`,
      vaccines,
      checkupFrequency,
      preventiveMed,
      spaRecommendation: needsSpa 
        ? (species === 'perro' ? 'Baño hidratante quincenal + corte higiénico' : 'Cepillado deslanado anti-nudos mensual') 
        : 'Cuidado higiénico básico en casa'
    };
  };

  const plan = getPlanDetails();

  const handleBookPlan = () => {
    const details = `${plan.title}. Incluye: ${plan.vaccines} y ${plan.checkupFrequency}`;
    onOpenBookingWithPlan(details);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-brand-50/40 to-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 border border-teal-200">
            <Sparkles className="w-4 h-4 text-teal-500" />
            <span>Herramienta Interactiva</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-display">
            Calcula el Plan de Salud Ideal para tu Mascota
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Cada mascota es única. Responde 4 preguntas rápidas y conoce el protocolo preventivo recomendado por nuestros veterinarios en Santo Domingo.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-brand-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Species */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                1. ¿Qué especie es tu compañero?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSpecies('perro')}
                  className={`p-3.5 rounded-2xl border-2 flex items-center justify-center gap-2 font-bold text-sm transition-all ${
                    species === 'perro'
                      ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xl">🐕</span>
                  <span>Perro</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSpecies('gato')}
                  className={`p-3.5 rounded-2xl border-2 flex items-center justify-center gap-2 font-bold text-sm transition-all ${
                    species === 'gato'
                      ? 'border-brand-500 bg-brand-50 text-brand-700 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xl">🐈</span>
                  <span>Gato</span>
                </button>
              </div>
            </div>

            {/* 2. Life Stage */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                2. Etapa de vida
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setLifeStage('cachorro')}
                  className={`py-2.5 px-2 rounded-xl border text-xs font-bold transition-all text-center ${
                    lifeStage === 'cachorro'
                      ? 'border-brand-500 bg-brand-500 text-white'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Cachorro / Gatito
                  <span className="block text-[10px] font-normal opacity-80">(0-1 año)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLifeStage('adulto')}
                  className={`py-2.5 px-2 rounded-xl border text-xs font-bold transition-all text-center ${
                    lifeStage === 'adulto'
                      ? 'border-brand-500 bg-brand-500 text-white'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Adulto Joven
                  <span className="block text-[10px] font-normal opacity-80">(1-7 años)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLifeStage('senior')}
                  className={`py-2.5 px-2 rounded-xl border text-xs font-bold transition-all text-center ${
                    lifeStage === 'senior'
                      ? 'border-brand-500 bg-brand-500 text-white'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Senior / Consentido
                  <span className="block text-[10px] font-normal opacity-80">(7+ años)</span>
                </button>
              </div>
            </div>

            {/* 3. Lifestyle */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                3. Entorno habitual
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setLifestyle('casa')}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold ${
                    lifestyle === 'casa'
                      ? 'border-teal-500 bg-teal-50 text-teal-800'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  Apartamento
                </button>
                <button
                  type="button"
                  onClick={() => setLifestyle('patio')}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold ${
                    lifestyle === 'patio'
                      ? 'border-teal-500 bg-teal-50 text-teal-800'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  Casa con Jardín
                </button>
                <button
                  type="button"
                  onClick={() => setLifestyle('viajero')}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold ${
                    lifestyle === 'viajero'
                      ? 'border-teal-500 bg-teal-50 text-teal-800'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  Sale a Parques
                </button>
              </div>
            </div>

            {/* 4. Grooming Preference */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-semibold text-slate-700">
                ¿Deseas incluir servicio de Peluquería & Baño Spa?
              </span>
              <button
                type="button"
                onClick={() => setNeedsSpa(!needsSpa)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                  needsSpa ? 'bg-brand-500' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    needsSpa ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

          </div>

          {/* Results Summary Card (Right 6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-brand-50/70 via-white to-teal-50/60 rounded-3xl p-6 sm:p-8 border border-brand-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-xs">
                ✓
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                Protocolo Sugerido por VetMetro
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 font-display">
              {plan.title}
            </h3>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">Inmunización:</span> {plan.vaccines}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">Frecuencia médica:</span> {plan.checkupFrequency}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">Protección antiparasitaria:</span> {plan.preventiveMed}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">Estética & Piel:</span> {plan.spaRecommendation}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-100">
              <button
                onClick={handleBookPlan}
                className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-6 rounded-2xl shadow-brand hover:shadow-brand-lg transition-all text-sm"
              >
                <span>Agendar Este Plan Preventivo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-2">
                Sin compromiso inicial. Consulta evaluativa en cualquiera de nuestras 4 sucursales.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
