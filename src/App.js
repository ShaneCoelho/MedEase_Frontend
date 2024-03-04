import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PatientLogin from './pages/patient/PatientLoginSignup/PatientLogin';
import PatientSignup from './pages/patient/PatientLoginSignup/PatientSignup';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';
import DoctorLogin from './pages/doctor/DoctorLogin/DoctorLogin';
import PatientDetails from './pages/patient/PatientDetails/PatientDetails';
import DoctorDetails from './pages/admin/DoctorDetails/DoctorDetails';
import ViewDoctor from './pages/patient/ViewDoctors/ViewDoctors';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'
import PatientAppoint from './pages/patient/PatientAppoint/PatientAppoint';
import DoctorList from './pages/patient/dummy/dummy'
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        {/* Remove the duplicate route for "/patient-login" */}
        <Route path="/patient-signup" element={<PatientSignup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/patient-details" element={<PatientDetails/>}/>
        <Route path="/doctor-details" element={<DoctorDetails/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/view-doctor" element={<ViewDoctor/>}/>
        <Route path="/patient-appoint" element={<PatientAppoint/>}/>
        <Route path="/doctor-list" element={<DoctorList/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
