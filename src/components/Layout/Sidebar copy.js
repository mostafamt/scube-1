import {
  ExpandLess,
  ExpandMore,
  HistoryEdu,
  AdminPanelSettings,
  Work,
  ReceiptLong,
  School,
  LibraryBooks,
  Storefront,
  Home,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config";

const HomeData = [
  // { label: "Vision", link: "/vision" },
  { label: "About us", link: "/about-us" },
  // { label: "Strategy", link: "/strategy" },
  { label: "The Design Philosophy", link: "/design" },
  { label: "Solution & Platforms", link: "/solution" },
];

const ShopData = [
  { label: "Readers" },
  { label: "Courses" },
  { label: "Books" },
];
const uAuthorItData = [
  // { label: "About" },
  { label: "Smart Objects", link: "/los" },
  { label: "Interactive Objects", link: "/ios" },
  { label: "Lessons", link: "/lessons" },
  { label: "Courses", link: "/courses" },
];

const uStudyItData = [
  // { label: "About" },
  { label: "My Courses", link: "/st-courses" },
  { label: "My Private Lessons", link: "/st-lessons" },
];
const BookData = [
  // { label: "About" },
  { label: "Book Authoring", link: "/ebooks" },
  { label: "Book Reading", link: "/st-ebooks" },
];

const alumniData = [
  // { label: "About" },
  {
    label: "Q&A",
    sub: [{ label: "Question" }, { label: "Unanswered Questions" }],
  },
  {
    label: "My LXE Profile",
    sub: [{ label: "My Questions" }, { label: "My Answers" }],
  },
  // {  label: "My Answers" },
];

const careerData = [
  // { label: "About" },
  { label: "My CV" },
  { label: "My Career" },
];

const adminData = [
  { label: "Confirmations" },
  { label: "eCommerce" },
  { label: "JobKB" },
  { label: "Tenants", link: "/tenants" },
  { label: "Users", link: "/users" },
];

const Sidebar = (props) => {
  const [role, setRole] = useState("");
  useEffect(() => {
    const user = config.UserPool.getCurrentUser();
    user.getSession((err, session) => {
      if (err) {
        console.log(err.message);
      } else {
        setRole(session.idToken.payload["custom:role"]);
      }
    });
  }, []);

  const [state, setState] = useState({});
  const navigate = useNavigate();

  return (
    <List onClick={props.toggleDrawer}>
      {role === "admin" || role === "superadmin" ? (
        <>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              onClick={() => {
                setState({ openHome: !state.openHome });
                navigate("/home");
              }}
              selected={state.openHome}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
              {state.openHome ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {state.openHome &&
            HomeData.map((item) => (
              <ListItemButton
                onClick={() => navigate(item.link)}
                key={item.label}

                // sx={{
                //   py: 0,
                //   minHeight: 32,
                //   color: "rgba(255,255,255,.8)",
                // }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {/* {item.icon} */}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    // fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            ))}
        </>
      ) : null}
      {role === "admin" || role === "superadmin" ? (
        <>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              onClick={() => setState({ openShop: !state.openShop })}
              selected={state.openShop}
            >
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Shop" />
              {state.openShop ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {state.openShop &&
            ShopData.map((item) => (
              <ListItemButton
                onClick={() => navigate(item.link)}
                key={item.label}
                // sx={{
                //   py: 0,
                //   minHeight: 32,
                //   color: "rgba(255,255,255,.8)",
                // }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {/* {item.icon} */}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    // fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            ))}
        </>
      ) : null}
      {role === "admin" || role === "superadmin" || role === "teacher" ? (
        <>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              onClick={() => setState({ openAuthor: !state.openAuthor })}
              selected={state.openAuthor}
            >
              <ListItemIcon>
                <HistoryEdu />
              </ListItemIcon>
              <ListItemText primary="uAuthorIt" />
              {state.openAuthor ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {state.openAuthor &&
            uAuthorItData.map((item) => (
              <ListItemButton
                onClick={() => navigate(item.link)}
                key={item.label}
                // sx={{
                //   py: 0,
                //   minHeight: 32,
                //   color: "rgba(255,255,255,.8)",
                // }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {/* {item.icon} */}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    // fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            ))}
        </>
      ) : null}
      {role === "admin" ||
      role === "superadmin" ||
      role === "teacher" ||
      role === "student" ? (
        <>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              onClick={() => setState({ openStudy: !state.openStudy })}
              selected={state.openStudy}
            >
              <ListItemIcon>
                <ReceiptLong />
              </ListItemIcon>
              <ListItemText primary="uStudyIt" />
              {state.openStudy ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {state.openStudy &&
            uStudyItData.map((item) => (
              <ListItemButton
                onClick={() => navigate(item.link)}
                key={item.label}
                // sx={{
                //   py: 0,
                //   minHeight: 32,
                //   color: "rgba(255,255,255,.8)",
                // }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {/* {item.icon} */}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    // fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            ))}
        </>
      ) : null}
      {role === "admin" || role === "superadmin" ? (
        <>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              onClick={() => setState({ openBook: !state.openBook })}
              selected={state.openBook}
            >
              <ListItemIcon>
                <LibraryBooks />
              </ListItemIcon>
              <ListItemText primary="Smart iBooks" />
              {state.openBook ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {state.openBook &&
            BookData.map((item) => (
              <ListItemButton
                onClick={() => navigate(item.link)}
                key={item.label}
                // sx={{
                //   py: 0,
                //   minHeight: 32,
                //   color: "rgba(255,255,255,.8)",
                // }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {/* {item.icon} */}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    // fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            ))}
        </>
      ) : null}
      {role === "admin" || role === "superadmin" ? (
        <>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              onClick={() => setState({ openAlumni: !state.openAlumni })}
              selected={state.openAlumni}
            >
              <ListItemIcon>
                <School />
              </ListItemIcon>
              <ListItemText primary="Alumni@Work-LXE" />
              {state.openAlumni ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          {state.openAlumni &&
            alumniData.map((item) => (
              <ListItemButton
                onClick={() => navigate(item.link)}
                key={item.label}
                // sx={{
                //   py: 0,
                //   minHeight: 32,
                //   color: "rgba(255,255,255,.8)",
                // }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {/* {item.icon} */}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    // fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            ))}
        </>
      ) : null}
      {role === "admin" || role === "superadmin" ? (
        <>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              onClick={() => setState({ openCareer: !state.openCareer })}
              selected={state.openCareer}
            >
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText primary="Career Consultant" />
              {state.openCareer ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {state.openCareer &&
            careerData.map((item) => (
              <ListItemButton
                onClick={() => navigate(item.link)}
                key={item.label}
                // sx={{
                //   py: 0,
                //   minHeight: 32,
                //   color: "rgba(255,255,255,.8)",
                // }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {/* {item.icon} */}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    // fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            ))}
        </>
      ) : null}
      {role === "admin" || role === "superadmin" ? (
        <>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              onClick={() => setState({ openAdmin: !state.openAdmin })}
              selected={state.openAdmin}
            >
              <ListItemIcon>
                <AdminPanelSettings />
              </ListItemIcon>
              <ListItemText primary="Admin" />
              {state.openAdmin ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {state.openAdmin &&
            adminData.map((item) => (
              <ListItemButton
                onClick={() => navigate(item.link)}
                key={item.label}
                // sx={{
                //   py: 0,
                //   minHeight: 32,
                //   color: "rgba(255,255,255,.8)",
                // }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {/* {item.icon} */}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    // fontWeight: "medium",
                  }}
                />
              </ListItemButton>
            ))}
        </>
      ) : null}
      {/* <ListItem disablePadding>
          <ListItemButton component="a" >
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </ListItem> */}
    </List>
  );
};

export default Sidebar;
