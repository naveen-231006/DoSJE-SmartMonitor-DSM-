# DoSJE SmartMonitor (DSM) — SIH 2026

A phased, risk-based smart surveillance monitoring web platform designed for the **Department of Social Justice & Empowerment (DoSJE)**.

---

## 🚀 Quick Start Instructions

Follow these simple steps to start and run the application on your computer:

### 1. Open Terminal & Navigate to Project Directory
```bash
cd /home/alien/SIH
```

### 2. Install Dependencies (First time only)
If you haven't installed dependencies yet, run:
```bash
npm install
```

### 3. Start the Development Server
To launch the project in development mode:
```bash
npm run dev
```

After running the command, open your browser and go to:
👉 **`http://localhost:5173`** (or **`http://localhost:5174`** if port 5173 is in use)

---

## 🛠️ Available Scripts

- **`npm run dev`** — Starts the local Vite development server with HMR (Hot Module Replacement).
- **`npm run build`** — Bundles and builds the application for production deployment into the `dist/` directory.
- **`npm run preview`** — Locally previews the built production output.

---

## 📌 Features & Pages Included

1. **Landing Page (`/`)** — Comprehensive solution presentation detailing the 3-Tier Model, Architecture, Features, and Roadmap.
2. **Dashboard Overview (`/dashboard`)** — Real-time stat metrics, Risk Tier distribution chart, Live alerts feed, and Compliance trends.
3. **NGO Monitor (`/dashboard/ngos`)** — Interactive searchable NGO table with individual inspection status, simulated live CCTV feed, and risk breakdowns.
4. **Inspections (`/dashboard/inspections`)** — Schedule tracking, interactive Blockchain evidence verification, and Triple Random Assignment breakdown.
5. **Analytics (`/dashboard/analytics`)** — Fraud detection trend analysis, state-wise compliance ranking, and interactive Cost Savings ROI calculator.
6. **Risk Scoring (`/dashboard/risk`)** — Dynamic 5-factor risk calculator with visual gauge, automatic tier assignment, and state-wise risk heatmap.
