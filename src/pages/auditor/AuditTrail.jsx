import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { DashboardLayout } from '../../components/DashboardLayout';
import { AuditTimeline } from '../../components/AuditTimeline';

export function AuditTrail() {
  const { auditEvents } = useContext(AppContext);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded border border-rose-200">
            Compliance Inspection
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Read-Only Audit Trail Timeline
          </h1>
          <p className="text-xs text-slate-500">
            Independent legal compliance evaluation of document ingestions, field updates, and certification logs.
          </p>
        </div>

        <AuditTimeline events={auditEvents} readOnly={true} />
      </div>
    </DashboardLayout>
  );
}
