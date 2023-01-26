import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Layout from "../Layout/Layout";
import Profile from "../Profile/Profile";
import useStore from "../Store/store";
import config from "../../config";

let user;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(1);
  const [newPassword, setNewPassword] = useState("");

  // const isLoggedIn = true;
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const login = useStore((state) => state.login);
  const error = useStore((state) => state.error);
  const setError = useStore((state) => state.setError);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    setLoading(true);

    if (username === "" || password === "") {
      setError("* Fields are required");
      console.log(error);
      setLoading(false);
      return;
    }
    let params = {
      Username: username,
      Pool: config.UserPool,
    };
    user = new CognitoUser(params);
    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });
    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        login();
        setStage(2);
        setLoading(false);
        console.log("onSuccess:", data);
      },
      onFailure: (err) => {
        setStage(1);
        setLoading(false);
        setError(err.message);
        console.error("onFailure:", err);
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        setStage(3);
        setError("");
        setLoading(false);
        delete userAttributes.email_verified;
      },
    });
  };

  useEffect(() => {
    setError("");
    setLoading(false);
  }, []);

  return (
    <>
      {stage === 1 && !isLoggedIn && (
        <>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              {error && (
                <Alert sx={{ width: "100%" }} severity="error">
                  {error}
                </Alert>
              )}
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                {/* <p style={{ color: "red" }}>{error}</p> */}
                {/* {err && <div style={{ color: "red" }}>{err}</div>} */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  // disabled={isLoggedIn}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  {/* <Grid item>
              <Link href="signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid> */}
                </Grid>
              </Box>
            </Box>
          </Container>
          {/* <Footer /> */}
        </>
      )}
      {isLoggedIn && (
        <Layout>
          <Profile />
        </Layout>
      )}
      {stage === 3 && (
        <>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Set New Password
              </Typography>
              {error && (
                <Alert sx={{ width: "100%" }} severity="error">
                  {error}
                </Alert>
              )}
              <Box component="form" noValidate sx={{ mt: 1 }}>
                {/* <p style={{ color: "red" }}>{error}</p> */}
                {/* {err && <div style={{ color: "red" }}>{err}</div>} */}
                {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                /> */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="newPassword"
                  label="Password"
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  // disabled={isLoggedIn}
                >
                  {/* {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )} */}
                  Submit
                </Button>
              </Box>
            </Box>
          </Container>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}
