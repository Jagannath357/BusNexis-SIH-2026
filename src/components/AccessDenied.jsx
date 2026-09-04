import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { getDefaultDashboardForRole } from '../utils/permissions';

export function AccessDenied({ requiredRole, attemptedPath }) {
  const { user } = useAuth();
  const defaultDashboard = getDefaultDashboardForRole(user?.role);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 max-w-lg mx-auto">
      <div className="w-16 h-16 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600 mb-4 shadow-sm">
        <ShieldAlert className="w-8 h-8" />
      </div>

      <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
        Access Denied
      </h2>

      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        You do not have permission to access the requested path{' '}
        <code className="bg-slate-100 text-rose-700 px-1.5 py-0.5 rounded text-xs font-mono">{attemptedPath}</code>.
      </p>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 text-left w-full">
        <p className="font-semibold">Current Session Role: {user?.roleDisplayName || user?.role}</p>
        <p className="mt-1">
          Internal RBAC enforcement restricts this section to <span className="font-bold">{requiredRole}</span> users.
        </p>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
        <Link
          to={defaultDashboard}
          className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs rounded-lg shadow-sm transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to My Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
