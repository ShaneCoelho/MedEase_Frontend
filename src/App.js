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
import Contact from './pages/Contact/Contact';
import DoctorAppoint from './pages/doctor/DoctorAppoint/DoctorAppoint';
import PatientAppoint from './pages/patient/PatientAppoint/PatientAppoint';
import TrackAppoint from './pages/patient/TrackAppointment/TrackAppoint';
import Home from './pages/Home/Home/Home';
import PatientReview from './pages/patient/PatientReviews/PatientReview';
import Reviews from './pages/Reviews/Reviews';
import FindDoc from './pages/patient/FindDoc/FindDoc';
import DocDash from './pages/doctor/DoctroDash/DocDash';
import NearbyDoc from './pages/patient/NearbyDoc/NearbyDoc';
import FindLocation from './pages/patient/FindLocation/Findlocation';
import Symptoms from './pages/Symptoms/Symptoms';
import ViewTodayAppoint from './pages/doctor/DoctroDash/Today\'s appointment/ViewTodayAppoint';
import ViewPastAppoint from './pages/doctor/DoctroDash/Past appointments/ViewPastAppoint';
import CancelAppoint from './pages/doctor/DoctroDash/Cancel appoinment/CancelAppoint';
import ViewReview from './pages/doctor/DoctroDash/Reviews/ViewReview';
import Loc from './pages/patient/Dummy/loc'






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
        <Route path="/patient-review" element={<PatientReview/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/find-doc" element={<FindDoc/>}/>
        <Route path="/nearby-doc" element={<NearbyDoc/>}/>
        <Route path="/find-location" element={<FindLocation/>}/>
        <Route path="/symptoms" element={<Symptoms/>}/>
        <Route path="/loc" element={<Loc/>}/>



        <Route path="/docdash" element={<DocDash/>}/>
        <Route path="/viewtodayappoint" element={<ViewTodayAppoint/>}/>
        <Route path="/viewpastappoint" element={<ViewPastAppoint/>}/>
        <Route path="/cancelappoint" element={<CancelAppoint/>}/>
        <Route path="/viewreview" element={<ViewReview/>}/>



        








      </Routes>
    </BrowserRouter>
  );
}

export default App;
