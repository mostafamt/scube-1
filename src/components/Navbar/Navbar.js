import React from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config";
import useStore from "../Store/store";
import "./navbar-02.css";

export default function Navbar(props) {
  const navigate = useNavigate();

  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const logout = useStore((store) => store.logout);

  const user = config.UserPool.getCurrentUser();

  const handleLogout = () => {
    if (user) {
      user.signOut();
      logout();
      navigate("/");
    }
  };

  return (
    <section className="navbar-area navbar-two fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img src="./static/images/scube.png" alt="Logo" width={100} />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTwo"
                aria-controls="navbarTwo"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarTwo"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a
                      className={props.isActive.scube ? "active" : ""}
                      onClick={() => props.setIsActive({ scube: true })}
                      href="#scube"
                    >
                      Scube
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={props.isActive.why ? "active" : ""}
                      onClick={() => props.setIsActive({ why: true })}
                      href="#why"
                    >
                      Why Scube
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={props.isActive.about ? "active" : ""}
                      onClick={() => props.setIsActive({ about: true })}
                      href="#about"
                    >
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={props.isActive.services ? "active" : ""}
                      onClick={() => props.setIsActive({ services: true })}
                      href="#services"
                    >
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={props.isActive.contact ? "active" : ""}
                      onClick={() => props.setIsActive({ contact: true })}
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a>Support</a>
                  </li> */}
                </ul>
              </div>
              <div className="navbar-btn d-none d-sm-inline-block">
                {isLoggedIn ? (
                  <ul>
                    <li>
                      <a
                        className="btn primary-btn square"
                        href="/profile"
                        // onClick={() => {
                        //   navigate("/profile");
                        // }}
                      >
                        My Account
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn primary-btn-outline square"
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <a
                        className="btn primary-btn square"
                        onClick={() => {
                          navigate("/login");
                        }}
                      >
                        Sign In
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn primary-btn-outline square"
                        // onClick={() => {
                        //   navigate("/signup");
                        // }}
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
