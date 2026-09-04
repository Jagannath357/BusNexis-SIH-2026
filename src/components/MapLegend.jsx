import React from 'react';

export function MapLegend() {
  const items = [
    { label: 'Verified Parcel', color: 'bg-emerald-500 border-emerald-700' },
    { label: 'Under Review / Pending', color: 'bg-amber-500 border-amber-700' },
    { label: 'Boundary Conflict', color: 'bg-rose-600 border-rose-800' },
    { label: 'Extracted / Ingestion', color: 'bg-indigo-600 border-indigo-800' }
  ];

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200 text-xs">
      <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[10px] mb-2">
        Cadastral Parcel Legend
      </h5>
      <div className="space-y-1.5">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-2">
            <span className={`w-3.5 h-3.5 rounded border shadow-sm ${it.color}`} />
            <span className="text-slate-700 font-medium">{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
