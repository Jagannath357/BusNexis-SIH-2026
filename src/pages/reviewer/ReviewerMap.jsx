import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { MapView } from '../../components/MapView';

export function ReviewerMap() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-200">
            Verification GIS Overlay
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            GIS Boundary Verification View
          </h1>
          <p className="text-xs text-slate-500">
            Cross-reference land parcel survey numbers against Khordha spatial polygon geometries.
          </p>
        </div>

        <MapView height="h-[650px]" role="REVIEWER" />
      </div>
    </DashboardLayout>
  );
}
