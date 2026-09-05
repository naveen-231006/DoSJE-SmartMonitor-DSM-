// ── Indian States ──
export const indianStates = [
  'Andhra Pradesh', 'Bihar', 'Delhi', 'Gujarat', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Tamil Nadu',
  'Uttar Pradesh', 'West Bengal',
];

// ── NGO Data ──
export const ngos = [
  { id: 'NGO-1001', name: 'Asha Foundation', state: 'Maharashtra', district: 'Pune', tier: 1, riskScore: 78, compliance: 62, status: 'active', lastInspection: '2026-08-12', grantAmount: 72, beneficiaryCount: 245, cameras: 4, violations: 3, anomalyFlags: 5 },
  { id: 'NGO-1002', name: 'Sahayata Trust', state: 'Delhi', district: 'South Delhi', tier: 2, riskScore: 52, compliance: 78, status: 'active', lastInspection: '2026-08-20', grantAmount: 35, beneficiaryCount: 120, cameras: 2, violations: 1, anomalyFlags: 2 },
  { id: 'NGO-1003', name: 'Prayas Welfare Society', state: 'Uttar Pradesh', district: 'Lucknow', tier: 1, riskScore: 85, compliance: 55, status: 'active', lastInspection: '2026-07-15', grantAmount: 90, beneficiaryCount: 310, cameras: 4, violations: 5, anomalyFlags: 7 },
  { id: 'NGO-1004', name: 'Nirmal Seva Sansthan', state: 'Rajasthan', district: 'Jaipur', tier: 3, riskScore: 25, compliance: 92, status: 'active', lastInspection: '2026-08-28', grantAmount: 8, beneficiaryCount: 45, cameras: 1, violations: 0, anomalyFlags: 0 },
  { id: 'NGO-1005', name: 'Jan Kalyan Samiti', state: 'Bihar', district: 'Patna', tier: 2, riskScore: 48, compliance: 80, status: 'active', lastInspection: '2026-08-18', grantAmount: 42, beneficiaryCount: 180, cameras: 2, violations: 1, anomalyFlags: 1 },
  { id: 'NGO-1006', name: 'Disha Social Foundation', state: 'Gujarat', district: 'Ahmedabad', tier: 1, riskScore: 72, compliance: 65, status: 'inactive', lastInspection: '2026-06-30', grantAmount: 65, beneficiaryCount: 200, cameras: 4, violations: 4, anomalyFlags: 6 },
  { id: 'NGO-1007', name: 'Uday Charitable Trust', state: 'Karnataka', district: 'Bengaluru', tier: 3, riskScore: 18, compliance: 95, status: 'active', lastInspection: '2026-08-25', grantAmount: 12, beneficiaryCount: 60, cameras: 1, violations: 0, anomalyFlags: 0 },
  { id: 'NGO-1008', name: 'Samarpan NGO', state: 'Tamil Nadu', district: 'Chennai', tier: 2, riskScore: 55, compliance: 74, status: 'active', lastInspection: '2026-08-10', grantAmount: 38, beneficiaryCount: 150, cameras: 2, violations: 2, anomalyFlags: 3 },
  { id: 'NGO-1009', name: 'Jeevan Jyoti Foundation', state: 'Kerala', district: 'Kochi', tier: 3, riskScore: 20, compliance: 94, status: 'active', lastInspection: '2026-08-22', grantAmount: 15, beneficiaryCount: 70, cameras: 1, violations: 0, anomalyFlags: 1 },
  { id: 'NGO-1010', name: 'Seva Bharati', state: 'Madhya Pradesh', district: 'Bhopal', tier: 1, riskScore: 82, compliance: 58, status: 'active', lastInspection: '2026-07-20', grantAmount: 85, beneficiaryCount: 280, cameras: 4, violations: 4, anomalyFlags: 8 },
  { id: 'NGO-1011', name: 'Aadhar Samaj Sewa', state: 'West Bengal', district: 'Kolkata', tier: 2, riskScore: 45, compliance: 82, status: 'active', lastInspection: '2026-08-15', grantAmount: 28, beneficiaryCount: 95, cameras: 2, violations: 1, anomalyFlags: 1 },
  { id: 'NGO-1012', name: 'Gram Vikas Sansthan', state: 'Andhra Pradesh', district: 'Visakhapatnam', tier: 2, riskScore: 50, compliance: 76, status: 'active', lastInspection: '2026-08-05', grantAmount: 30, beneficiaryCount: 110, cameras: 2, violations: 2, anomalyFlags: 2 },
  { id: 'NGO-1013', name: 'Shakti Empowerment', state: 'Maharashtra', district: 'Mumbai', tier: 1, riskScore: 88, compliance: 50, status: 'active', lastInspection: '2026-07-01', grantAmount: 95, beneficiaryCount: 350, cameras: 4, violations: 6, anomalyFlags: 9 },
  { id: 'NGO-1014', name: 'Pragati Foundation', state: 'Gujarat', district: 'Surat', tier: 3, riskScore: 22, compliance: 91, status: 'active', lastInspection: '2026-08-26', grantAmount: 10, beneficiaryCount: 55, cameras: 1, violations: 0, anomalyFlags: 0 },
  { id: 'NGO-1015', name: 'Umang Welfare Trust', state: 'Delhi', district: 'North Delhi', tier: 2, riskScore: 58, compliance: 71, status: 'inactive', lastInspection: '2026-08-01', grantAmount: 48, beneficiaryCount: 165, cameras: 2, violations: 2, anomalyFlags: 4 },
];

// ── Alerts ──
export const alerts = [
  { id: 1, severity: 'critical', message: 'Camera offline for 6+ hours', ngo: 'NGO-1013', time: '2 min ago', detail: 'Camera 3 at Shakti Empowerment has been unreachable since 8:14 PM' },
  { id: 2, severity: 'critical', message: 'People count anomaly detected', ngo: 'NGO-1003', time: '15 min ago', detail: 'Expected 280 beneficiaries, counted 42 during distribution event' },
  { id: 3, severity: 'warning', message: 'Inspection overdue by 45 days', ngo: 'NGO-1006', time: '1 hr ago', detail: 'Last inspection was on June 30. No inspection scheduled.' },
  { id: 4, severity: 'warning', message: 'Grant utilization mismatch', ngo: 'NGO-1010', time: '2 hrs ago', detail: 'Reported 280 beneficiaries but ration purchase records show supply for 150' },
  { id: 5, severity: 'info', message: 'Compliance score improved', ngo: 'NGO-1004', time: '3 hrs ago', detail: 'Score increased from 88% to 92% after successful quarterly inspection' },
  { id: 6, severity: 'warning', message: 'Tamper detection triggered', ngo: 'NGO-1001', time: '4 hrs ago', detail: 'Camera 2 angle appears to have been manually adjusted' },
  { id: 7, severity: 'info', message: 'Scheduled inspection completed', ngo: 'NGO-1009', time: '5 hrs ago', detail: 'Inspector Ravi Kumar completed routine inspection. No issues found.' },
  { id: 8, severity: 'critical', message: 'Beneficiary identity mismatch', ngo: 'NGO-1013', time: '6 hrs ago', detail: 'Face verification failed for 12 out of 50 beneficiaries during VC session' },
];

// ── Compliance Trend (12 months) ──
export const complianceTrend = [
  { month: 'Oct', value: 62 },
  { month: 'Nov', value: 64 },
  { month: 'Dec', value: 63 },
  { month: 'Jan', value: 67 },
  { month: 'Feb', value: 69 },
  { month: 'Mar', value: 72 },
  { month: 'Apr', value: 71 },
  { month: 'May', value: 75 },
  { month: 'Jun', value: 78 },
  { month: 'Jul', value: 80 },
  { month: 'Aug', value: 82 },
  { month: 'Sep', value: 85 },
];

// ── Fraud Detection Trend ──
export const fraudTrend = [
  { month: 'Oct', detected: 8, prevented: 5 },
  { month: 'Nov', detected: 12, prevented: 9 },
  { month: 'Dec', detected: 15, prevented: 11 },
  { month: 'Jan', detected: 10, prevented: 8 },
  { month: 'Feb', detected: 18, prevented: 14 },
  { month: 'Mar', detected: 22, prevented: 19 },
  { month: 'Apr', detected: 16, prevented: 14 },
  { month: 'May', detected: 25, prevented: 22 },
  { month: 'Jun', detected: 20, prevented: 18 },
  { month: 'Jul', detected: 28, prevented: 25 },
  { month: 'Aug', detected: 30, prevented: 27 },
  { month: 'Sep', detected: 23, prevented: 21 },
];

// ── Inspections ──
export const inspections = [
  { id: 'INS-4501', ngoId: 'NGO-1001', ngoName: 'Asha Foundation', inspector: 'Ravi Kumar', date: '2026-09-06', time: '10:00 AM', status: 'scheduled', type: 'Surprise' },
  { id: 'INS-4502', ngoId: 'NGO-1003', ngoName: 'Prayas Welfare Society', inspector: 'Meena Sharma', date: '2026-09-07', time: '2:00 PM', status: 'scheduled', type: 'Surprise' },
  { id: 'INS-4503', ngoId: 'NGO-1010', ngoName: 'Seva Bharati', inspector: 'Amit Verma', date: '2026-09-08', time: '11:00 AM', status: 'scheduled', type: 'Follow-up' },
  { id: 'INS-4504', ngoId: 'NGO-1013', ngoName: 'Shakti Empowerment', inspector: 'Priya Desai', date: '2026-09-05', time: '9:00 AM', status: 'in-progress', type: 'Surprise' },
  { id: 'INS-4505', ngoId: 'NGO-1005', ngoName: 'Jan Kalyan Samiti', inspector: 'Suresh Yadav', date: '2026-09-04', time: '3:00 PM', status: 'completed', type: 'Routine' },
  { id: 'INS-4506', ngoId: 'NGO-1009', ngoName: 'Jeevan Jyoti Foundation', inspector: 'Ravi Kumar', date: '2026-09-04', time: '10:30 AM', status: 'completed', type: 'Routine' },
  { id: 'INS-4507', ngoId: 'NGO-1006', ngoName: 'Disha Social Foundation', inspector: 'Meena Sharma', date: '2026-09-09', time: '1:00 PM', status: 'scheduled', type: 'Re-audit' },
  { id: 'INS-4508', ngoId: 'NGO-1015', ngoName: 'Umang Welfare Trust', inspector: 'Amit Verma', date: '2026-09-10', time: '11:30 AM', status: 'scheduled', type: 'Follow-up' },
];

// ── State Performance ──
export const statePerformance = [
  { state: 'Kerala', compliance: 94, ngos: 420 },
  { state: 'Karnataka', compliance: 89, ngos: 680 },
  { state: 'Tamil Nadu', compliance: 86, ngos: 750 },
  { state: 'Gujarat', compliance: 83, ngos: 620 },
  { state: 'Maharashtra', compliance: 78, ngos: 1200 },
  { state: 'West Bengal', compliance: 76, ngos: 540 },
  { state: 'Andhra Pradesh', compliance: 74, ngos: 480 },
  { state: 'Delhi', compliance: 72, ngos: 350 },
  { state: 'Rajasthan', compliance: 70, ngos: 580 },
  { state: 'Madhya Pradesh', compliance: 67, ngos: 520 },
  { state: 'Bihar', compliance: 63, ngos: 710 },
  { state: 'Uttar Pradesh', compliance: 58, ngos: 1150 },
];

// ── Daily People Counts (for NGO detail) ──
export const dailyPeopleCounts = [
  { day: 'Mon', count: 185 },
  { day: 'Tue', count: 210 },
  { day: 'Wed', count: 45 },
  { day: 'Thu', count: 195 },
  { day: 'Fri', count: 220 },
  { day: 'Sat', count: 88 },
  { day: 'Sun', count: 30 },
];
