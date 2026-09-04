// INITIAL MOCK NOTIFICATIONS

export const INITIAL_NOTIFICATIONS = [
  {
    id: "NOTIF-01",
    title: "New Batch Processed",
    message: "24 land record scans completed simulated extraction in Jatni Tehsil.",
    timestamp: "10 mins ago",
    read: false,
    type: "info"
  },
  {
    id: "NOTIF-02",
    title: "Low Confidence Alert",
    message: "Record DOC-1003 requires human review due to handwritten script ambiguity.",
    timestamp: "1 hour ago",
    read: false,
    type: "warning"
  },
  {
    id: "NOTIF-03",
    title: "Cadastral Boundary Conflict",
    message: "Survey No 89/1 flagged with polygon overlap error.",
    timestamp: "3 hours ago",
    read: true,
    type: "error"
  },
  {
    id: "NOTIF-04",
    title: "System Threshold Updated",
    message: "OCR confidence threshold set to 85% by System Admin.",
    timestamp: "Yesterday",
    read: true,
    type: "success"
  }
];
