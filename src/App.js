import React, { lazy, Suspense } from "react";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Layout from "../src/components/Layout/Layout";
import Home from "./components/Home-2/Home";
// import Home from "./components/Home-1/Home";
import "./styles.css";

import "./index.scss";
import Shifting from "./components/Home-2/WhyPages/Shifting/Shifting";
import Adaptive from "./components/Home-2/WhyPages/Adaptive/Adaptive";
import Designed from "./components/Home-2/WhyPages/Designed/Designed";
import Analytics from "./components/Home-2/WhyPages/Analytics/Analytics";
import StudyRoom from "./components/Home-2/ServicesPages/StudyRoom/StudyRoom";
import SmartBook from "./components/Home-2/ServicesPages/SmartBook/SmartBook";
import FunLearning from "./components/Home-2/ServicesPages/FunLearning/FunLearning";
import Knowledge from "./components/Home-2/ServicesPages/Knowledge/Knowledge";
import AdaptiveLearning from "./components/Home-2/ServicesPages/PersonalizedLearning/PersonalizedLearning";
import PersonalizedLearning from "./components/Home-2/ServicesPages/PersonalizedLearning/PersonalizedLearning";
import Follow from "./components/Home-2/ServicesPages/Follow/Follow";

const Login = lazy(() => import("./components/Auth/Login"));
const PageNotFound = lazy(() =>
  import("./components/PageNotFound/PageNotFound")
);
const Profile = lazy(() => import("./components/Profile/Profile"));
const Groups = lazy(() => import("./components/Admin/Groups/Groups"));
const Group = lazy(() => import("./components/Admin/Groups/Group"));

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
          <Route path="/shifting" element={<Shifting />} />
          <Route path="/adaptive" element={<Adaptive />} />
          <Route path="/designed" element={<Designed />} />
          <Route path="/analytics" element={<Analytics />} />

          <Route
            path="/personalized-learning"
            element={<PersonalizedLearning />}
          />
          <Route path="/study-room" element={<StudyRoom />} />
          <Route path="/fun-learning" element={<FunLearning />} />
          <Route path="/smart-book" element={<SmartBook />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/knowledge" element={<Knowledge />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
