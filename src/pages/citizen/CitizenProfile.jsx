import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { ProfileCard } from '../../components/ProfileCard';

export function CitizenProfile() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Citizen Account Profile
          </h1>
          <p className="text-xs text-slate-500">
            Landowner portal account profile and personal contact preferences.
          </p>
        </div>

        <ProfileCard />
      </div>
    </DashboardLayout>
  );
}
