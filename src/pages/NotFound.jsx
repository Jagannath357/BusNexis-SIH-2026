import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getDefaultDashboardForRole } from '../utils/permissions';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  const { user } = useAuth();
  const targetDashboard = getDefaultDashboardForRole(user?.role);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 mb-6 shadow-xl">
        <FileQuestion className="w-10 h-10" />
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight text-white">Page Not Found</h1>
      <p className="mt-2 text-sm text-slate-400 max-w-md">
        The requested URL path does not exist or has been moved in the BhuNexis prototype navigation structure.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {user ? (
          <Link
            to={targetDashboard}
            className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go to My Role Dashboard</span>
          </Link>
        ) : (
          <Link
            to="/"
            className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Go to Landing Page</span>
          </Link>
        )}
      </div>
    </div>
  );
}
