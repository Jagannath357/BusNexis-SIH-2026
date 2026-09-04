import React from 'react';

export function LoadingSkeleton({ type = 'card', count = 3 }) {
  const items = Array.from({ length: count });

  if (type === 'table') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-3 animate-pulse">
        <div className="h-8 bg-slate-200 rounded-lg w-full mb-4" />
        {items.map((_, i) => (
          <div key={i} className="h-10 bg-slate-100 rounded-lg w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((_, i) => (
        <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 animate-pulse">
          <div className="flex justify-between items-center">
            <div className="h-4 bg-slate-200 rounded w-24" />
            <div className="h-6 bg-slate-200 rounded-full w-20" />
          </div>
          <div className="h-5 bg-slate-300 rounded w-3/4" />
          <div className="h-3 bg-slate-200 rounded w-1/2" />
          <div className="space-y-2 pt-2">
            <div className="h-3 bg-slate-100 rounded w-full" />
            <div className="h-3 bg-slate-100 rounded w-5/6" />
          </div>
        </div>
      ))}
    </div>
  );
}
