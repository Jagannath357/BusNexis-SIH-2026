import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { MapView } from '../../components/MapView';

export function CitizenMap() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded border border-sky-200">
            Public Land Explorer
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Public Cadastral GIS Explorer
          </h1>
          <p className="text-xs text-slate-500">
            Interactive land parcel map for Jatni Tehsil, Khordha District, Odisha. Search plots by Survey No or Khata.
          </p>
        </div>

        <MapView height="h-[650px]" role="CITIZEN" />
      </div>
    </DashboardLayout>
  );
}
