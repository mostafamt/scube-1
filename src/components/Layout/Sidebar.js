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
  StarBorder,
} from "@mui/icons-material"
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useStore from "../Store/store"
import config from "../../config"

const Sidebar = (props) => {
  const navigate = useNavigate()

  const { selectedIndex, setSelectedIndex } = useStore((state) => state)
  const [openShop, setOpenShop] = useState(false)
  const [openAuthor, setOpenAuthor] = useState(false)
  const [openStudy, setOpenStudy] = useState(false)
  const [openBooks, setOpenBooks] = useState(false)
  const [openAlumni, setOpenAlumni] = useState(false)
  const [openQA, setOpenQA] = useState(false)
  const [openLXE, setOpenLXE] = useState(false)
  const [openCareer, setOpenCareer] = useState(false)
  const [openAdmin, setOpenAdmin] = useState(false)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  const [role, setRole] = useState("")
  useEffect(() => {
    const user = config.UserPool.getCurrentUser()
    if (user) {
      user.getSession((err, session) => {
        if (err) {
          console.log(err.message)
        } else {
          setRole(session.idToken.payload["custom:role"])
        }
      })
    }
  }, [])

  return (
    <List
      style={{ maxHeight: "100%", overflow: "auto" }}
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        // mb: 30,
        height: "150vh",
        overflow: "auto",
      }}
    >
      {role === "admin" || role === "superadmin" ? (
        <ListItemButton
          onClick={(event) => {
            handleListItemClick(event, 0)
            navigate("/home")
          }}
          selected={selectedIndex === 0}
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      ) : null}

      {role === "admin" || role === "superadmin" || role === "teacher" ? (
        <>
          <Collapse in={openAuthor} timeout="auto" unmountOnExit>
            <List component="div" disablePadding></List>
          </Collapse>
        </>
      ) : null}
      {role === "admin" ||
      role === "superadmin" ||
      role === "teacher" ||
      role === "student" ? (
        <>
          <Collapse in={openStudy} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={(event) => {
                  handleListItemClick(event, 11)
                  navigate("/st-courses")
                }}
                selected={selectedIndex === 11}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="My Courses" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={(event) => {
                  handleListItemClick(event, 12)
                  navigate("/st-lessons")
                }}
                selected={selectedIndex === 12}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="My Private Lessons" />
              </ListItemButton>
            </List>
          </Collapse>
        </>
      ) : null}

      {role === "admin" ||
      role === "superadmin" ||
      role === "teacher" ||
      role === "student" ? (
        <>
          <ListItemButton
            onClick={(event) => {
              handleListItemClick(event, 16)
              setOpenAlumni(!openAlumni)
            }}
            selected={selectedIndex === 16}
          >
            <ListItemIcon>
              <School />
            </ListItemIcon>
            <ListItemText primary="Alumni@Worl-LXE" />
            {openAlumni ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openAlumni} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={(event) => {
                  handleListItemClick(event, 17)
                  setOpenQA(!openQA)
                }}
                selected={selectedIndex === 17}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Q & A" />
                {openQA ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openQA} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 8 }}
                    onClick={(event) => {
                      handleListItemClick(event, 18)
                      // navigate("/");
                    }}
                    selected={selectedIndex === 18}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Questions" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 8 }}
                    onClick={(event) => {
                      handleListItemClick(event, 19)
                      // navigate("/");
                    }}
                    selected={selectedIndex === 19}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Unanswered Questions" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={(event) => {
                  handleListItemClick(event, 20)
                  setOpenLXE(!openLXE)
                  // navigate("/lxe-profile");
                }}
                selected={selectedIndex === 20}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="LXE Profile" />
                {openLXE ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openLXE} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 8 }}
                    onClick={(event) => {
                      handleListItemClick(event, 21)
                      // navigate("/");
                    }}
                    selected={selectedIndex === 21}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="My Questions" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 8 }}
                    onClick={(event) => {
                      handleListItemClick(event, 22)
                      // navigate("/");
                    }}
                    selected={selectedIndex === 22}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="My Answers" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Collapse>
        </>
      ) : null}
      {role === "admin" || role === "superadmin" ? (
        <>
          <ListItemButton
            onClick={(event) => {
              handleListItemClick(event, 23)
              setOpenCareer(!openCareer)
            }}
            selected={selectedIndex === 23}
          >
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <ListItemText primary="Career Consultant" />
            {openCareer ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCareer} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={(event) => {
                  handleListItemClick(event, 24)
                  // navigate("/");
                }}
                selected={selectedIndex === 24}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="My CV" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={(event) => {
                  handleListItemClick(event, 25)
                  // navigate("/");
                }}
                selected={selectedIndex === 25}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="My Career" />
              </ListItemButton>
            </List>
          </Collapse>
        </>
      ) : null}
      {role === "admin" || role === "superadmin" ? (
        <>
          <ListItemButton
            onClick={(event) => {
              handleListItemClick(event, 26)
              setOpenAdmin(!openAdmin)
            }}
            selected={selectedIndex === 26}
          >
            <ListItemIcon>
              <AdminPanelSettings />
            </ListItemIcon>
            <ListItemText primary="Admin" />
            {openAdmin ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openAdmin} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={(event) => {
                  handleListItemClick(event, 31)
                  navigate("/groups")
                }}
                selected={selectedIndex === 31}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </List>
          </Collapse>
        </>
      ) : null}
    </List>
  )
}

export default Sidebar
