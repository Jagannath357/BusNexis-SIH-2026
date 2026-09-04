import React from 'react';
import { useToast } from '../hooks/useToast';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => {
        const getToastStyle = () => {
          switch (toast.type) {
            case 'success':
              return { bg: 'bg-emerald-900/95 border-emerald-700 text-emerald-100', icon: CheckCircle2 };
            case 'error':
              return { bg: 'bg-rose-900/95 border-rose-700 text-rose-100', icon: AlertCircle };
            case 'warning':
              return { bg: 'bg-amber-900/95 border-amber-700 text-amber-100', icon: AlertTriangle };
            case 'info':
            default:
              return { bg: 'bg-slate-900/95 border-slate-700 text-slate-100', icon: Info };
          }
        };

        const style = getToastStyle();
        const Icon = style.icon;

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-xl border shadow-xl flex items-start gap-3 transition-all transform translate-y-0 text-xs font-medium backdrop-blur-md ${style.bg}`}
          >
            <Icon className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="flex-1 leading-snug">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white p-0.5 rounded focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
