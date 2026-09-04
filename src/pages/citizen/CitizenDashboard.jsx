import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { DashboardLayout } from '../../components/DashboardLayout';
import { LandRecordCard } from '../../components/LandRecordCard';
import { Search, FileCheck, Download, HelpCircle, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export function CitizenDashboard() {
  const { records } = useContext(AppContext);
  const verifiedRecords = records.filter(r => r.verificationStatus === 'VERIFIED');

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Prominent Search Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-2xl p-8 shadow-xl border border-slate-800 text-center sm:text-left relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/30 inline-block mb-2">
              Citizen Land Records Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Search & Access Verified Odisha Land Records
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Lookup certified Record of Rights (Patta), survey plot details, and download prototype certified excerpts for Jatni Tehsil, Khordha.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/u/search"
                className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search Verified Land Records</span>
              </Link>
              <Link
                to="/u/map"
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Explore Cadastral Map</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Verified Public Land Records Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                Featured Verified Land Records (Odisha)
              </h3>
              <p className="text-xs text-slate-500">
                Certified Patta records validated by Revenue Officers.
              </p>
            </div>

            <Link to="/u/search" className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1">
              <span>View All Records</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {verifiedRecords.slice(0, 6).map(record => (
              <LandRecordCard key={record.id} record={record} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
