# BhuNexis — Intelligent Land Record Digitization & Validation System
**SIH 2026 Problem Statement Code**: SIH26018  
**Type**: Frontend-Only Demonstration Prototype (SIH 2026 Internal Round Evaluation)

---

## 1. Project Overview
**BhuNexis** ("From Legacy Records to Trusted Digital Land Data") is an enterprise-grade government frontend prototype designed for the Smart India Hackathon 2026. It models an intelligent land-record digitization platform that converts historical, handwritten, and scanned legacy land records (Khasra, Khata, RoR Patta) into structured, searchable, and GIS-verified digital land parcel datasets.

---

## 2. 100% Frontend Simulation Notice
- **Zero Backend Dependency**: No Python, FastAPI, Node backend, PostgreSQL, PostGIS, Redis, Celery, MinIO, or S3 storage requirements.
- **Zero Server AI/OCR**: No real server-side PaddleOCR, Tesseract, PyTorch, Transformers, or OpenCV ML model dependencies.
- **Frontend State Engine**: Simulated processing pipelines, React Context (`AppContext`, `AuthContext`, `NotificationContext`), `localStorage` persistence, frontend-generated GeoJSON, and mock verification engine.
- **Prototype Disclaimer**:
  > *"BhuNexis is a demonstration prototype. Data, OCR results, verification, and certified records shown are simulated and are not official government records."*

---

## 3. Technology Stack
- **Framework**: React 18 / Vite 5
- **Styling**: Tailwind CSS 3 (Government Enterprise Slate, Emerald, Amber, Rose palette)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Charts**: Recharts (User distribution & pipeline performance latency)
- **GIS Mapping**: Leaflet & React-Leaflet (Interactive cadastral parcel polygons in Jatni, Khordha, Odisha)
- **State Persistence**: React Context API + `localStorage`

---

## 4. Pre-configured Demo Credentials (5 Exact Roles)

| Role | Display Name | Demo Email | Demo Password | Default Route |
|---|---|---|---|---|
| **ADMIN** | System Administrator | `admin@bhoomiai.demo` | `Admin@123` | `/a/dashboard` |
| **OFFICER** | Data Ingestion Specialist | `officer@bhoomiai.demo` | `Officer@123` | `/o/dashboard` |
| **REVIEWER** | Human-in-the-Loop Verifier | `reviewer@bhoomiai.demo` | `Reviewer@123` | `/r/dashboard` |
| **AUDITOR** | Legal & Compliance Inspector | `auditor@bhoomiai.demo` | `Auditor@123` | `/au/dashboard` |
| **CITIZEN** | Landowner / Citizen | `citizen@bhoomiai.demo` | `Citizen@123` | `/u/dashboard` |

> **Note**: Clickable quick-preset login buttons are built into the Sign In screen (`/login`) for instant judge evaluation.

---

## 5. Main Route Structure

### Public Routes
- `/` — Platform Landing & Workflow Presentation
- `/login` — Role-based Login Screen
- `/signup` — Simulated Registration Request
- `/forgot-password` — Password Recovery Simulation

### Admin Protected Routes (`/a/...`)
- `/a/dashboard` — System Metrics & Governance Overview
- `/a/upload` — System Ingestion Pipeline Oversight
- `/a/map` — Full Cadastral GIS Map View
- `/a/users` — User Account Provisioning & Status Controls
- `/a/settings` — Pipeline & Rule Engine Configurations
- `/a/audit` — System-Wide Audit Log
- `/a/profile` — Admin Profile

### Officer Protected Routes (`/o/...`)
- `/o/dashboard` — Document Ingestion Dashboard
- `/o/upload` — Drag & Drop Document Ingestion & Animated OCR Pipeline
- `/o/map` — Ingestion Cadastral Map View
- `/o/profile` — Officer Profile

### Reviewer Protected Routes (`/r/...`)
- `/r/dashboard` — Human Verification Dashboard
- `/r/review` — **Split-Screen Verification Editor** (Original Deed vs Extracted Fields)
- `/r/map` — Boundary Verification Map
- `/r/profile` — Reviewer Profile

### Auditor Protected Routes (`/au/...`)
- `/au/dashboard` — Read-Only Compliance Dashboard
- `/au/audit` — Immutable Audit Trail Inspection Timeline
- `/au/upload` — Restricted Access Notice (`/au/upload`)
- `/au/map` — Inspection Map View
- `/au/profile` — Auditor Profile

### Citizen Protected Routes (`/u/...`)
- `/u/dashboard` — Citizen Land Records Portal Dashboard
- `/u/search` — Multi-Criteria Land Record Search
- `/u/records/:id` — Certified Record View & Copy Generator
- `/u/upload` — Restricted Access Notice (`/u/upload`)
- `/u/map` — Public Land Explorer Map
- `/u/profile` — Citizen Profile

---

## 6. Installation & Launch Instructions

```bash
# 1. Install project dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build production bundle (Static HTML/JS/CSS bundle)
npm run build
```

---

## 7. SIH 2026 Prototype Disclaimer
This software is developed strictly as a frontend prototype for Smart India Hackathon (SIH) 2026 internal round demonstration. All names, numbers, boundaries, confidence scores, and certified copies shown are simulated mock data and hold no legal standing in any court or revenue tribunal.
