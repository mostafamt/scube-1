import React from "react";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
// import Home from "./components/Home/Home"
import Profile from "./components/Profile/Profile";
// import HomePage from "./components/Home/HomePage";
import Groups from "./components/Admin/Groups/Groups";
import Layout from "../src/components/Layout/Layout";
import Group from "./components/Admin/Groups/Group";
import Home from "./components/Home-1/Home";
import "./styles.css";

function App() {
  let theme = createTheme({
    palette: {
      primary: { main: "#0594a9" },
      secondary: { main: "#d2b96f" },
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/groups"
          element={
            <Layout>
              <Groups />
            </Layout>
          }
        />
        <Route
          path="/group"
          element={
            <Layout>
              <Group />
            </Layout>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
