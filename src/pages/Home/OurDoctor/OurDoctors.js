import './StyleOurDoctor.js';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Empty } from 'antd';
import StyleOurDoctor from './StyleOurDoctor.js'
import lyris from './Profile/lyris.webp'
import ynez from './Profile/ynez.jpg'
import shane from './Profile/shane.jpg'
import dewain from './Profile/profile.jpg'


const OurDoctors = () => {
    // Dummy data for doctors
    const doctors = [
        { id: 1, firstName: "Shane", lastName: "Coelho", designation: "Cardiologist", specialization: "Cardiology", img: shane },
        { id: 2, firstName: "Ynez ", lastName: "Dias", designation: "Orthopedic", specialization: "Orthopedic Oncology", img: ynez },
        { id: 3, firstName: "Dewain", lastName: "Diago",  designation: "Cardiologist", specialization: "Cardiology", img: dewain },
        { id: 4, firstName: "Lyris ", lastName: "Dsilva", designation: "Orthopedic", specialization: "Pediatrics Orthopedic ", img: lyris },
    ];

    let content = null;
    if (doctors.length === 0) {
        content = <div><Empty /></div>;
    } else {
        content = doctors.map((item, key) => (
            <div className="col-lg-6 mt-3" key={key + 2}>
                <div className="member d-flex align-items-start">
                    <div className="pic">
                        {item.img && <img src={item.img} className="img-fluid rounded-circle" alt="" />}
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
        <StyleOurDoctor>
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
        </StyleOurDoctor>
    );
};

export default OurDoctors;
