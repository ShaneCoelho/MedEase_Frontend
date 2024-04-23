import React, { useState, useEffect } from 'react';
import hostURL from '../../../../data/URL';
import Loading from '../../../Loading/Loading';
import { getToken } from "../../../../data/Token";
import StyleViewReview from './StyleViewReview';
import { NavLink, useNavigate } from 'react-router-dom';
import StyleHeader from '../StyleDocDash';
import { Drawer, Button } from 'antd';



const ViewReview = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');


  useEffect(() => {
    const retrivedToken = getToken('token');
    setToken(retrivedToken);
    fetchData();
  }, [token, selectedDate]);
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



  // Dummy data for testing
  const dummyPatients = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/150',
      rating: 4.5,
      review: 'Great experience!'
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://via.placeholder.com/150',
      rating: 5,
      review: 'Excellent service!'
    }
  ];

  const fetchData = async () => {
    // Simulate loading delay
    setTimeout(() => {
      setPatients(dummyPatients);
      setLoading(false);
    }, 1000);
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
    <StyleViewReview>
      <div className="patient-page-container">
        <div className="title">Reviews</div>
        {loading ? (
          <Loading />
        ) : (
          <div className="patient-list">
            {patients.map((patient, index) => (
              <div key={index} className="patient-item">
                <img src={patient.avatar} alt={patient.name} className="avatar" />
                <div className="patient-info">
                  <h3>{patient.name}</h3>
                  <div className="rating">{patient.rating}</div>
                  <div className="review">{patient.review}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </StyleViewReview>
    </StyleHeader>
  );
};

export default ViewReview;
