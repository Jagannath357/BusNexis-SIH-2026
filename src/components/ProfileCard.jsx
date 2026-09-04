import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../hooks/useToast';
import { User, Mail, Shield, Building, Phone, Clock, Save, Edit2 } from 'lucide-react';

export function ProfileCard() {
  const { user, updateProfile } = useAuth();
  const { addToast } = useToast();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    department: user?.department || ''
  });

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
    addToast('Profile information updated successfully.', 'success');
  };

  if (!user) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-100 pb-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-2xl object-cover border-4 border-slate-100 shadow-md shrink-0"
        />

        <div className="text-center sm:text-left flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">{user.name}</h3>
              <p className="text-xs text-slate-500">{user.email}</p>
            </div>
            <span className="inline-block px-3 py-1 text-xs font-bold bg-sky-100 text-sky-800 rounded-full border border-sky-200 self-center sm:self-auto">
              {user.roleDisplayName}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-3 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
              <Building className="w-3.5 h-3.5 text-sky-600" />
              <span>{user.department}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Last active: {user.lastLogin}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Account Details & Edit Form */}
      <form onSubmit={handleSave} className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Account Specifications</h4>
          {!isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>Edit Details</span>
            </button>
          ) : (
            <button
              type="submit"
              className="px-3 py-1.5 text-xs font-bold bg-sky-600 text-white hover:bg-sky-500 rounded-lg shadow-sm flex items-center gap-1 transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
              />
            ) : (
              <p className="font-bold text-slate-800 p-2 bg-slate-50 rounded-lg border border-slate-100">{user.name}</p>
            )}
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Role Key</label>
            <p className="font-bold text-slate-800 p-2 bg-slate-50 rounded-lg border border-slate-100">{user.role}</p>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Phone Number</label>
            {isEditing ? (
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
              />
            ) : (
              <p className="font-semibold text-slate-800 p-2 bg-slate-50 rounded-lg border border-slate-100">{user.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Department / Office</label>
            {isEditing ? (
              <input
                type="text"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
              />
            ) : (
              <p className="font-semibold text-slate-800 p-2 bg-slate-50 rounded-lg border border-slate-100">{user.department}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
