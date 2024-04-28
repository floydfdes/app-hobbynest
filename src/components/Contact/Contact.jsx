import ContactUs from "../../assets/images/contact-us.svg";
import React from "react";
import { notifyCreate } from "../../actions/toastNotifications";
import { sendContactUsEmail } from "../../actions/contactUs";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Contact = () => {
  const dispatch = useDispatch();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [contactFormData, setContactFormData] = useState(initialState);
  const onContactFormChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    for (let keys in contactFormData) {
      if (!contactFormData[keys]) {
        dispatch(
          notifyCreate({
            message: "Please fill all the fields",
            color: "error",
          })
        );
        return;
      }
    }
    const res = await dispatch(sendContactUsEmail(contactFormData));
    console.log(res);
    if (res) {
      dispatch(
        notifyCreate({
          message: res,
          color: "info",
        })
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
              {/* <label htmlFor="firstName" className="login-form-label">
                First Name
              </label> */}
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
              {/* <label htmlFor="lastName" className="login-form-label">
                Last Name
              </label> */}
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
              {/* <label htmlFor="email" className="login-form-label">
                Email address
              </label> */}
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
              {/* <label htmlFor="message" className="login-form-label">
                Message
              </label> */}
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
