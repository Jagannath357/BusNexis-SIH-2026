import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { MapView } from '../../components/MapView';

export function OfficerMap() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded border border-blue-200">
            Ingestion GIS Layer
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Cadastral GIS Ingestion Map
          </h1>
          <p className="text-xs text-slate-500">
            Verify uploaded survey numbers against Jatni Tehsil spatial boundaries.
          </p>
        </div>

        <MapView height="h-[650px]" role="OFFICER" />
      </div>
    </DashboardLayout>
  );
}
