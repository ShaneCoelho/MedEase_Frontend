import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DoctorLogin from './pages/doctor/DoctorLogin/DoctorLogin';
import HomePage from './pages/HomePage/HomePage';
// import HomePage from '/pages/HomePage/H'
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
        <Route path="/patient-login" component={PatientLogin}/>
        <Route path="/patient-signup" component={PatientSignup} />
        <Route path="/admin-login" component={AdminLogin} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


