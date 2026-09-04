import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { ProfileCard } from '../../components/ProfileCard';

export function OfficerProfile() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Officer Account Profile
          </h1>
          <p className="text-xs text-slate-500">
            Ingestion Specialist officer details and Khordha District credentials.
          </p>
        </div>

        <ProfileCard />
      </div>
    </DashboardLayout>
  );
}
