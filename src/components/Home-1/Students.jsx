import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Grid as MGrid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Grid, Pagination, Navigation } from "swiper";
import { Container, Typography } from "@mui/material";

const studentImgs = [
  [
    "/assets/student-1.jpg",
    "/assets/student-2.jpg",
    "/assets/student-3.jpg",
    "/assets/student-4.jpg",
    "/assets/student-1.jpg",
    "/assets/student-2.jpg",
    "/assets/student-3.jpg",
    "/assets/student-4.jpg",
  ],
  [
    "/assets/student-1.jpg",
    "/assets/student-2.jpg",
    "/assets/student-3.jpg",
    "/assets/student-4.jpg",
    "/assets/student-1.jpg",
    "/assets/student-2.jpg",
    "/assets/student-3.jpg",
    "/assets/student-4.jpg",
  ],
];

const studentImgTexts = [
  [
    "Grade 4",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 4",
    "Grade 2",
    "Grade 3",
    "Grade 4",
  ],
  [
    "Grade 4",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 4",
    "Grade 2",
    "Grade 3",
    "Grade 4",
  ],
];

const Students = () => {
  return (
    <Box className="students">
      <img src="/assets/garden.png" alt="garden" className="garden" />
      <img
        src="/assets/play_pencil_girl.png"
        alt="garden"
        className="garden-girl"
      />
      <img
        src="/assets/play_pencil_boy.png"
        alt="garden"
        className="garden-boy"
      />
      <div className="container">
        <Typography variant="h2" className="section-title">
          Stars of The month
        </Typography>

        <MGrid container spacing={4}>
          <MGrid item xs={8}>
            <Box
              sx={
                {
                  // height: "20rem",
                  // minHeight: "26rem",
                  // maxBlockSize: "26rem",
                  // maxHeight: "5rem",
                }
              }
            >
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                style={{
                  width: "100%",
                }}
              >
                {studentImgs.map((slide, index) => (
                  <SwiperSlide key={index}>
                    {studentImgs[index].map((img, idx) => (
                      <Box key={idx} className="img-box">
                        <Box
                          sx={{
                            minHeight: "15rem",
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
                        {/* <img src={img} alt="student" />
                        <Box className="img-content">
                          <Typography>Student Name</Typography>
                          <Typography>Grade 4</Typography>
                        </Box> */}
                      </Box>
                    ))}
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </MGrid>
          <MGrid item xs={4}>
            <Box className="message">
              <Typography className="sub-header">Message to Parents</Typography>
              <Typography>
                Our students of today are the leaders of tomorrow; their
                learning knowledge are the society-uplifting arm, as much
                knowledge they gain and understand as much our society and
                economy will boom. Let us SCube and You, the parents, work
                together hand in hand to help our future leaders gain knowledge
                and learn the best.
              </Typography>
            </Box>
          </MGrid>
        </MGrid>
        {/* </Container> */}
      </div>
    </Box>
  );
};

export default Students;
