import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Public Pages
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { ForgotPassword } from '../pages/ForgotPassword';
import { NotFound } from '../pages/NotFound';

// Security Guards
import { ProtectedRoute } from '../components/ProtectedRoute';
import { RoleGuard } from '../components/RoleGuard';

// Admin Pages
import { AdminDashboard } from '../pages/admin/AdminDashboard';
import { AdminUpload } from '../pages/admin/AdminUpload';
import { AdminMap } from '../pages/admin/AdminMap';
import { AdminProfile } from '../pages/admin/AdminProfile';
import { UserManagement } from '../pages/admin/UserManagement';
import { SystemSettings } from '../pages/admin/SystemSettings';
import { AdminAudit } from '../pages/admin/AdminAudit';

// Officer Pages
import { OfficerDashboard } from '../pages/officer/OfficerDashboard';
import { OfficerUpload } from '../pages/officer/OfficerUpload';
import { OfficerMap } from '../pages/officer/OfficerMap';
import { OfficerProfile } from '../pages/officer/OfficerProfile';

// Reviewer Pages
import { ReviewerDashboard } from '../pages/reviewer/ReviewerDashboard';
import { ReviewerUpload } from '../pages/reviewer/ReviewerUpload';
import { ReviewerMap } from '../pages/reviewer/ReviewerMap';
import { ReviewerProfile } from '../pages/reviewer/ReviewerProfile';
import { HumanReview } from '../pages/reviewer/HumanReview';

// Auditor Pages
import { AuditorDashboard } from '../pages/auditor/AuditorDashboard';
import { AuditorUploadRestricted } from '../pages/auditor/AuditorUploadRestricted';
import { AuditorMap } from '../pages/auditor/AuditorMap';
import { AuditorProfile } from '../pages/auditor/AuditorProfile';
import { AuditTrail } from '../pages/auditor/AuditTrail';

// Citizen Pages
import { CitizenDashboard } from '../pages/citizen/CitizenDashboard';
import { CitizenUploadRestricted } from '../pages/citizen/CitizenUploadRestricted';
import { CitizenMap } from '../pages/citizen/CitizenMap';
import { CitizenProfile } from '../pages/citizen/CitizenProfile';
import { CitizenSearch } from '../pages/citizen/CitizenSearch';
import { LandRecordDetails } from '../pages/citizen/LandRecordDetails';

export function AppRoutes() {
  return (
    <Routes>
      {/* Public Unprotected Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Admin Routes (/a/...) */}
      <Route path="/a/dashboard" element={<ProtectedRoute><RoleGuard allowedRoles={['ADMIN']}><AdminDashboard /></RoleGuard></ProtectedRoute>} />
      <Route path="/a/upload" element={<ProtectedRoute><RoleGuard allowedRoles={['ADMIN']}><AdminUpload /></RoleGuard></ProtectedRoute>} />
      <Route path="/a/map" element={<ProtectedRoute><RoleGuard allowedRoles={['ADMIN']}><AdminMap /></RoleGuard></ProtectedRoute>} />
      <Route path="/a/profile" element={<ProtectedRoute><RoleGuard allowedRoles={['ADMIN']}><AdminProfile /></RoleGuard></ProtectedRoute>} />
      <Route path="/a/users" element={<ProtectedRoute><RoleGuard allowedRoles={['ADMIN']}><UserManagement /></RoleGuard></ProtectedRoute>} />
      <Route path="/a/settings" element={<ProtectedRoute><RoleGuard allowedRoles={['ADMIN']}><SystemSettings /></RoleGuard></ProtectedRoute>} />
      <Route path="/a/audit" element={<ProtectedRoute><RoleGuard allowedRoles={['ADMIN']}><AdminAudit /></RoleGuard></ProtectedRoute>} />

      {/* Officer Routes (/o/...) */}
      <Route path="/o/dashboard" element={<ProtectedRoute><RoleGuard allowedRoles={['OFFICER', 'ADMIN']}><OfficerDashboard /></RoleGuard></ProtectedRoute>} />
      <Route path="/o/upload" element={<ProtectedRoute><RoleGuard allowedRoles={['OFFICER', 'ADMIN']}><OfficerUpload /></RoleGuard></ProtectedRoute>} />
      <Route path="/o/map" element={<ProtectedRoute><RoleGuard allowedRoles={['OFFICER', 'ADMIN']}><OfficerMap /></RoleGuard></ProtectedRoute>} />
      <Route path="/o/profile" element={<ProtectedRoute><RoleGuard allowedRoles={['OFFICER', 'ADMIN']}><OfficerProfile /></RoleGuard></ProtectedRoute>} />

      {/* Reviewer Routes (/r/...) */}
      <Route path="/r/dashboard" element={<ProtectedRoute><RoleGuard allowedRoles={['REVIEWER', 'ADMIN']}><ReviewerDashboard /></RoleGuard></ProtectedRoute>} />
      <Route path="/r/upload" element={<ProtectedRoute><RoleGuard allowedRoles={['REVIEWER', 'ADMIN']}><ReviewerUpload /></RoleGuard></ProtectedRoute>} />
      <Route path="/r/map" element={<ProtectedRoute><RoleGuard allowedRoles={['REVIEWER', 'ADMIN']}><ReviewerMap /></RoleGuard></ProtectedRoute>} />
      <Route path="/r/profile" element={<ProtectedRoute><RoleGuard allowedRoles={['REVIEWER', 'ADMIN']}><ReviewerProfile /></RoleGuard></ProtectedRoute>} />
      <Route path="/r/review" element={<ProtectedRoute><RoleGuard allowedRoles={['REVIEWER', 'ADMIN']}><HumanReview /></RoleGuard></ProtectedRoute>} />

      {/* Auditor Routes (/au/...) */}
      <Route path="/au/dashboard" element={<ProtectedRoute><RoleGuard allowedRoles={['AUDITOR', 'ADMIN']}><AuditorDashboard /></RoleGuard></ProtectedRoute>} />
      <Route path="/au/upload" element={<ProtectedRoute><RoleGuard allowedRoles={['AUDITOR', 'ADMIN']}><AuditorUploadRestricted /></RoleGuard></ProtectedRoute>} />
      <Route path="/au/map" element={<ProtectedRoute><RoleGuard allowedRoles={['AUDITOR', 'ADMIN']}><AuditorMap /></RoleGuard></ProtectedRoute>} />
      <Route path="/au/profile" element={<ProtectedRoute><RoleGuard allowedRoles={['AUDITOR', 'ADMIN']}><AuditorProfile /></RoleGuard></ProtectedRoute>} />
      <Route path="/au/audit" element={<ProtectedRoute><RoleGuard allowedRoles={['AUDITOR', 'ADMIN']}><AuditTrail /></RoleGuard></ProtectedRoute>} />

      {/* Citizen Routes (/u/...) */}
      <Route path="/u/dashboard" element={<ProtectedRoute><RoleGuard allowedRoles={['CITIZEN', 'ADMIN', 'OFFICER', 'REVIEWER', 'AUDITOR']}><CitizenDashboard /></RoleGuard></ProtectedRoute>} />
      <Route path="/u/upload" element={<ProtectedRoute><RoleGuard allowedRoles={['CITIZEN', 'ADMIN', 'OFFICER', 'REVIEWER', 'AUDITOR']}><CitizenUploadRestricted /></RoleGuard></ProtectedRoute>} />
      <Route path="/u/map" element={<ProtectedRoute><RoleGuard allowedRoles={['CITIZEN', 'ADMIN', 'OFFICER', 'REVIEWER', 'AUDITOR']}><CitizenMap /></RoleGuard></ProtectedRoute>} />
      <Route path="/u/profile" element={<ProtectedRoute><RoleGuard allowedRoles={['CITIZEN', 'ADMIN', 'OFFICER', 'REVIEWER', 'AUDITOR']}><CitizenProfile /></RoleGuard></ProtectedRoute>} />
      <Route path="/u/search" element={<ProtectedRoute><RoleGuard allowedRoles={['CITIZEN', 'ADMIN', 'OFFICER', 'REVIEWER', 'AUDITOR']}><CitizenSearch /></RoleGuard></ProtectedRoute>} />
      <Route path="/u/records/:id" element={<ProtectedRoute><RoleGuard allowedRoles={['CITIZEN', 'ADMIN', 'OFFICER', 'REVIEWER', 'AUDITOR']}><LandRecordDetails /></RoleGuard></ProtectedRoute>} />

      {/* 404 Catch-All */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
