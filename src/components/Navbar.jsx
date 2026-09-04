import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../hooks/useToast';
import { INITIAL_NOTIFICATIONS } from '../data/notifications';
import { 
  Bell, 
  Search, 
  LogOut, 
  User, 
  ShieldCheck, 
  Menu, 
  X, 
  Building2,
  FileCheck,
  Globe
} from 'lucide-react';

export function Navbar({ onToggleSidebar }) {
  const { user, logout } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [searchQuery, setSearchQuery] = useState('');

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleLogout = () => {
    logout();
    addToast('You have been signed out successfully.', 'info');
    navigate('/login');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Redirect citizen or general role to public search
    if (user?.role === 'CITIZEN') {
      navigate(`/u/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate(`/u/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const getRoleBadgeStyle = (role) => {
    switch (role) {
      case 'ADMIN': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'OFFICER': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'REVIEWER': return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'AUDITOR': return 'bg-rose-100 text-rose-800 border-rose-300';
      case 'CITIZEN': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-slate-900 text-white border-b border-slate-800 shadow-md">
      <div className="px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Left Side: Hamburger & Brand */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onToggleSidebar}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 p-2 text-white shadow-lg flex items-center justify-center font-extrabold text-lg">
              <FileCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  BhuNexis
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold bg-sky-500/20 text-sky-300 rounded border border-sky-500/30">
                  SIH 2026
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium leading-none hidden md:block">
                Intelligent Land Record Digitization
              </p>
            </div>
          </Link>
        </div>

        {/* Middle: Global Quick Search */}
        <div className="flex-1 max-w-md hidden md:block">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Quick search Survey No, Khata No, Owner Name, Mouza..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/80 border border-slate-700/80 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
            />
          </form>
        </div>

        {/* Right Side: Notifications & User Profile */}
        <div className="flex items-center gap-3">
          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 relative focus:outline-none"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 text-slate-800">
                <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                  <h4 className="font-semibold text-xs text-slate-900 uppercase tracking-wider">
                    Notifications ({unreadCount} unread)
                  </h4>
                  {unreadCount > 0 && (
                    <button 
                      onClick={markAllRead} 
                      className="text-[11px] font-medium text-sky-600 hover:text-sky-800"
                    >
                      Mark all read
                    </button>
                  )}
                </div>
                <div className="max-h-64 overflow-y-auto divide-y divide-slate-100">
                  {notifications.map(n => (
                    <div 
                      key={n.id} 
                      className={`p-3 text-xs hover:bg-slate-50 transition-colors ${!n.read ? 'bg-sky-50/40' : ''}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-slate-900">{n.title}</span>
                        <span className="text-[10px] text-slate-400 whitespace-nowrap">{n.timestamp}</span>
                      </div>
                      <p className="mt-1 text-slate-600 text-xs">{n.message}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-slate-100 text-center">
                  <span className="text-[10px] text-slate-400">Simulated System Events</span>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Dropdown */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-800 text-left focus:outline-none transition-colors"
              >
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-8 h-8 rounded-full border-2 border-sky-500 object-cover"
                />
                <div className="hidden lg:block">
                  <div className="text-xs font-semibold text-white leading-tight">{user.name}</div>
                  <span className={`inline-block px-1.5 py-0.2 text-[10px] font-bold rounded border ${getRoleBadgeStyle(user.role)}`}>
                    {user.role}
                  </span>
                </div>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 text-slate-800">
                  <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/60">
                    <p className="text-xs font-bold text-slate-900">{user.name}</p>
                    <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded border ${getRoleBadgeStyle(user.role)}`}>
                        {user.roleDisplayName}
                      </span>
                    </div>
                  </div>

                  <div className="py-1">
                    <Link
                      to={`/${user.role === 'ADMIN' ? 'a' : (user.role === 'OFFICER' ? 'o' : (user.role === 'REVIEWER' ? 'r' : (user.role === 'AUDITOR' ? 'au' : 'u')))}/profile`}
                      onClick={() => setShowProfileMenu(false)}
                      className="px-4 py-2 text-xs text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                    >
                      <User className="w-4 h-4 text-slate-500" />
                      <span>My Account Profile</span>
                    </Link>
                    <Link
                      to="/"
                      onClick={() => setShowProfileMenu(false)}
                      className="px-4 py-2 text-xs text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4 text-slate-500" />
                      <span>Platform Home Landing</span>
                    </Link>
                  </div>

                  <div className="border-t border-slate-100 pt-1">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2 font-medium"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-3.5 py-1.5 text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors shadow-sm"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
