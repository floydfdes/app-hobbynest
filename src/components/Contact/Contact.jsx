import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { sendContactUsEmail } from '../../Actions/contactUs';
import { notifyCreate } from '../../Actions/toastNotifications';
import ContactUs from '../../assets/images/contact-us.svg';

const Contact = () => {
  const dispatch = useDispatch();
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };
  const [contactFormData, setContactFormData] = useState(initialState);

  const onContactFormChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = [];

    if (!contactFormData.firstName.trim()) {
      errors.push('First name is required');
    }
    if (!contactFormData.lastName.trim()) {
      errors.push('Last name is required');
    }
    if (!contactFormData.email.trim()) {
      errors.push('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(contactFormData.email)) {
      errors.push('Email is invalid');
    }
    if (!contactFormData.message.trim()) {
      errors.push('Message is required');
    }

    return errors;
  };

  const sendEmail = async () => {
    const errors = validateForm();

    if (errors.length > 0) {
      dispatch(
        notifyCreate({
          message: errors.join('. '),
          color: 'error',
        }),
      );
      return;
    }

    const res = await dispatch(sendContactUsEmail(contactFormData));
    if (res) {
      dispatch(
        notifyCreate({
          message: res,
          color: 'info',
        }),
      );
      setContactFormData(initialState);
    }
  };

  return (
    <>
      <div className="row contact-row-padding">
        <div className="col-md-6 col-sm-12 text-center display-none-mobile">
          <img
            className="contact-image"
            src={ContactUs}
            loading="lazy"
            alt=""
            height={400}
            width={500}
          />
        </div>
        <div className="col-md-6 col-sm-12 contact-form">
          <h1>Have some questions?</h1>
          <form>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={onContactFormChange}
                value={contactFormData.firstName}
                placeholder="Enter First Name"
                autoComplete="off"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={onContactFormChange}
                value={contactFormData.lastName}
                placeholder="Enter Last Name"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={onContactFormChange}
                value={contactFormData.email}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-3">
              <textarea
                className="form-control"
                id="message"
                name="message"
                onChange={onContactFormChange}
                value={contactFormData.message}
                placeholder="Enter Message"
              ></textarea>
            </div>

            <button
              onClick={sendEmail}
              type="button"
              className="btn btn-primary main-page-button login-form-button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
