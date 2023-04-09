import React, { lazy, Suspense } from "react";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { Routes, Route } from "react-router-dom";

// import Layout from "../src/components/Layout/Layout";
import Home from "./components/Home-2/Home";
// import Home from "./components/Home-1/Home";
import "./styles.css";

import "./index.scss";

// const Login = lazy(() => import("./components/Auth/Login"));
// const PageNotFound = lazy(() =>
//   import("./components/PageNotFound/PageNotFound")
// );
// const Profile = lazy(() => import("./components/Profile/Profile"));
// const Groups = lazy(() => import("./components/Admin/Groups/Groups"));
// const Group = lazy(() => import("./components/Admin/Groups/Group"));

// toggle between ['znc', 'mansoura']
const schoolName = "mansoura";

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
      <Suspense fallback={<p>Loading…</p>}>
        <Routes>
          <Route path="/" element={<Home schoolName={schoolName} />} />
          <Route path="/home" element={<Home schoolName={schoolName} />} />

          {/* <Route path="/login" element={<Login />} />

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
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
