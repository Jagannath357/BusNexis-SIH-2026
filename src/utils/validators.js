export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export function validatePhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10;
}

export function validatePassword(password) {
  return password && password.length >= 6;
}

export function validateUploadFile(file) {
  if (!file) return { valid: false, error: "No file selected." };

  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
  if (!allowedTypes.includes(file.type)) {
    return { 
      valid: false, 
      error: "Unsupported file type. Please upload a PDF, JPG, JPEG, or PNG document." 
    };
  }

  const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
  if (file.size > maxSizeInBytes) {
    return { 
      valid: false, 
      error: "File size exceeds 10 MB limit. Please select a smaller document." 
    };
  }

  return { valid: true };
}
