import React from "react";
import "./slider-01.css";
export default function Slider() {
  return (
    <section className="slider-area slider-one">
      <div className="bd-example">
        <div
          id="carouselOne"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselOne"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#carouselOne" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselOne" data-bs-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div
              className="carousel-item bg_cover active"
              style={{
                backgroundImage: "url(../static/images/3.png)",
              }}
            >
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-sm-10">
                      <h2 className="carousel-title">
                        One Size Does Not Fit All
                      </h2>
                      <p style={{ fontSize: 22 }} className="text">
                        Students come from a variety of backgrounds, cultures,
                        schools, and learning abilities, so we cannot think that
                        one curriculum, or one pair of pants, can fit all.
                      </p>
                      {/* <ul className="carousel-btn rounded-buttons">
                        <li>
                          <a className="btn primary-btn rounded-full">
                            GET STARTED
                          </a>
                        </li>
                        <li>
                          <a className="btn primary-btn-outline rounded-full">
                            DOWNLOAD
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="carousel-item bg_cover"
              style={{
                backgroundImage: "url(../static/images/2.png)",
              }}
            >
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-sm-10">
                      <h2 className="carousel-title">Private Tutoring </h2>
                      <p style={{ fontSize: 22 }} className="text">
                        One-on-One (private) tutoring increases performance to
                        around 98% in a standard classroom [Bloom,1984].
                      </p>

                      {/* <ul className="carousel-btn rounded-buttons">
                        <li>
                          <a className="btn primary-btn rounded-full">
                            GET STARTED
                          </a>
                        </li>
                        <li>
                          <a className="btn primary-btn-outline rounded-full">
                            DOWNLOAD
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="carousel-item bg_cover"
              style={{
                backgroundImage: "url(../static/images/4.png)",
              }}
            >
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-sm-10">
                      <h2 className="carousel-title">SCube is Different</h2>
                      <p style={{ fontSize: 22 }} className="text">
                        Delivers Personalized teaching strategies to match each
                        learner’s learning style Merged FSLSM + Kolb’s models
                        (Scube Model)
                      </p>

                      {/* <ul className="carousel-btn rounded-buttons">
                        <li>
                          <a className="btn primary-btn rounded-full">
                            GET STARTED
                          </a>
                        </li>
                        <li>
                          <a className="btn primary-btn-outline rounded-full">
                            DOWNLOAD
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselOne"
            role="button"
            data-bs-slide="prev"
          >
            <i className="lni lni-chevron-left"></i>
          </a>

          <a
            className="carousel-control-next"
            href="#carouselOne"
            role="button"
            data-bs-slide="next"
          >
            <i className="lni lni-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
