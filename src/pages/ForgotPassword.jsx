import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../hooks/useToast';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { FileCheck, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export function ForgotPassword() {
  const { addToast } = useToast();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    addToast('Password reset instructions simulated in Demo Mode.', 'info');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col justify-between">
      <DisclaimerBanner compact={true} />

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 my-8">
        <div className="w-full max-w-md bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-xl bg-sky-600 p-2 text-white flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">BhuNexis</span>
            </Link>
            <h2 className="text-lg font-bold text-white">Password Reset Simulation</h2>
            <p className="text-xs text-slate-400 mt-1">Enter registered email for demo reset instructions</p>
          </div>

          {sent ? (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Reset Instructions Simulated</h3>
              <p className="text-xs text-slate-300">
                Password reset link simulated for <strong className="text-sky-400">{email}</strong>. No actual email dispatch occurs in Demo Mode.
              </p>
              <Link
                to="/login"
                className="mt-4 inline-block px-5 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md"
              >
                Return to Login Page
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    required
                    placeholder="admin@bhoomiai.demo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
              >
                Send Reset Link (Demo Simulation)
              </button>
            </form>
          )}

          <div className="text-center border-t border-slate-900 pt-4 text-xs text-slate-400">
            <Link to="/login" className="text-sky-400 font-semibold hover:underline inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Login Screen</span>
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        BhuNexis Demo Mode • SIH 2026 Internal Prototype
      </footer>
    </div>
  );
}
