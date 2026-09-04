import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { DashboardLayout } from '../../components/DashboardLayout';
import { AuditTimeline } from '../../components/AuditTimeline';

export function AdminAudit() {
  const { auditEvents } = useContext(AppContext);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded border border-purple-200">
            System Administration
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            System Audit & Operations Log
          </h1>
          <p className="text-xs text-slate-500">
            Comprehensive audit timeline tracking all user logins, record ingestions, reviewer edits, and system configuration updates.
          </p>
        </div>

        <AuditTimeline events={auditEvents} readOnly={false} />
      </div>
    </DashboardLayout>
  );
}
