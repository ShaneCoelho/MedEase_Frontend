import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PatientLogin from './pages/patient/PatientLoginSignup/PatientLogin';
import PatientSignup from './pages/patient/PatientLoginSignup/PatientSignup';
import AdminLogin from './pages/admin/AdminLogin/AdminLogin';
import DoctorLogin from './pages/doctor/DoctorLoginSignup/DoctorLogin';
import PatientDetails from './pages/patient/PatientDetails/PatientDetails';
import DoctorDetails from './pages/admin/DoctorDetails/DoctorDetails';
import ViewDoctor from './pages/patient/ViewDoctors/ViewDoctors';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact'
import DoctorAppoint from './pages/doctor/DoctorAppoint/DoctorAppoint';
import PatientAppoint from './pages/patient/PatientAppoint/PatientAppoint';
import TrackAppoint from './pages/patient/TrackAppointment/TrackAppoint';
import Home from './pages/Home/Home/Home';
import DoctorReview from './pages/doctor/DoctorReview/DoctorReview';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<HomePage />} />
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
        <Route path="/doctor-appoint" element={<DoctorAppoint/>}/>
        <Route path="/track-appoint" element={<TrackAppoint/>}/>
        <Route path="/doctor-review" element={<DoctorReview/>}/>




      </Routes>
    </BrowserRouter>
  );
}

export default App;
