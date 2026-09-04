import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/DashboardLayout';
import { ShieldAlert, Search, ArrowLeft } from 'lucide-react';

export function CitizenUploadRestricted() {
  return (
    <DashboardLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 shadow-sm">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
          Upload Access Restricted
        </h2>

        <p className="mt-2 text-xs text-slate-600 leading-relaxed font-semibold">
          Citizen accounts have public read-only access. Internal document ingestion is restricted to authorized administrative users.
        </p>

        <p className="mt-1 text-xs text-slate-500 max-w-md">
          Citizens may search verified revenue records, download certified excerpts, and submit correction requests for existing records.
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            to="/u/search"
            className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md transition-colors inline-flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Search Verified Records</span>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
