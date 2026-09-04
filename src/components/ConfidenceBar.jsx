import React from 'react';

export function ConfidenceBar({ score, label, showValue = true }) {
  const numScore = parseFloat(score) || 0;

  const getColorClass = (val) => {
    if (val >= 90) return 'bg-emerald-500 text-emerald-700';
    if (val >= 70) return 'bg-amber-500 text-amber-700';
    return 'bg-rose-500 text-rose-700';
  };

  const colorClass = getColorClass(numScore);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs mb-1 font-medium">
        {label && <span className="text-slate-600">{label}</span>}
        {showValue && (
          <span className={`font-semibold ${colorClass.split(' ')[1]}`}>
            {numScore}%
          </span>
        )}
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
        <div 
          className={`h-full transition-all duration-500 rounded-full ${colorClass.split(' ')[0]}`}
          style={{ width: `${Math.min(Math.max(numScore, 0), 100)}%` }}
        />
      </div>
    </div>
  );
}
