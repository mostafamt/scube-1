import React from "react";
import "./about-01.css";
export default function Why() {
  return (
    <section id="why" className="about-area about-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-title text-center">
              <h2 className="title fw-bold">Why SCube</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-8">
            <div className="single-about-items">
              <div className="items-icon">
                <i className="lni lni-arrows-horizontal"></i>
              </div>
              <div className="items-content">
                <h4 className="items-title">
                  Paradigm Shift from Teaching to Learning
                </h4>
                <p className="text">
                  Learning Experiences Instead of Teaching Learning Experiences
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-8">
            <div className="single-about-items">
              <div className="items-icon">
                <i className="lni lni-graduation"></i>
              </div>
              <div className="items-content">
                <h4 className="items-title">Adaptive & Personalized Model</h4>
                <p className="text">
                  Instructional Design Theories (RBT) - Learning Styles Model
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-8">
            <div className="single-about-items">
              <div className="items-icon">
                <i className="lni lni-target"></i>
              </div>
              <div className="items-content">
                <h4 className="items-title"> Learner’s Model is Central</h4>
                <p className="text">
                  All Activities should be adapted according to the student
                  model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
