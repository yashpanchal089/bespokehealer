import React, { useState } from 'react';
import { X, Sparkles, Clock, Video, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../data/config';

interface BookSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookSessionModal: React.FC<BookSessionModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [service, setService] = useState<string>(
    preselectedService || 'Tarot Card Reading'
  );
  const [mode, setMode] = useState<'Online Video' | 'Studio In-Person'>('Online Video');
  const [timePreference, setTimePreference] = useState<string>('Afternoon (2 PM - 5 PM)');
  const [clientName, setClientName] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi ${siteConfig.founderName} 👋\n\nI would love to book a 60-Minute Personal Consultation:\n• Name: ${clientName || 'Seeker'}\n• Service: ${service}\n• Session Mode: ${mode}\n• Preferred Time: ${timePreference}\n• Fee: ₹2,000 (60 Mins)\n\nPlease share your earliest available dates!`;
    window.open(getWhatsAppUrl(message), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brandText/40 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-softCream rounded-3xl border border-secondaryPurple/40 shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-lightLavender transition-colors text-brandText"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 mb-6">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-mutedPurple">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personal Session Booking</span>
          </div>
          <h3 className="font-editorial text-3xl sm:text-4xl text-brandText font-normal">
            Schedule Appointment with Dr. Srushti Garg
          </h3>
          <p className="text-xs text-brandLightText font-light">
            Dedicated 60-minute space for clarity, energy realignment & grounded truth.
          </p>
        </div>

        {/* Pricing & Duration Guarantee Pill */}
        <div className="p-3.5 rounded-2xl bg-warmBeige border border-secondaryPurple/30 flex items-center justify-between text-xs mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-mutedPurple" />
            <span className="font-medium text-brandText">60 Minutes</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-800 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Transparent Fee: ₹2,000</span>
          </div>
        </div>

        {/* Booking Preferences Form */}
        <form onSubmit={handleSubmitWhatsApp} className="space-y-5">
          
          {/* Your Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brandText mb-2">
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Aarti Sharma"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-secondaryPurple/40 text-xs text-brandText placeholder-brandLightText/60 focus:outline-none focus:ring-2 focus:ring-mutedPurple/40"
            />
          </div>

          {/* Select Service */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brandText mb-2">
              Select Service
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {['Tarot Card Reading', 'Energy Healing', 'Crystals'].map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setService(s)}
                  className={`p-3 rounded-2xl text-xs font-medium border text-center transition-all ${
                    service === s
                      ? 'bg-mutedPurple text-white border-mutedPurple shadow-sm'
                      : 'bg-white/80 text-brandText border-secondaryPurple/30 hover:bg-lightLavender/50'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Select Mode */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brandText mb-2">
              Consultation Mode
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setMode('Online Video')}
                className={`p-3 rounded-2xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${
                  mode === 'Online Video'
                    ? 'bg-mutedPurple text-white border-mutedPurple shadow-sm'
                    : 'bg-white/80 text-brandText border-secondaryPurple/30 hover:bg-lightLavender/50'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Online Video</span>
              </button>

              <button
                type="button"
                onClick={() => setMode('Studio In-Person')}
                className={`p-3 rounded-2xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${
                  mode === 'Studio In-Person'
                    ? 'bg-mutedPurple text-white border-mutedPurple shadow-sm'
                    : 'bg-white/80 text-brandText border-secondaryPurple/30 hover:bg-lightLavender/50'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Studio Consultation</span>
              </button>
            </div>
          </div>

          {/* Select Preferred Time */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-brandText mb-2">
              Preferred Time of Day
            </label>
            <select
              value={timePreference}
              onChange={(e) => setTimePreference(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-secondaryPurple/40 text-xs text-brandText focus:outline-none focus:ring-2 focus:ring-mutedPurple/40"
            >
              <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
              <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
              <option value="Evening (6:00 PM - 9:00 PM)">Evening (6:00 PM - 9:00 PM)</option>
            </select>
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Confirm & Send on WhatsApp</span>
            </button>
            <p className="text-[10px] text-center text-brandLightText font-light mt-2.5">
              Directly sends your preferred slot to Dr. Srushti's desk for calendar confirmation.
            </p>
          </div>
        </form>

      </div>
    </div>
  );
};
