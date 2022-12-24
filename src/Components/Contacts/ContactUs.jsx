import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import {
  MdOutlinePhoneInTalk,
  MdMailOutline,
  MdOutlineFmdGood,
} from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <SectionTitle title="Contact" descr="Let's discuss your project" />
        <div className="contact_info">
          <p className="mt-5">
            <MdOutlinePhoneInTalk className="me-3" /> +91 99999 69262
          </p>
          <p>
            <MdMailOutline className="me-3" /> pkpandit@gmail.com
          </p>
          <p>
            <MdOutlineFmdGood className="me-3" /> 245 King Street, Touterie
            Victoria 8520 Australia
          </p>
        </div>
      </div>
      <div className="col-sm-6">
        <form className="row gx-5 form_contact">
          <div className="col-md-12 mb-4">
            <p>
              I'm always open to discussing product
              <br />
              <span>design work or partnerships.</span>
            </p>
          </div>
          <div className="col-md--12 mb-4">
            <label for="inputAddress" className="form-label">
              Name <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>
          <div className="col-md-6 mb-4">
            <label for="contact_name" className="form-label">
              Email <span>*</span>
            </label>
            <input type="email" className="form-control" id="contact_name" />
          </div>
          <div className="col-md-6 mb-4">
            <label for="contact_subject" className="form-label">
              Subject <span>*</span>
            </label>
            <input type="text" className="form-control" id="contact_subject" />
          </div>
          <div className="col-md-12 mb-4">
            <label for="contact_message" className="form-label">
              Message <span>*</span>
            </label>
            <textarea
              className="form-control"
              id="contact_message"
              rows="3"
            ></textarea>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
