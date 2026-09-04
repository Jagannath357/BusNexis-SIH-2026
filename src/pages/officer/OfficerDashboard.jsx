import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { DashboardLayout } from '../../components/DashboardLayout';
import { StatCard } from '../../components/StatCard';
import { LandRecordTable } from '../../components/LandRecordTable';
import { UploadCloud, FileText, Clock, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react';

export function OfficerDashboard() {
  const { records } = useContext(AppContext);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded border border-blue-200">
              Data Ingestion Cell
            </span>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
              Document Ingestion Dashboard
            </h1>
            <p className="text-xs text-slate-500">
              Monitor land-record uploads and simulated document OCR extraction status in Khordha District.
            </p>
          </div>

          <Link
            to="/o/upload"
            className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors flex items-center gap-2"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Upload Land Record</span>
          </Link>
        </div>

        {/* OFFICER STAT CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <StatCard title="Documents Uploaded" value="1,284" subtitle="Total files" icon={FileText} color="blue" />
          <StatCard title="Processing" value="82" subtitle="Active pipeline" icon={RefreshCw} color="indigo" />
          <StatCard title="Completed" value="1,146" subtitle="Extracted successfully" icon={CheckCircle2} color="emerald" />
          <StatCard title="OCR Issues" value="56" subtitle="Low character confidence" icon={AlertTriangle} color="rose" />
          <StatCard title="Pending Review" value="82" subtitle="Human verifier queue" icon={Clock} color="amber" />
          <StatCard title="Success Rate" value="89.1%" subtitle="Extraction accuracy" icon={CheckCircle2} color="emerald" />
        </div>

        {/* Processing Queue Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Ingestion Queue & Recent Uploads
            </h3>
            <span className="text-xs text-slate-500 font-medium">Khordha Ingestion Cell</span>
          </div>

          <LandRecordTable records={records} role="OFFICER" />
        </div>
      </div>
    </DashboardLayout>
  );
}
