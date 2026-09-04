import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { ProfileCard } from '../../components/ProfileCard';

export function ReviewerProfile() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Reviewer Account Profile
          </h1>
          <p className="text-xs text-slate-500">
            Human-in-the-Loop Verifier profile and Jatni Tehsil revenue credentials.
          </p>
        </div>

        <ProfileCard />
      </div>
    </DashboardLayout>
  );
}
