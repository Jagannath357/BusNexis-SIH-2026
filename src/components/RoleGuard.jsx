import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AccessDenied } from './AccessDenied';

export function RoleGuard({ allowedRoles, children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user || !allowedRoles.includes(user.role)) {
    return (
      <AccessDenied 
        requiredRole={allowedRoles.join(' or ')} 
        attemptedPath={location.pathname} 
      />
    );
  }

  return children;
}
