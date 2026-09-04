import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function DisclaimerBanner({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-1.5 text-xs text-amber-800 flex items-center justify-center gap-2 font-medium">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
        <span>
          <strong>BhuNexis Demo Mode:</strong> Data, OCR extraction, verification, and certified copies shown are simulated frontend prototype records.
        </span>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-slate-300 border-t border-slate-800 px-4 py-3 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-amber-400 font-medium">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span>SIH 2026 Internal Demonstration Prototype</span>
      </div>
      <p className="text-slate-400 text-center sm:text-right max-w-3xl">
        BhuNexis is a demonstration prototype. Data, OCR results, GIS boundaries, verification metrics, and certified records shown are simulated and do not represent official government records.
      </p>
    </div>
  );
}
