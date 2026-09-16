import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle, Phone, CheckCircle2, Sparkles, Heart } from 'lucide-react';
import { BRANCHES, SERVICES, COMPANY_INFO } from '../data/veterinariaData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBranchId?: string;
  initialServiceId?: string;
  customNotes?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialBranchId,
  initialServiceId,
  customNotes = ''
}) => {
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState<'perro' | 'gato' | 'otro'>('perro');
  const [serviceId, setServiceId] = useState(initialServiceId || 'consultas');
  const [branchId, setBranchId] = useState(initialBranchId || 'independencia');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('manana');
  const [notes, setNotes] = useState(customNotes);

  useEffect(() => {
    if (initialBranchId) setBranchId(initialBranchId);
    if (initialServiceId) setServiceId(initialServiceId);
    if (customNotes) setNotes(customNotes);
  }, [initialBranchId, initialServiceId, customNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const branch = BRANCHES.find(b => b.id === branchId) || BRANCHES[0];
    const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];
    const timeText = preferredTime === 'manana' ? 'Mañana (8:00 AM - 1:00 PM)' : 'Tarde (1:00 PM - 6:00 PM)';

    const message = encodeURIComponent(
      `¡Hola Clínica Veterinaria Metropolitana! 👋 Deseo agendar una cita médica:\n\n` +
      `👤 *Dueño:* ${ownerName || 'No especificado'}\n` +
      `📞 *Teléfono:* ${ownerPhone || 'No especificado'}\n` +
      `🐾 *Mascota:* ${petName ? `${petName} (${petType.toUpperCase()})` : petType.toUpperCase()}\n` +
      `🩺 *Servicio:* ${service.title}\n` +
      `📍 *Sucursal:* ${branch.name}\n` +
      `📅 *Fecha solicitada:* ${preferredDate || 'Lo antes posible'}\n` +
      `⏰ *Horario preferido:* ${timeText}\n` +
      (notes ? `📝 *Observaciones:* ${notes}\n\n` : '\n') +
      `Por favor confirmar disponibilidad. ¡Muchas gracias!`
    );

    const targetNumber = branch.whatsapp || COMPANY_INFO.defaultWhatsapp;
    window.open(`https://wa.me/${targetNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-brand-100 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200">
            <Heart className="w-3.5 h-3.5 fill-brand-500 text-brand-500" />
            <span>Agendamiento Rápido</span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-2 font-display">
            Agenda la Cita de tu Mascota
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Completa los datos y te confirmamos por WhatsApp en minutos.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Owner Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Tu Nombre *
              </label>
              <input
                type="text"
                required
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder="Ej. María Sánchez"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Teléfono / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={ownerPhone}
                onChange={(e) => setOwnerPhone(e.target.value)}
                placeholder="809-000-0000"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
            </div>
          </div>

          {/* Pet Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Nombre de la Mascota *
              </label>
              <input
                type="text"
                required
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                placeholder="Ej. Luna"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Tipo de Mascota
              </label>
              <select
                value={petType}
                onChange={(e) => setPetType(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
              >
                <option value="perro">🐶 Perro</option>
                <option value="gato">🐱 Gato</option>
                <option value="otro">🐰 Otro animal</option>
              </select>
            </div>
          </div>

          {/* Service & Branch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Servicio Requerido
              </label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Sucursal Preferida
              </label>
              <select
                value={branchId}
                onChange={(e) => setBranchId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
              >
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} {b.is24hEmergency ? '(🚨 24h)' : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Fecha Deseada
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Franja Horaria
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
              >
                <option value="manana">Mañana (8:00 AM - 1:00 PM)</option>
                <option value="tarde">Tarde (1:00 PM - 6:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Síntomas u Observaciones (Opcional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej. Chequeo anual, necesita corte de uñas, o signos de dolor..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-all text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Confirmar Cita por WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-2">
              Se enviará un mensaje directo al WhatsApp de la sucursal seleccionada.
            </p>
          </div>

        </form>

      </div>
    </div>
  );
};
