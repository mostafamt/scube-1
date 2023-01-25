import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact-01.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ceu5hkv",
        "template_a7so1vy",
        form.current,
        "_22UFYmA1mhZDVrQc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8">
            <div className="section-title mt-45">
              <h3 className="title">Get in touch</h3>
            </div>
            <div className="contact-form form-style-four mt-15">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-input mt-15">
                      <label>Full Name</label>
                      <div className="input-items default">
                        <i className="lni lni-user"></i>
                        <input
                          type="text"
                          name="full_name"
                          // placeholder="Full Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-input mt-15">
                      <label>Email Address</label>
                      <div className="input-items default">
                        <i className="lni lni-envelope"></i>
                        <input
                          type="text"
                          name="email_address"
                          // placeholder="admin@uideck.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-input mt-15">
                      <label>Phone Number</label>
                      <div className="input-items default">
                        <i className="lni lni-phone"></i>
                        <input
                          type="text"
                          name="phone_number"
                          // placeholder="01234567890"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-input mt-15">
                      <label>Subject</label>
                      <div className="input-items default">
                        <i className="lni lni-bubble"></i>
                        <input
                          type="text"
                          name="subject" // placeholder="Type here"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-input mt-15">
                      <label>Your Message</label>
                      <div className="input-items default">
                        <i className="lni lni-pencil-alt"></i>
                        <textarea
                          name="message"
                          // placeholder="Type your message here"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-form mt-15">
                      <div className="input-form rounded-buttons">
                        <button
                          className="btn primary-btn rounded-full"
                          type="submit"
                        >
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-xl-1">
            <div className="section-title mt-5">
              <h3 className="title">Contact Information</h3>
            </div>
            <div className="contact-info">
              <ul className="info">
                <li>
                  <div className="single-info">
                    <div className="info-icon">
                      <i className="lni lni-map-marker"></i>
                    </div>
                    <div className="info-content">
                      <p className="text">6th of October City, Giza , Egypt.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info">
                    <div className="info-icon">
                      <i className="lni lni-phone"></i>
                    </div>
                    <div className="info-content">
                      <p className="text">+20 122 318 7514</p>
                    </div>
                  </div>
                </li>
                {/* <li>
                  <div className="single-info">
                    <div className="info-icon">
                      <i className="lni lni-phone-set"></i>
                    </div>
                    <div className="info-content">
                      <p className="text">+61 (8) 8234 3555</p>
                    </div>
                  </div>
                </li> */}
                <li>
                  <div className="single-info">
                    <div className="info-icon">
                      <i className="lni lni-envelope"></i>
                    </div>
                    <div className="info-content">
                      <p className="text">sales@scube-edutech.com</p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="social mt-5">
                <li>
                  <a>
                    <i className="lni lni-facebook-filled"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="lni lni-twitter-original"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="lni lni-instagram-original"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="lni lni-linkedin-original"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
