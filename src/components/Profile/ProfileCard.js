import React, { useState } from "react"
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material"
import config from "../../config"

export default function ProfileCard(props) {
  const [openDialog, setOpenDialog] = useState(false)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [error, setError] = useState("")

  const handleClose = () => {
    setOpenDialog(false)
    setError("")
  }

  return (
    <>
      <Card {...props}>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              // src={props.user.avatar}
              sx={{
                height: 64,
                mb: 2,
                width: 64,
              }}
            />
            <Typography color="textPrimary" gutterBottom variant="h5">
              {props.user?.given_name}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {/* {`${props.user?.city} ${props.user?.country}`} */}
            </Typography>
            {/* <Typography color="textSecondary" variant="body2">
            {props.user.timezone}
          </Typography> */}
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" fullWidth variant="text">
            Reset Password
          </Button>
        </CardActions>
      </Card>
      <Dialog fullWidth maxWidth="sm" open={openDialog}>
        <DialogTitle
          style={{
            background: "#fafafa",
            color: "primary",
            // marginBottom: 20,
          }}
        >
          Reset Password <span style={{ color: "red" }}>{error}</span>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="oldPassword"
                label="Old Password"
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={(event) => setOldPassword(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="newPassword"
                label="New Password"
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* {showSubmitBtn ? ( */}
          <Button type="submit" variant="contained">
            Submit
          </Button>
          {/* ) : null} */}
        </DialogActions>
      </Dialog>
    </>
  )
}
