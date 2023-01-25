import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Login from "../Auth/Login";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import config from "../../config";
import useStore from "../Store/store";

export default function Profile(props) {
  const [userAttributes, setUserAttributes] = useState([]);
  const { isLoggedIn, setPageTitle, setSelectedIndex } = useStore(
    (state) => state
  );
  useEffect(() => {
    setPageTitle("Profile");
    setSelectedIndex(-1);

    const user = config.UserPool.getCurrentUser();
    if (user) {
      user.getSession((err, session) => {
        if (err) {
          console.log(err.message);
        } else {
          user.getUserAttributes((err, attributes) => {
            if (err) {
              console.log(err.message);
            } else {
              setUserAttributes(attributes);
            }
          });
        }
      });
    }
  }, []);

  const user = {};
  for (let i of userAttributes) {
    user[i.Name] = i.Value;
  }

  return (
    <>
      {isLoggedIn && (
        <>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 4,
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item lg={4} md={6} xs={12}>
                  <ProfileCard user={user} />
                </Grid>
                <Grid item lg={8} md={6} xs={12}>
                  <ProfileDetails user={user} />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </>
      )}
    </>
  );
}
