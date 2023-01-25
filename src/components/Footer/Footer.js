import React from "react";
import "./footer-02.css";
export default function Footer(props) {
  return (
    <footer className="footer-area footer-two">
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-sm-12">
              <div className="f-about">
                <div className="footer-logo">
                  <a>
                    <img
                      src="./static/images/scube.png"
                      width={100}
                      alt="Logo"
                    />
                  </a>
                </div>
                <p className="text">
                  The provider of research-based innovative intelligent
                  solutions for Asynchronous e-Learning.
                </p>
                <ul className="social">
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
                      <i className="lni lni-instagram-filled"></i>
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
            <div className="col-xl-2 col-lg-2 col-sm-4">
              <div className="footer-link">
                <h6 className="footer-title">Company</h6>
                <ul>
                  <li>
                    <a
                      href="#scube"
                      onClick={() => props.setIsActive({ scube: true })}
                    >
                      SCube
                    </a>
                  </li>
                  <li>
                    <a
                      href="#why"
                      onClick={() => props.setIsActive({ why: true })}
                    >
                      Why SCube
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={() => props.setIsActive({ about: true })}
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={() => props.setIsActive({ contact: true })}
                    >
                      Contact
                    </a>
                  </li>
                  {/* <li>
                    <a>Marketing</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
              <div className="footer-link">
                <h6 className="footer-title">Services</h6>
                <ul>
                  <li>
                    <a
                      href="#services"
                      onClick={() => props.setIsActive({ services: true })}
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a>Business</a>
                  </li>
                  <li>
                    <a>Developer</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
              <div className="footer-link">
                <h6 className="footer-title">Help & Suuport</h6>
                <ul>
                  <li>
                    <a>Support Center</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                  <li>
                    <a>Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright text-center">
                <p className="text">
                  Copyright © {new Date().getFullYear()} SCube for Education
                  Technology. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
