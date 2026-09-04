import React from 'react';
import { CheckCircle2, Clock, AlertTriangle, AlertCircle, FileText, Loader2, XCircle, UploadCloud } from 'lucide-react';

export function StatusBadge({ status, size = 'md' }) {
  const getBadgeConfig = () => {
    switch (status) {
      case 'VERIFIED':
        return {
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          icon: CheckCircle2,
          label: 'Verified'
        };
      case 'UNDER REVIEW':
      case 'PENDING':
        return {
          bg: 'bg-amber-50 text-amber-700 border-amber-200',
          icon: Clock,
          label: 'Under Review'
        };
      case 'LOW CONFIDENCE':
        return {
          bg: 'bg-amber-100 text-amber-800 border-amber-300',
          icon: AlertTriangle,
          label: 'Low Confidence'
        };
      case 'CONFLICT':
        return {
          bg: 'bg-rose-50 text-rose-700 border-rose-200',
          icon: AlertCircle,
          label: 'Conflict Flagged'
        };
      case 'EXTRACTED':
        return {
          bg: 'bg-blue-50 text-blue-700 border-blue-200',
          icon: FileText,
          label: 'Extracted'
        };
      case 'PROCESSING':
        return {
          bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          icon: Loader2,
          label: 'Processing...',
          spin: true
        };
      case 'REJECTED':
        return {
          bg: 'bg-slate-100 text-slate-700 border-slate-300',
          icon: XCircle,
          label: 'Rejected'
        };
      case 'UPLOADED':
      default:
        return {
          bg: 'bg-slate-50 text-slate-600 border-slate-200',
          icon: UploadCloud,
          label: status || 'Uploaded'
        };
    }
  };

  const config = getBadgeConfig();
  const Icon = config.icon;

  const sizeClasses = size === 'sm' 
    ? 'px-2 py-0.5 text-xs font-medium gap-1' 
    : 'px-2.5 py-1 text-xs font-semibold gap-1.5';

  return (
    <span className={`inline-flex items-center rounded-full border shadow-sm ${config.bg} ${sizeClasses}`}>
      <Icon className={`w-3.5 h-3.5 ${config.spin ? 'animate-spin' : ''}`} />
      <span>{config.label}</span>
    </span>
  );
}
