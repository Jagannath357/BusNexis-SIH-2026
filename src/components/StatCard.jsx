import React from 'react';

export function StatCard({ title, value, subtitle, icon: Icon, trend, color = 'blue' }) {
  const colorMap = {
    blue: 'border-l-blue-600 text-blue-600 bg-blue-50/50',
    emerald: 'border-l-emerald-600 text-emerald-600 bg-emerald-50/50',
    amber: 'border-l-amber-500 text-amber-600 bg-amber-50/50',
    rose: 'border-l-rose-600 text-rose-600 bg-rose-50/50',
    indigo: 'border-l-indigo-600 text-indigo-600 bg-indigo-50/50',
    slate: 'border-l-slate-600 text-slate-600 bg-slate-50/50'
  };

  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm p-5 border-l-4 transition-all hover:shadow-md ${colorMap[color] || colorMap.blue}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</span>
        {Icon && (
          <div className={`p-2.5 rounded-lg ${colorMap[color]}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      
      <div className="mt-3 flex items-baseline justify-between">
        <div className="text-2xl font-bold text-slate-900 tracking-tight">{value}</div>
        {trend && (
          <span className={`text-xs font-semibold ${trend.positive ? 'text-emerald-600' : 'text-rose-600'}`}>
            {trend.value}
          </span>
        )}
      </div>
      
      {subtitle && (
        <p className="mt-1 text-xs text-slate-500 font-medium">{subtitle}</p>
      )}
    </div>
  );
}
