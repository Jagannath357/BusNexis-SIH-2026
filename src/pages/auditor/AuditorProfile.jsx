import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { ProfileCard } from '../../components/ProfileCard';

export function AuditorProfile() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Auditor Account Profile
          </h1>
          <p className="text-xs text-slate-500">
            Legal & Compliance Inspector credentials for Odisha State Land Reform Audit Commission.
          </p>
        </div>

        <ProfileCard />
      </div>
    </DashboardLayout>
  );
}
