import React from "react";
import ContactUs from "../../assets/images/ContactUs_1.svg";
const Contact = () => {
  return (
    <>
      <div className="row contact-row-padding">
        <div className="col-md-6 text-center display-none-mobile">
          <img src={ContactUs} alt="" height={400} />
        </div>
        <div className="col-md-6 contact-form">
          <h1>Have some questions?</h1>
          <form>
            <div className="form-group">
              <label htmlFor="firstName" className="login-form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter First Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="login-form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="login-form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="login-form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary login-form-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
