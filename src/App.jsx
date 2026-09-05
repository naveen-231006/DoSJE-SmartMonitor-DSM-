import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/Dashboard';
import NGOMonitor from './pages/NGOMonitor';
import Inspections from './pages/Inspections';
import Analytics from './pages/Analytics';
import RiskScoring from './pages/RiskScoring';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="ngos" element={<NGOMonitor />} />
          <Route path="inspections" element={<Inspections />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="risk" element={<RiskScoring />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
