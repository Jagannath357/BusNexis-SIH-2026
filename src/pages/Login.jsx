import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../hooks/useToast';
import { getDefaultDashboardForRole } from '../utils/permissions';
import { MOCK_USERS } from '../data/mockUsers';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { FileCheck, Lock, Mail, Shield, User, Key, ArrowRight } from 'lucide-react';

export function Login() {
  const { login } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('admin@bhoomiai.demo');
  const [password, setPassword] = useState('Admin@123');
  const [role, setRole] = useState('ADMIN');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);

    const res = login(email, password, role);

    if (res.success) {
      addToast(`Welcome back. Signed in as ${res.user.roleDisplayName}.`, 'success');
      const target = location.state?.from?.pathname || getDefaultDashboardForRole(res.user.role);
      navigate(target, { replace: true });
    } else {
      setError(res.error);
      addToast(res.error, 'error');
    }
  };

  // Quick Preset Selection Helper
  const fillPreset = (userRole) => {
    const preset = MOCK_USERS.find(u => u.role === userRole);
    if (preset) {
      setEmail(preset.email);
      setPassword(preset.password);
      setRole(preset.role);
      setError(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col justify-between">
      <DisclaimerBanner compact={true} />

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 my-8">
        <div className="w-full max-w-md bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
          {/* Header Branding */}
          <div className="text-center">
            <Link to="/" className="inline-flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-xl bg-sky-600 p-2 text-white flex items-center justify-center shadow-lg">
                <FileCheck className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">BhuNexis</span>
            </Link>
            <h2 className="text-lg font-bold text-white">Sign In to Platform</h2>
            <p className="text-xs text-slate-400 mt-1">
              Intelligent Land Record Digitization & Validation (SIH26018)
            </p>
          </div>

          {/* Quick Demo Credentials Preset Bar */}
          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-xs">
            <p className="text-[10px] font-bold uppercase tracking-wider text-sky-400 mb-2">
              Quick Demo Login Presets
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { role: 'ADMIN', label: 'Admin' },
                { role: 'OFFICER', label: 'Officer' },
                { role: 'REVIEWER', label: 'Reviewer' },
                { role: 'AUDITOR', label: 'Auditor' },
                { role: 'CITIZEN', label: 'Citizen' }
              ].map(p => (
                <button
                  key={p.role}
                  type="button"
                  onClick={() => fillPreset(p.role)}
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all ${
                    role === p.role 
                      ? 'bg-sky-600 text-white shadow-sm' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Error Notice */}
          {error && (
            <div className="p-3 bg-rose-950/80 border border-rose-800 text-rose-200 rounded-xl text-xs">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                Select Portal Access Role
              </label>
              <div className="relative">
                <Shield className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white font-semibold focus:outline-none focus:border-sky-500"
                >
                  <option value="ADMIN">Admin / System Administrator</option>
                  <option value="OFFICER">Officer / Data Ingestion Specialist</option>
                  <option value="REVIEWER">Reviewer / Human-in-the-Loop Verifier</option>
                  <option value="AUDITOR">Auditor / Legal & Compliance Inspector</option>
                  <option value="CITIZEN">Citizen / Landowner</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-semibold text-slate-300">Password</label>
                <Link to="/forgot-password" className="text-[10px] text-sky-400 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Sign In as {role}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Footer Signup Link */}
          <div className="text-center border-t border-slate-900 pt-4 text-xs text-slate-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-sky-400 font-semibold hover:underline">
              Request Signup Access
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
