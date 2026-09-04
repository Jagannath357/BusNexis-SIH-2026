import { MOCK_USERS } from '../data/mockUsers';

export function authenticateUser(email, password, role) {
  const normalizedEmail = email.trim().toLowerCase();
  
  const foundUser = MOCK_USERS.find(user => 
    user.email.toLowerCase() === normalizedEmail &&
    user.password === password &&
    user.role === role
  );

  if (foundUser) {
    // Return sanitized session user object
    const { password: _, ...userSession } = foundUser;
    return { success: true, user: userSession };
  }

  return { 
    success: false, 
    error: "Invalid credentials or role selection. Please check demo credentials on the login screen." 
  };
}
