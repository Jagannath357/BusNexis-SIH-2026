import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/DashboardLayout';
import { Lock, ArrowLeft, ShieldAlert } from 'lucide-react';

export function AuditorUploadRestricted() {
  return (
    <DashboardLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 mb-4 shadow-sm">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
          Upload Access Restricted
        </h2>

        <p className="mt-2 text-xs text-slate-600 leading-relaxed font-semibold">
          Auditor accounts have read-only inspection access.
        </p>

        <p className="mt-1 text-xs text-slate-500 max-w-md">
          To maintain strict compliance independence, auditor credentials cannot upload, edit, delete, or approve land record files in the system.
        </p>

        <div className="mt-6">
          <Link
            to="/au/dashboard"
            className="px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-bold text-xs rounded-xl shadow-md transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Compliance Dashboard</span>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
