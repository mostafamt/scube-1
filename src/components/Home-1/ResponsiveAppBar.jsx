import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import { displayPages, paths } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { login, logout } from "../store/authReducer";

const pages = ["Scube", "Why Scube", "About Us", "Services", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const displayPages = [
  "Scube",
  "Why Scube",
  "Our Message",
  "Services",
  "Contact",
];

const paths = ["header", "why-scube", "our-message", "services", "contact"];

function ResponsiveAppBar() {
  const navigate = useNavigate();

  const loggedIn = false;
  // const loggedIn = useSelector((state) => state.auth.loggedIn);
  // const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const { pathname } = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickLink = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="static"
      sx={{
        // backgroundColor: "#FFF",
        backgroundImage:
          "linear-gradient(135deg, rgb(32, 167, 172) 11%, rgb(33, 138, 174) 49%, rgb(24, 42, 115) 100% )",
      }}
      className="appbar"
    >
      <div className="container">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: {
              xl: "104rem",
              lg: "80rem",
            },
          }}
        >
          <Box
            sx={{
              flexGrow: 10,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
            }}
            className="scube-box"
          >
            <img src="/assets/scube.png" alt="logo" className="scube-logo" />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
            className="silk-box"
          >
            {/* <img src="/assets/silk-logo.png" alt="slik" height={"80"} /> */}
            <Typography className="silk-text">SILK MS</Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                color: "#000",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: "#000" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            <img src="/assets/scube.png" alt="logo" height={60} />
          </Box>
          <Box
            sx={{
              flexGrow: 4,
              display: { xs: "none", md: "flex" },
            }}
            className="nav-box"
          >
            <ul className="list-items">
              {displayPages.map((page, idx) => (
                <Link
                  key={idx}
                  className="list-link"
                  onClick={() => handleClickLink(paths[idx])}
                >
                  <li className="list-item">{page}</li>
                </Link>
              ))}
            </ul>
          </Box>

          <Box
            className="school-logo-box"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <img
              src="/assets/school-logo.png"
              alt="school-logo"
              className="school-logo"
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {loggedIn ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => {
                    return setting === "Logout" ? (
                      <MenuItem
                        key={setting}
                        // onClick={() => {
                        //   dispatch(logout());
                        //   handleCloseUserMenu();
                        // }}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ) : (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            ) : (
              <button className="my-button" onClick={() => navigate("/login")}>
                Log in
              </button>
            )}
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
}
export default ResponsiveAppBar;
