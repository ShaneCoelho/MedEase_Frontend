import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PatientLogin from './pages/patient/PatientLoginSignup/PatientLogin';
import PatientSignup from './pages/patient/PatientLoginSignup/PatientSignup';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';
import DoctorLogin from './pages/doctor/DoctorLogin';
import PatientDetails from './pages/patient/PatientLoginSignup/PatientDeatils';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        {/* Remove the duplicate route for "/patient-login" */}
        <Route path="/patient-signup" element={<PatientSignup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/patient-details" element={<PatientDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
