import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

const teacherImgs = [
  "/assets/teacher-1.jpg",
  "/assets/teacher-2.jpg",
  "/assets/teacher-3.jpg",
  "/assets/teacher-4.jpg",
];

const teacherNames = [
  "Teacher Name",
  "Teacher Name",
  "Teacher Name",
  "Teacher Name",
];

const teacherMajors = [
  "Physics Teacher",
  "Physics Teacher",
  "Physics Teacher",
  "Physics Teacher",
];

const Teachers = () => {
  return (
    <Box className="teachers">
      <div className="container">
        {/* <Container> */}
        <Typography variant="h2" className="section-title">
          Teachers of the Month
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={8}>
            <div
              style={{
                height: "25rem",
              }}
            >
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {teacherImgs.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Box
                      sx={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "#555",
                        color: "#fff",
                        fontSize: "5rem",
                        fontWeight: "100",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      ?
                    </Box>
                    {/* <img src={img} alt="teacher-3" height={"100%"} /> */}
                    {/* <Box className="img-content">
                      <Typography>{teacherNames[idx]}</Typography>
                      <Typography>{teacherMajors[idx]}</Typography>
                    </Box> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Box className="message">
              <Typography className="sub-header">
                Message to Teachers
              </Typography>
              <Typography>
                Teachers are the soldiers of the education army and the drivers
                of the vehicle of knowledge management, without them the vehicle
                of learning is out of gas. SCube SILK MS is relying on you to
                fuel the Knowledgebase with your innovative teaching ides and
                contents. Let us, SCube and You, the teaches, work together hand
                in hand to help our students to be the best over all of their
                peers and get the best education ever.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* </Container> */}
      </div>
    </Box>
  );
};

export default Teachers;
