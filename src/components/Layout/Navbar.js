import { Person } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import PortraitIcon from "@mui/icons-material/Portrait";
import useStore from "../Store/store";
import config from "../../config";

export default function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const logout = useStore((state) => state.logout);
  const { pageTitle } = useStore((state) => state);

  const username = config.UserPool.getCurrentUser()?.getUsername();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="static" sx={{ background: "#fafafa" }}>
        <Toolbar>
          <Box mt={1} mb={2}>
            <img src="./static/images/scube.png" alt="scube logo" width={100} />
          </Box>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black", ml: 2 }}
          >
            {pageTitle}
          </Typography>
          <Stack direction="row" spacing={2}>
            {isLoggedIn ? (
              <Avatar
                id="profile-button"
                color="inherit"
                aria-controls={open ? "profile-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              ></Avatar>
            ) : (
              <Button color="secondary" href="/signin" component={"a"}>
                Log in
              </Button>
            )}
          </Stack>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            MenuListProps={{
              "aria-labelledby": "profile-button",
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              Welcome {username}
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => {
                navigate("/profile", { replace: true });
                setAnchorEl(null);
              }}
            >
              <ListItemIcon>
                <PortraitIcon />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                logout();
                setAnchorEl(null);
                navigate("/");
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
}
