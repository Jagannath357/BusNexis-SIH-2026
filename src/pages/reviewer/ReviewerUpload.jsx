import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '../../components/DashboardLayout';
import { FileCheck, ShieldAlert, ArrowRight } from 'lucide-react';

export function ReviewerUpload() {
  return (
    <DashboardLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 shadow-sm">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
          Reviewer Verification Portal
        </h2>

        <p className="mt-2 text-xs text-slate-600 leading-relaxed">
          Reviewer accounts are primarily responsible for human verification, low-confidence resolution, and legal certification of extracted land records. Batch ingestion is managed by Data Ingestion Officers.
        </p>

        <div className="mt-6">
          <Link
            to="/r/review"
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow-md transition-colors inline-flex items-center gap-2"
          >
            <FileCheck className="w-4 h-4" />
            <span>Go to Human Review Queue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
