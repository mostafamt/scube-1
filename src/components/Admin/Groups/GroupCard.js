import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./card-02.css";
export default function GroupCard(props) {
  return (
    <>
      <Box>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container>
            {/*  <Grid item xs={12} mb={2}>
              <Typography sx={{ fontSize: 20 }}>Group Details</Typography>
               <Divider /> 
            </Grid>*/}
            <Card sx={{ width: "100%", ml: 2, mr: 2 }}>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12} mb={2}>
                    <Typography sx={{ fontSize: 20 }}>Group Details</Typography>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>
                      <strong>Group Name: </strong>
                      {props.group.GroupName}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>
                      <strong>Creation Date: </strong>
                      {props.group.CreationDate}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>
                      <strong>Description: </strong>
                      {props.group.Description}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
