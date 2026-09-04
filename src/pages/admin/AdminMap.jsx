import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { MapView } from '../../components/MapView';

export function AdminMap() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded border border-purple-200">
            System Administration
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Cadastral GIS Map Overview
          </h1>
          <p className="text-xs text-slate-500">
            System-wide parcel geometry visualization for Jatni Tehsil, Khordha District, Odisha.
          </p>
        </div>

        <MapView height="h-[650px]" role="ADMIN" />
      </div>
    </DashboardLayout>
  );
}
