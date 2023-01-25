import { Grid } from "@mui/material";
import React from "react";
import "./service-02.css";

export default function Scube() {
  return (
    <section
      id="scube"
      className="services-area services-two"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content">
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  alignContent="center"
                  alignItems="center"
                  margin="auto"
                  paddingBottom={5}
                >
                  <h1
                    className="fw-bold"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    SCube
                  </h1>
                  <h3
                    style={{
                      textAlign: "center",
                    }}
                  >
                    for Education Technology
                  </h3>
                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: "1.1rem",
                      color: "black",
                      paddingTop: 30,
                      lineHeight: "1.5",
                      letterSpacing: "0.00938em",
                      textAlign: "justify",
                    }}
                  >
                    <strong>SCube for Education Technology</strong> is an
                    Egyptian LLC Company that develops Smart Software Solutions
                    (S<sup>3</sup>).<strong> SCube</strong> has developed
                    several registered branded technologies and products.{" "}
                    <strong>SCube</strong> has a strong committed, qualified,
                    and aligned R&D team. Research-based innovative intelligent
                    solutions is our business charter, and Asynchronous
                    e-Learning is our focused domain of work. Our business
                    partner <strong>(CIT Global) </strong>has over 30+ years in
                    the Canadian market and has marketing arms in all continents
                    with a huge clientele.
                  </p>
                </Grid>
                <Grid item xs={12} sm={12} md={6} textAlign="center">
                  <img src="static/images/header3.png" width={"80%"} />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
