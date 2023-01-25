import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Sidebar from "./Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import useStore from "../Store/store";
import config from "../../config";

const drawerWidth = 300;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Page({ children }) {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  let currentSession;
  const navigate = useNavigate();
  const logout = useStore((state) => state.logout);

  useEffect(() => {
    const currentUser = config.UserPool.getCurrentUser();
    if (currentUser) {
      currentUser.getSession((err, session) => {
        if (session.isValid()) {
          currentSession = session;
        } else {
          logout();
          navigate("/login");
        }
      });
    } else {
      logout();
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
          <Divider />
          <Sidebar toggleDrawer={() => setOpen(true)} />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
          }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
