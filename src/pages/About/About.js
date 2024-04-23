import React from 'react';
import './StyleAbout.js';
import StyleAbout from './StyleAbout.js';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ImageHeading from '../../images/doc/doctor 5.jpg';
import img from '../../images/logo.png';
import SubHeader from '../Shared/SubHeader';
import { useGetAllBlogsQuery } from '../../redux/api/blogApi';
import { Empty } from 'antd';
import { Link } from 'react-router-dom';
import { truncate } from '../../utils/truncate';
import { useGetDoctorsQuery } from '../../redux/api/doctorApi';

const About = () => {
    const { data, isLoading } = useGetAllBlogsQuery({ limit: 4 });
    const { data: doctorData, isLoading: DoctorIsLoading, isError: doctorIsError } = useGetDoctorsQuery({ limit: 4 });

    const blogData = data?.blogs;
    const doctors = doctorData?.doctors;

    let doctorContent = null;
    if (!DoctorIsLoading && !doctorIsError && doctors?.length === 0) {
        doctorContent = <div><Empty /></div>;
    } else if (!DoctorIsLoading && !doctorIsError && doctors?.length > 0) {
        doctorContent = doctors.map((item, id) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={id + item.id}>
                <div className="card shadow border-0 mb-5 mb-lg-0">
                    {item.img && <img src={item.img} className="img-fluid w-100" alt="" />}
                    <div className="p-2">
                        <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}><a>{item?.firstName + ' ' + item?.lastName}</a></h4>
                        <p>{item?.designation}</p>
                    </div>
                </div>
            </div>
        ));
    }

    let content = null;
    if (!isLoading && blogData?.length === 0) {
        content = <Empty />;
    } else if (!isLoading && blogData?.length > 0) {
        content = blogData.map((item, id) => (
            <div className="col-lg-3 col-md-6" key={id + item.id}>
                <div className="card shadow border-0 mb-5 mb-lg-0">
                    <img src={item?.img} alt="blog Image" width={300} height={200} className="w-100 rounded-top image-hover" style={{ objectFit: 'contain' }} />
                    <div className='p-2'>
                        <Link to={`/blog/${item?.id}`}>
                            <h6 className="text-start mb-1 text-capitalize" style={{ color: '#223a66' }}>{truncate(item?.title, 40)}</h6>
                        </Link>
                        <div className="px-2">
                            <p className="form-text text-start text-capitalize">{truncate(item?.description, 80)}</p>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <>
            <Header />
            <SubHeader title="ABOUT" subtitle="Empowering individuals with accessible and personalized healthcare solutions through innovative technology" />
            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row p-5">
                    <div className="col-lg-4">
                        <div className='section-title text-center'>
                            <h2 className='text-uppercase'>Our Doctors Achievement</h2>
                            <p className='form-text m-0'>Your health, our priority, together, we heal.</p>
                        </div>
                        <p className='mt-3'>Our doctors are renowned for their exceptional achievements in the field of healthcare. With extensive experience and expertise, they have consistently delivered exemplary care. Their commitment to advancing patient outcomes and fostering a culture of excellence ensures that each individual receives the highest standard of care possible. With a dedication to continuous learning and innovation, our doctors strive to remain at the forefront of medical advancements.</p>
                    </div>
                    <div className="col-lg-8">
                        <img src={ImageHeading} alt="" className="img-fluid rounded shadow" />
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row">
                    {content}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
