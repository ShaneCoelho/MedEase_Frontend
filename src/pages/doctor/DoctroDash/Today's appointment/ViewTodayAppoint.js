import React, { useState, useEffect } from 'react';
import hostURL from '../../../../data/URL';
import Loading from '../../../Loading/Loading';
import { getToken } from "../../../../data/Token";
import StyleViewAppoint from './StyleViewAppoint';
import { NavLink, useNavigate } from 'react-router-dom';
import StyleHeader from '../StyleDocDash';
import { Drawer, Button } from 'antd';


const ViewTodayAppoint = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);
  const [token, setToken] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');


  useEffect(() => {
    const checkTokenCookie = () => {
      const retrivedToken = getToken('token');
      setHasToken(!!retrivedToken);
      setToken(retrivedToken);
    };

    checkTokenCookie();
    fetchData();
  }, [token, appointments]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const handleButtonClick = (item) => {
    // Handle button click based on the item
    console.log(`Button clicked for ${item}`);
  };
  const handleLogout = () => {
    console.log('Logout clicked');
    // Redirect to the logout page using React Router
    navigate('/logout');
  };
const navigate = useNavigate();



  const fetchData = async () => {
    try {
      const response = await fetch(hostURL.link + '/api/doctor/appointment/viewtodaysappointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
        setLoading(false);
      } else {
        console.error('Failed to fetch data. Server returned:', response.status, response.statusText);
        setLoading(false);
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
      setLoading(false);
    }
  };

  // const todayAppointments = appointments.filter(appointment => {
  //   const appointmentDate = new Date(appointment.date);
  //   const currentDate = new Date();
  //   return (
  //     appointmentDate.getDate() === currentDate.getDate() &&
  //     appointmentDate.getMonth() === currentDate.getMonth() &&
  //     appointmentDate.getFullYear() === currentDate.getFullYear()
  //   );
  // });

  const handleViewDocument = (documentUrl) => {
    window.open(documentUrl, '_blank');
  };
  return (
    <StyleHeader>                                
    <nav id="navbar" className="navbar order-last order-lg-0">
       <ul>
         <li>
           <Button className="navbtn" onClick={handleLogout}>
             Logout
           </Button>
         </li>
       </ul>
       <nav className="navbar">
         <ul>
         <li
             className={selectedOption === 'home' ? 'active' : ''}
             onClick={() => handleOptionChange('home')}
           >
             <NavLink to="/docdash">Home</NavLink>
           </li>
           <li
             className={selectedOption === 'today' ? 'active' : ''}
             onClick={() => handleOptionChange('today')}
           >
             <NavLink to="/viewtodayappoint">Today's Appointments</NavLink>
           </li>
           <li
             className={selectedOption === 'past' ? 'active' : ''}
             onClick={() => handleOptionChange('past')}
           >
             <NavLink to="/viewpastappoint">Past Appointments</NavLink>
           </li>
           <li
             className={selectedOption === 'cancel' ? 'active' : ''}
             onClick={() => handleOptionChange('cancel')}
           >
             <NavLink to="/cancelappoint">Cancel Appointments</NavLink>
           </li>
            <li
             className={selectedOption === 'review' ? 'active' : ''}
             onClick={() => handleOptionChange('review')}
           >
             <NavLink to="/viewreview">Reviews</NavLink>
           </li>
         </ul>
       </nav>
     </nav>
    <StyleViewAppoint>
      <div className="container">
        <div className="title">Today's Appointments</div>
        {loading ? (
          <Loading />
        ) : (
          <div className="appointment-list">
            {appointments.map(appointment => (
              <div key={appointment.appoint_id} className="appointment-item">
                <img
                  src={appointment.Patient_Avatar}
                  alt={appointment.patient_name}
                  className="profile-photo"
                />
                <div className="appointment-info">
                  <h2>{appointment.patient_name}</h2>
                  <p><strong>Time Slot:</strong> {appointment.time_slot}</p>
                  <p><strong>Description:</strong> {appointment.description}</p>
                  <button onClick={() => handleViewDocument(appointment.document)}>View Document</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </StyleViewAppoint>
    </StyleHeader>
  );
};

export default ViewTodayAppoint;
