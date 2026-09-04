// SIMULATED PROCESSING PIPELINE STAGES & METRICS

export const PIPELINE_STAGES = [
  { id: 1, name: "Upload Validation", description: "Verifying PDF/Image format, digital signature & file integrity" },
  { id: 2, name: "Document Analysis", description: "Detecting document orientation, resolution & page layout" },
  { id: 3, name: "Image Preprocessing", description: "Applying adaptive deskew, noise removal & binarization filter" },
  { id: 4, name: "Multilingual OCR", description: "Running simulated character recognition on Odia/English script" },
  { id: 5, name: "Document AI Classification", description: "Categorizing document as RoR (Patta), Sale Deed, or Partition Deed" },
  { id: 6, name: "Field Extraction", description: "Parsing Owner, Survey No., Khata No., Plot Area, and Mouza metadata" },
  { id: 7, name: "Confidence Scoring", description: "Computing field-level statistical confidence percentages" },
  { id: 8, name: "Business Rule Validation", description: "Checking area unit consistency & owner name formatting rules" },
  { id: 9, name: "GIS Cadastral Match", description: "Matching extracted survey number against Khordha GeoJSON layer" },
  { id: 10, name: "Final Routing", description: "Routing record to Verified repository or Human Review Queue" }
];

export const SYSTEM_STATS = {
  totalUsers: 48,
  activeUsers: 43,
  pendingUsers: 5,
  activeOfficers: 18,
  reviewers: 12,
  auditors: 5,
  systemHealth: 98.7,
  ocrThreshold: 85,
  validationRules: 24,
  apiPerformanceMs: 96,
  activeSessions: 17
};
