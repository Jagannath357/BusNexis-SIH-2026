import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../hooks/useToast';
import { DisclaimerBanner } from '../components/DisclaimerBanner';
import { FileCheck, Shield, Mail, Lock, Phone, User, Building, ArrowLeft } from 'lucide-react';

export function Signup() {
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'CITIZEN',
    phone: '',
    department: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      addToast('Passwords do not match.', 'error');
      return;
    }

    setSubmitted(true);
    if (formData.role === 'CITIZEN') {
      addToast('Citizen registration simulated successfully.', 'success');
    } else {
      addToast('Internal administrative account request submitted for authorization.', 'info');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col justify-between">
      <DisclaimerBanner compact={true} />

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 my-8">
        <div className="w-full max-w-lg bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-xl bg-sky-600 p-2 text-white flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">BhuNexis</span>
            </Link>
            <h2 className="text-lg font-bold text-white">Account Registration Request</h2>
            <p className="text-xs text-slate-400 mt-1">Simulated Registration Portal — Demo Mode</p>
          </div>

          {submitted ? (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Request Processed (Demo Mode)</h3>
              <p className="text-xs text-slate-300">
                {formData.role === 'CITIZEN' 
                  ? 'Citizen registration simulation completed. You may now log in with demo credentials.'
                  : 'Internal administrative accounts require government authorization in production systems.'}
              </p>
              <button
                onClick={() => navigate('/login')}
                className="mt-4 px-5 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md"
              >
                Go to Sign In Page
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Requested Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white font-semibold focus:outline-none focus:border-sky-500"
                  >
                    <option value="CITIZEN">Citizen / Landowner</option>
                    <option value="OFFICER">Officer / Ingestion Specialist</option>
                    <option value="REVIEWER">Reviewer / Verifier</option>
                    <option value="AUDITOR">Auditor / Compliance</option>
                    <option value="ADMIN">Admin / Administrator</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Password</label>
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="text"
                    required
                    placeholder="+91 98765 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Organization / Tehsil (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Tehsil Jatni"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
              >
                Submit Registration Request (Demo Mode)
              </button>
            </form>
          )}

          <div className="text-center border-t border-slate-900 pt-4 text-xs text-slate-400">
            Already have credentials?{' '}
            <Link to="/login" className="text-sky-400 font-semibold hover:underline">
              Back to Sign In
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
