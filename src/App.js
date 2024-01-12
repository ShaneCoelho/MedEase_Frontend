import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DoctorLogin from './pages/DoctorLogin/DoctorLogin';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctorlogin" element={<DoctorLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
