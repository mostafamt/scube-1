import React from "react";
import "./footer-02.css";
export default function Footer(props) {
  return (
    <footer className="footer-area footer-two">
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
