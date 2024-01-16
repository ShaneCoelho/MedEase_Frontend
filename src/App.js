import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DoctorLogin from './pages/DoctorLogin/DoctorLogin';
import HomePage from './pages/HomePage/HomePage';
import HomePage from '/pages/HomePage/H'
import PatientLogin from './pages/PatientLogin';
import PatientSignup from './pages/PatientSignup';
import AdminLogin from './pages/AdminLogin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctorlogin" element={<DoctorLogin />} />
        <Route path="/patient-login" component={PatientLogin}/>
        <Route path="/patient-signup" component={PatientSignup} />
        <Route path="/admin-login" component={AdminLogin} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


