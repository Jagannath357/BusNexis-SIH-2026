import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { ProfileCard } from '../../components/ProfileCard';

export function AdminProfile() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Administrator Account Profile
          </h1>
          <p className="text-xs text-slate-500">
            System governance account profile and administrative organization settings.
          </p>
        </div>

        <ProfileCard />
      </div>
    </DashboardLayout>
  );
}
