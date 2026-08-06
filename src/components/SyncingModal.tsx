import React, { useState, useEffect } from 'react';
import { RefreshCw, Check } from 'lucide-react';

interface SyncingModalProps {
  isOpen: boolean;
}

const REDIRECT_URL = 'https://saveapp.store/cl/i/5nlp41';

export const SyncingModal: React.FC<SyncingModalProps> = ({
  isOpen,
}) => {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setActiveStep(1);
      return;
    }

    // Smooth step progress simulator matching exact sequence
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Redirect user immediately to target link upon completion
          window.location.href = REDIRECT_URL;
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 3;
        
        // Update active step based on progress thresholds
        if (next >= 75) {
          setActiveStep(3);
        } else if (next >= 35) {
          setActiveStep(2);
        } else {
          setActiveStep(1);
        }

        return next > 100 ? 100 : next;
      });
    }, 180);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0b0e17] border border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,0,127,0.25)] flex flex-col items-center overflow-hidden">
        {/* Top Sync Icon Container */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full border-2 border-[#ff007f] shadow-[0_0_25px_#ff007f] flex items-center justify-center bg-[#0b0e17] avatar-glow">
            <RefreshCw className="w-8 h-8 text-[#ff007f] animate-spin" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-mono-custom tracking-[0.25em] font-extrabold text-white text-base sm:text-lg text-center uppercase mb-6 drop-shadow">
          S Y N C I N G &nbsp; F I L E S . . .
        </h3>

        {/* Steps Container Card */}
        <div className="w-full rounded-2xl border border-slate-800/90 bg-slate-900/40 p-4 sm:p-5 space-y-4 mb-6">
          {/* Step 1 */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#ff007f] text-white flex items-center justify-center shrink-0 shadow-md">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span className="text-[11px] sm:text-xs font-extrabold tracking-wide text-white uppercase font-sans-custom">
              ESTABLISHING SECURE TLS MIRROR ALLOCATION...
            </span>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-3">
            {activeStep >= 2 ? (
              <div className="w-6 h-6 rounded-full bg-[#ff007f] text-white flex items-center justify-center shrink-0 shadow-md">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full border-2 border-slate-700 text-slate-500 flex items-center justify-center shrink-0 text-xs font-bold">
                2
              </div>
            )}
            <span
              className={`text-[11px] sm:text-xs font-extrabold tracking-wide uppercase font-sans-custom ${
                activeStep >= 2 ? 'text-white' : 'text-slate-500'
              }`}
            >
              CACHING MEDIA PACKAGES AND SPECIALS...
            </span>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-3">
            {activeStep === 3 ? (
              <div className="w-6 h-6 rounded-full border-2 border-[#ff007f] text-[#ff007f] bg-[#ff007f]/10 flex items-center justify-center shrink-0 text-xs font-bold animate-pulse shadow-[0_0_10px_#ff007f]">
                3
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full border-2 border-slate-700 text-slate-500 flex items-center justify-center shrink-0 text-xs font-bold">
                3
              </div>
            )}
            <span
              className={`text-[11px] sm:text-xs font-extrabold tracking-wide uppercase font-sans-custom ${
                activeStep === 3 ? 'text-[#ff007f]' : 'text-slate-500'
              }`}
            >
              GENERATING SECURE ROUTING TUNNEL...
            </span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-950 rounded-full h-3 border border-slate-800/90 overflow-hidden mb-4 p-0.5">
          <div
            className="bg-gradient-to-r from-[#ff007f] via-[#ff3b00] to-[#ff6b00] h-full rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,0,127,0.7)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Footer Redirect Status */}
        <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#ff007f] uppercase font-sans-custom text-center">
          <RefreshCw className="w-3.5 h-3.5 animate-spin shrink-0 text-[#ff007f]" />
          <span>REDIRECTING TO DOWNLOAD MIRROR NODE SECURELY ({progress}%)...</span>
        </div>
      </div>
    </div>
  );
};
