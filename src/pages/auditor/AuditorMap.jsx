import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { MapView } from '../../components/MapView';

export function AuditorMap() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded border border-rose-200">
            Inspection GIS Layer
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Read-Only GIS Cadastral Inspection
          </h1>
          <p className="text-xs text-slate-500">
            Inspect spatial polygon accuracy and verification status in Jatni Tehsil, Khordha District, Odisha.
          </p>
        </div>

        <MapView height="h-[650px]" role="AUDITOR" />
      </div>
    </DashboardLayout>
  );
}
