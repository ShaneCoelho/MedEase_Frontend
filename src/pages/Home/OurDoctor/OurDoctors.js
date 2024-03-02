import './index.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Empty } from 'antd';

const OurDoctors = () => {
    // Dummy data for doctors
    const doctors = [
        { id: 1, firstName: "John", lastName: "Doe", designation: "Cardiologist", specialization: "Cardiology", img: "https://example.com/doctor1.jpg" },
        { id: 2, firstName: "Jane", lastName: "Smith", designation: "Dermatologist", specialization: "Dermatology", img: "https://example.com/doctor2.jpg" },
        { id: 3, firstName: "Alice", lastName: "Johnson", designation: "Pediatrician", specialization: "Pediatrics", img: "https://example.com/doctor3.jpg" },
        { id: 4, firstName: "Axe", lastName: "Wilson", designation: "Opthamalogist", specialization: "Opthamalogy", img: "https://example.com/doctor3.jpg" },
    ];

    let content = null;
    if (doctors.length === 0) {
        content = <div><Empty /></div>;
    } else {
        content = doctors.map((item, key) => (
            <div className="col-lg-6 mt-3" key={key + 2}>
                <div className="member d-flex align-items-start">
                    <div className="pic">
                        {item.img && <img src={item.img} className="img-fluid" alt="" />}
                    </div>
                    <div className="member-info">
                        <h4>{item.firstName + ' ' + item.lastName}</h4>
                        <span>{item.designation}</span>
                        <p>{item.specialization}</p>
                        <div className="social">
                            <a><FaFacebookSquare className='icon' /></a>
                            <a><FaInstagramSquare className='icon' /></a>
                            <a><FaLinkedin className='icon' /></a>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title text-center mb-3">
                    <h2>OUR DOCTORS</h2>
                    <p className='form-text'>Introducing one of the best doctors of the state</p>
                </div>

                <div className="row">
                    {content}
                </div>
            </div>
        </section>
    );
};

export default OurDoctors;
