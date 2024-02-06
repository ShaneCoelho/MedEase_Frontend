import React from "react";
import "./DoctorList.css";

const Doctor = ({ name, category, mobileNo, ig, patientReq, email, location }) => (
  <div className="doctor-card">
    <p className="doctor-name">{name}</p>
    <p className="category">{category}</p>
    <p className="mobile-no">{mobileNo}</p>
    <p className="ig">{ig}</p>
    <p className="patient-req">{patientReq}</p>
    <p className="email">{email}</p>
    <p className="location">{location}</p>
  </div>
);

const DoctorList = () => {
  const doctors = [
    {
      name: "krish",
      category: "Physician",
      mobileNo: "9632587410",
      ig: "",
      patientReq: "View Patients",
      email: "shiva.1000projects@gmail.com",
      location: "Hyderabad",
    },
    {
      name: "ramesh",
      category: "Physician",
      mobileNo: "9052016340",
      ig: "",
      patientReq: "Doctors's Req",
      email: "ramesh@gmail.com",
      location: "Hyderabad",
    },
  ];

  return (
    <div className="doctor-list">
      {doctors.map((doctor, index) => (
        <Doctor key={index} {...doctor} />
      ))}
    </div>
  );
};

export default DoctorList;