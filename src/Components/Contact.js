import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        emailjs.init("wzq9OLhxXoxx5a4DJ"); 
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            message: formData.message,
            phone: formData.phone
        };

        emailjs.send("service_6ddgswp", "template_elkcfnx", data)
            .then((response) => {
                console.log("Email sent successfully", response);
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error("Error sending email", error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
            });
    };

    return (
        <div className="contact-container container-fluid">
            <div className="contact-header text-center">
                <h1>Contact</h1>
            </div>

            {showSuccessMessage && <div className="alert alert-success text-center">Your response is submitted!</div>}
            {showFailureMessage && <div className="alert alert-danger text-center">Submission failed. Please try again later.</div>}
            
            <div className="row contact-box mt-5">
                <p className="contact-subtext text-center"><b>If you have any questions or want to get in touch, feel free to reach out to me:</b></p>

                <div className="col-lg-8 col-md-10 mx-auto">
                    <h2 className="requirement-heading text-center">Write about your requirement:</h2>

                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">  
                                <label htmlFor="user-first-name" className="form-label">First Name:</label>
                                <div className="input-container">
                                    <FontAwesomeIcon icon={faUser} className="input-icon" aria-label="User Icon" />
                                    <input
                                        name="firstName"
                                        id="user-first-name"
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter Your First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">  
                                <label htmlFor="user-last-name" className="form-label">Last Name:</label>
                                <div className="input-container">
                                    <FontAwesomeIcon icon={faUser} className="input-icon" aria-label="User Icon" />
                                    <input
                                        name="lastName"
                                        id="user-last-name"
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter Your Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">  
                                <label htmlFor="user-email" className="form-label">Email Address:</label>
                                <div className="input-container">
                                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" aria-label="Email Icon" />
                                    <input
                                        name="email"
                                        id="user-email"
                                        className="form-control"
                                        type="email"
                                        placeholder="Enter Your Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">  
                                <label htmlFor="user-phone" className="form-label">Phone Number:</label>
                                <div className="input-container">
                                    <FontAwesomeIcon icon={faPhone} className="input-icon" aria-label="Phone Icon" />
                                    <input
                                        name="phone"
                                        id="user-phone"
                                        className="form-control"
                                        type="tel"
                                        placeholder="Enter Your Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="user-message" className="form-label">Message:</label>
                            <div className="input-container">
                                <FontAwesomeIcon icon={faClipboardList} className="input-icon message-icon" aria-label="Message Icon" />
                                <textarea
                                    name="message"
                                    id="user-message"
                                    className="form-control"
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
            <h4 className="rights">© Pavan Karthik Udayagiri. All rights reserved</h4>
        </div>
    );
};

export default Contact;
