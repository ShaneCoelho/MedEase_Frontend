import React, { useEffect } from 'react';
import Footer from '../Shared/Footer/Footer.js';
import { useForm } from 'react-hook-form';
import { FaLocationArrow, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Header from '../Shared/Header/Header.js';
import StyleContact from './StyleContact.js'; // Importing styled component
import SubHeader from '../Shared/SubHeader.js';
import { useContactMutation } from '../../redux/api/contactApi.js';
import { message } from 'antd';

const Contact = () => {
    const [contact, { isLoading, isError, error, isSuccess }] = useContactMutation();
    const { register, handleSubmit, reset } = useForm({});
    const onSubmit = (data) => {
        contact(data);
        reset();
    };
    
    useEffect(() => {
        if(isSuccess){
            message.success("Successfully Message Sent !");
        }
        if(isError && error){
            message.error(error?.data?.message);
        }
    }, [isSuccess, isError, error]);

    return (
        <>
            <Header />
            <SubHeader title="Contact us" subtitle="Connect with us: Your questions, feedback, and concerns matter—we're here to listen and assist." />
            <StyleContact> {/* Applying styled component */}
                <section id="contact" className="contact mt-5 mb-5">
                    <div className="container" style={{ marginTop: 80, marginBottom: 120 }}>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="info rounded p-3">
                                    <div className="d-flex mb-2 gap-2">
                                        <FaLocationArrow className='icon' />
                                        <div>
                                            <h4>Location:</h4>
                                            <p>1244 House, Vasai</p>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-2 gap-2">
                                        <FaEnvelope className='icon' />
                                        <div>
                                            <h4>Email:</h4>
                                            <p>xyz12@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-2 gap-2">
                                        <FaPhoneAlt className='icon' />
                                        <div>
                                            <h4>Call:</h4>
                                            <p>+91 0101010101</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="mb-5 p-2 rounded">
                                    <form className="row form-row" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="col-md-6">
                                            <div className="form-group mb-2 card-label">
                                                <label>First Name</label>
                                                <input required {...register("firstName")} className="form-control" placeholder='First Name'/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-2 card-label">
                                                <label>Last Name</label>
                                                <input required {...register("lastName")} className="form-control" placeholder='Last Name'/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-2 card-label">
                                                <label>Email</label>
                                                <input required {...register("email")} className="form-control" placeholder='Email'/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-2 card-label">
                                                <label>Message</label>
                                                <input required {...register("message")} className="form-control" placeholder='Message'/>
                                            </div>
                                        </div>

                                        {/* Rest of the form fields */}
                                        <div className="text-center mt-3 mb-5">
                                            <button disabled={isLoading} type='submit' className="appointment-btn">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            {/* eslint-disable-next-line */}
                            <iframe style={{ border: 0, width: "100%", height: "400px" }} src="https://www.google.com/maps/d/embed?mid=1AWQSGAOdBVr2_AWGhbhK-FftNYbPowk&ehbc=2E312F" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </section>
            </StyleContact>
            <Footer />
        </>
    );
};

export default Contact;
