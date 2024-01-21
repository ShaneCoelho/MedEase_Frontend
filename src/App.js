import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DoctorLogin from './pages/doctor/DoctorLogin/DoctorLogin';
import HomePage from './pages/HomePage/HomePage';
import PatientLogin from './pages/patient/PatientLoginSignup/PatientLogin';
import PatientSignup from './pages/patient/PatientLoginSignup/PatientSignup';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctorlogin" element={<DoctorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        {/* Remove one of the duplicate routes for "/patient-login" */}
        {/* <Route path="/patient-login" component={PatientLogin} /> */}
        <Route path="/patient-signup" element={<PatientSignup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
