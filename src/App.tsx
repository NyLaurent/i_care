import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DiagnosticReports from "./pages/DiagnosticReports";
import MedicalHistory from "./pages/MedicalHistory";
import Prescriptions from "./pages/Prescriptions";
import DoctorProfile from "./pages/DoctorProfile";
import NurseProfile from "./pages/NurseProfile";
import AiFeatures from "./pages/AiFeatures";
import HealthProgram from "./pages/HealthProgram";
import OrderTest from "./pages/OrderTest";
import PatientMeasures from "./pages/PatientMeasures";
import Reminder from "./pages/Reminder";
import Financial from "./pages/Financial";
import TrackEntries from "./pages/TrackEntries";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { AuthProvider } from "./context/AuthContext";
import Help from "./pages/Help";
import Layout from "./components/Layout";
import PatientVitals from "./pages/PatientVitals";
import MedicationSchedule from "./pages/MedicationSchedule";
import PatientRecords from "./pages/PatientRecords";
import ShiftSchedule from "./pages/ShiftSchedule";
import LaboratoryDashboard from "./pages/LaboratoryDashboard";
import TestResults from "./pages/TestResults";
import Equipment from "./pages/Equipment";
import Inventory from "./pages/Inventory";
import QualityControl from "./pages/QualityControl";
import LaboratoryProfile from "./pages/LaboratoryProfile";
import TestRequests from "./pages/TestRequests";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route element={<Layout />}>
              <Route
                path="/diagnostic-reports"
                element={<DiagnosticReports />}
              />
              <Route path="/medical-history" element={<MedicalHistory />} />
              <Route path="/prescriptions" element={<Prescriptions />} />
              <Route path="/health-program" element={<HealthProgram />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/doctor-profile" element={<DoctorProfile />} />
              <Route path="/nurse-profile" element={<NurseProfile />} />
              <Route path="/ai-features" element={<AiFeatures />} />
              <Route path="/help" element={<Help />} />
              <Route path="/tracking" element={<TrackEntries />} />
              <Route path="/order-test" element={<OrderTest />} />
              <Route path="/patient-measures" element={<PatientMeasures />} />
              <Route path="/reminder" element={<Reminder />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/patient-vitals" element={<PatientVitals />} />
              <Route
                path="/medication-schedule"
                element={<MedicationSchedule />}
              />
              <Route path="/patient-records" element={<PatientRecords />} />
              <Route path="/shift-schedule" element={<ShiftSchedule />} />
              <Route path="/laboratory">
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<LaboratoryDashboard />} />
                <Route path="test-results" element={<TestResults />} />
                <Route path="test-requests" element={<TestRequests />} />
                <Route path="equipment" element={<Equipment />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="quality-control" element={<QualityControl />} />
                <Route path="help" element={<Help />} />
                <Route path="profile" element={<LaboratoryProfile />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
