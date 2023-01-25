import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import useStore from "../../Store/store";
import config from "../../../config";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropzone from "react-dropzone";

let parsedData;

let IdToken, Authorization, TENANT_ID, headers;

export default function GroupUsers(props) {
  const currentUser = config.UserPool.getCurrentUser();
  if (currentUser) {
    currentUser.getSession((err, session) => {
      if (err) {
        console.log("error please try login again");
      } else {
        IdToken = session.idToken.jwtToken;
        Authorization = session.accessToken.jwtToken;
        TENANT_ID = props.group.GroupName;
        headers = {
          authorization: JSON.stringify({ Authorization, IdToken, TENANT_ID }),
        };
      }
    });
  } else {
    console.log("Please login ");
  }
  const {
    setUsers,
    addUser,
    removeUser,
    users,
    setPageTitle,
    groups,
    setGroups,
    addGroup,
    removeGroup,
  } = useStore((state) => state);

  let radioChecked = [];

  const userColumns = [
    { field: "col1", headerName: "Username", width: 150 },
    { field: "col2", headerName: "Full Name", width: 200 },
    { field: "col3", headerName: "Email", width: 250 },
    { field: "col4", headerName: "Email Verified", width: 130 },
    { field: "col5", headerName: "Role", width: 100 },
    { field: "col6", headerName: "Status", width: 300 },
    { field: "col7", headerName: "Creation Date", width: 200 },
  ];

  const userRows = [];
  for (let i = 0; i < users.length; i++) {
    userRows.push({
      id: users[i].username,
      col1: users[i].username,
      col2: users[i].given_name + " " + users[i].family_name,
      col3: users[i].email,
      col4: users[i].email_verified,
      col5: users[i]["custom:role"],
      col6:
        (users[i].enabled ? "Enabled" : "Disabled") + " / " + users[i].status,
      col7: users[i].creationDate,
    });
  }

  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const [group, setGroup] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [showSubmitBtn, setShowSubmitBtn] = useState(true);
  const [error, setError] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [action, setAction] = useState("");
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [givenName, setGivenName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [selectionUserModel, setSelectionUserModel] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [id, setId] = useState("");
  const [deleteUsersDialog, setDeleteUsersDialog] = useState(false);

  const notifyError = (message) => {
    toast.error(message, {
      theme: "colored",
      closeOnClick: true,
      hideProgressBar: true,
      autoClose: 3000,
    });
  };
  const notifySuccess = (message) => {
    toast.success(message, {
      theme: "colored",
      closeOnClick: true,
      hideProgressBar: true,
      autoClose: 3000,
    });
  };

  useEffect(() => {
    setPageTitle("Users");
    setGroup(props.group.GroupName);
  }, []);

  useEffect(() => {
    axios
      .get(
        `${config.apiURL}/${config.UserPool.getUserPoolId()}/groups/${
          props.group.GroupName
        }/users`,
        { headers }
      )
      .then((res) => {
        setUsers(res.data.users);
      });
  }, []);
  const handleClickOpen = (action, username = null) => {
    if (action === "add") {
      if (!group) {
        notifyError("Please select a group first");
      } else {
        setAction("add");
        clearForm();
        setShowSubmitBtn(true);
        setDialogTitle("Add New User");
        setOpenDialog(true);
        setError("");
      }
    } else if (action === "view") {
      setAction("view");
      setDialogTitle("View User");
      setShowSubmitBtn(false);
      const u = users.find((user) => user.username === username);
      fillForm(u);
      setOpenDialog(true);
    } else if (action === "edit") {
      setAction("edit");
      setDialogTitle("Edit User");
      setShowSubmitBtn(true);
      const u = users.find((user) => user.username === username);
      fillForm(u);
      setOpenDialog(true);
    } else if (action === "addBulk") {
      if (!group) {
        notifyError("Please select a group first");
      } else {
        setAction("addBulk");
        clearForm();
        setShowSubmitBtn(true);
        setDialogTitle("Add Bulk Users");
        setOpenDialog(true);
      }
    } else if (action === "addGroup") {
      setAction("addGroup");
      clearGroupForm();
      setShowSubmitBtn(true);
      setDialogTitle("Add Group");
      setOpenDialog(true);
      setError("");
    }
  };
  const fillForm = (user) => {
    setUsername(user.username);
    setGivenName(user.given_name);
    setFamilyName(user.family_name);
    setRole(user["custom:role"]);
    setEmail(user.email);
  };
  const handleClose = () => {
    setOpenDialog(false);
    setFileName("");
  };

  const clearForm = () => {
    setUsername("");
    setGivenName("");
    setFamilyName("");
    setRole("");
    setPassword("");
    setEmail("");
  };

  const clearGroupForm = () => {
    setGroupName("");
    setDescription("");
  };

  const changeHandler = (file) => {
    if (file) {
      // console.log(file);
      setFileName(file.name);
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          parsedData = results.data;
        },
      });
    } else {
      console.log("no file");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (action === "add") {
      setError("");
      if (
        username === "" ||
        password === "" ||
        givenName === "" ||
        familyName === "" ||
        email === "" ||
        role === ""
      ) {
        setError("Form fields are required");
      } else {
        let data = [
          {
            username: username,
            password: password,
            given_name: givenName,
            family_name: familyName,
            email: email,
            role: role,
          },
        ];
        axios
          .post(
            `${
              config.apiURL
            }/${config.UserPool.getUserPoolId()}/groups/${group}/users`,
            data,
            { headers }
          )
          .then((res) => {
            if (res.data.responses[0].statusCode === 200) {
              addUser(res.data.responses[0].user);
              setOpenDialog(false);
              notifySuccess("User added successfully");
            } else {
              setError(res.data.responses[0].message);
            }
          })
          .catch((err) => {
            notifyError(err.message);
          });
      }
    } else if (action === "edit") {
      let data = {
        username: username,
        password: password,
        given_name: givenName,
        family_name: familyName,
        email: email,
        role: role,
      };

      setOpenDialog(false);
      alert("User updated successfully");
    } else if (action === "addBulk") {
      setLoading(true);
      setOpenDialog(false);
      axios
        .post(
          `${
            config.apiURL
          }/${config.UserPool.getUserPoolId()}/groups/${group}/users`,
          parsedData,
          {
            headers,
          }
        )
        .then((res) => {
          for (let x of res.data.responses) {
            if (x.statusCode === 200) {
              addUser(x.user);
            }
          }
          setFileName("");

          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err.message);
        });
    } else if (action === "addGroup") {
      if (groupName === "") {
        setError("Group name is required");
      } else {
        setError("");
        axios
          .post(
            `${config.apiURL}/${config.UserPool.getUserPoolId()}/groups`,
            [{ name: groupName, description }],
            { headers }
          )
          .then((res) => {
            if (res.data.responses[0].statusCode === 200) {
              addGroup(res.data.responses[0].group);
              setOpenDialog(false);
              notifySuccess("Group added successfully");
            } else {
              setError(res.data.responses[0].message);
            }
          })
          .catch((err) => {
            notifyError(err.message);
          });
      }
    }
  };

  const handleDeleteGroup = async (names) => {
    if (users.length === 0) {
      try {
        axios
          .delete(
            `${config.apiURL}/${config.UserPool.getUserPoolId()}/groups`,
            { data: { names } },
            { headers }
          )
          .then(() => {
            for (let name of names) {
              removeGroup(name);
            }
            setDeleteDialog(false);
            notifySuccess("Group deleted successfully");
          })
          .catch((err) => {
            notifyError(err.message);
          });
      } catch (error) {
        notifyError(error.message);
      }
    } else {
      notifyError("This Group is not empty");
    }
  };

  const handleDeleteUsers = async (names) => {
    if (names.length === 0) {
      notifyError("Please select users to be deleted");
    } else {
      setLoading(true);
      setDeleteUsersDialog(false);

      axios
        .delete(
          `${config.apiURL}/${config.UserPool.getUserPoolId()}/users`,
          { data: { names } },
          { headers }
        )
        .then(() => {
          for (let name of names) {
            removeUser(name);
          }
          setOpenDialog(false);
          setLoading(false);
          notifySuccess("Users deleted successfully");
        })
        .catch((err) => {
          notifyError(err.message);
          setLoading(false);
        });
    }
  };
  const handleDelete = async (username) => {
    axios
      .delete(
        `${config.apiURL}/${config.UserPool.getUserPoolId()}/users/${username}`,
        { headers }
      )
      .then((res) => {
        removeUser(username);
        setOpenDialog(false);
        // setError("");
      })
      .catch((err) => {
        // setError(err.message);
        notifyError(err.message);
      });
  };
  return (
    <>
      {isLoggedIn && (
        <>
          <ToastContainer />
          <Box sx={{ display: "flex" }}>
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: "50vh",
                // mb: 30,
              }}
            >
              <Container
                maxWidth="lg"
                // sx={{ mt: 4 }}
              >
                <Grid container spacing={3}>
                  {/* <Grid item xs={12}></Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      // p: 2,
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                      }}
                    >
                      <Button
                        sx={{
                          ml: 1,
                          typography: {
                            xs: { fontSize: 8 },
                            sm: { fontSize: 10 },
                            md: { fontSize: 13 },
                          },
                        }}
                        variant="contained"
                        onClick={() => handleClickOpen("addGroup")}
                      >
                        Add Group
                      </Button>
                      <Button
                        sx={{
                          typography: {
                            xs: { fontSize: 8 },
                            sm: { fontSize: 10 },
                            md: { fontSize: 13 },
                          },
                        }}
                        variant="outlined"
                        onClick={() => setSelectionGroupModel([])}
                      >
                        Deselect
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper sx={{ height: 400, width: 1 }}>
                      <DataGrid
                        onSelectionModelChange={(newSelectionModel) => {
                          setSelectionGroupModel(newSelectionModel);
                        }}
                        selectionModel={selectionGroupModel}
                        autoPageSize
                        rows={groupRows}
                        columns={groupColumns}
                        rowsPerPageOptions={[5, 10, 20]}
                        pagination
                        // disableColumnFilter
                        // disableColumnSelector
                        // disableDensitySelector
                        components={{
                          Toolbar: GridToolbar,
                          LoadingOverlay: LinearProgress,
                        }}
                        componentsProps={{
                          toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                          },
                        }}
                      />
                    </Paper>
                  </Grid> */}
                  {/*  <Grid item xs={12}>
                    <Typography sx={{ fontSize: 20 }}>Group Users</Typography> 
                     <Divider /> 
                  </Grid> */}
                  <Grid
                    item
                    xs={12}
                    sx={{
                      // p: 2,
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                      }}
                    >
                      <Button
                        variant="contained"
                        onClick={() => handleClickOpen("add")}
                        sx={{
                          ml: 1,
                          typography: {
                            xs: { fontSize: 8 },
                            sm: { fontSize: 10 },
                            md: { fontSize: 13 },
                          },
                        }}
                      >
                        Add User
                      </Button>
                      <Button
                        sx={{
                          typography: {
                            xs: { fontSize: 8 },
                            sm: { fontSize: 10 },
                            md: { fontSize: 13 },
                          },
                        }}
                        variant="outlined"
                        onClick={() => {
                          if (selectionUserModel.length === 0) {
                            notifyError("Please select users to be deleted");
                          } else {
                            setDeleteUsersDialog(true);
                          }
                        }}
                      >
                        Delete
                      </Button>
                    </Grid>

                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        onClick={() => handleClickOpen("addBulk")}
                        sx={{
                          mr: 1,
                          typography: {
                            xs: { fontSize: 8 },
                            sm: { fontSize: 10 },
                            md: { fontSize: 13 },
                          },
                        }}
                      >
                        Add Bulk Users
                      </Button>
                      <Button
                        sx={{
                          typography: {
                            xs: { fontSize: 8 },
                            sm: { fontSize: 10 },
                            md: { fontSize: 13 },
                          },
                        }}
                        variant="outlined"
                        onClick={() => handleClickOpen("")}
                      >
                        Review Reports
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Paper sx={{ height: 500, width: 1 }}>
                      <DataGrid
                        checkboxSelection
                        onSelectionModelChange={(newSelectionModel) => {
                          setSelectionUserModel(newSelectionModel);
                        }}
                        selectionModel={selectionUserModel}
                        onPageSizeChange={(newPageSize) =>
                          setPageSize(newPageSize)
                        }
                        pageSize={pageSize}
                        rowsPerPageOptions={[10, 20, 100]}
                        pagination
                        rows={userRows}
                        columns={userColumns}
                        // disableColumnFilter
                        // disableColumnSelector
                        // disableDensitySelector
                        components={{
                          Toolbar: GridToolbar,
                        }}
                        componentsProps={{
                          toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                          },
                        }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Box>
          <Dialog fullWidth maxWidth="sm" open={openDialog}>
            <DialogTitle
              style={{
                background: "#0694a8",
                color: "white",
                marginBottom: 20,
              }}
            >
              {dialogTitle}
            </DialogTitle>
            {action === "addBulk" && (
              <DialogContent>
                <Grid container display={"flex"} flexDirection={"column"}>
                  <Grid item xs={12}>
                    {error && (
                      <Alert
                        severity="error"
                        onClose={() => {
                          setError("");
                        }}
                      >
                        {error}
                      </Alert>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      p: 5,
                      mt: 1,
                      textAlign: "center",
                      border: "1px dashed grey",
                      backgroundColor: "#e8f4f6",
                    }}
                  >
                    <Dropzone
                      maxFiles={1}
                      accept={{ "text/csv": [".csv"] }}
                      onDrop={(selectedFiles) => {
                        // console.log(selectedFiles);
                        setError("");
                        changeHandler(selectedFiles[0]);
                      }}
                      onDropRejected={() => {
                        console.log("rejected");
                        setError("Only one .csv file is allowed");
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>
                              {fileName
                                ? fileName
                                : "Drag 'n' drop a .csv file here, or click to select a file"}
                            </p>
                          </div>
                        </section>
                      )}
                    </Dropzone>

                    {/* <Backdrop
                      sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                      }}
                      open={loading}
                    >
                      <CircularProgress color="inherit" />
                    </Backdrop> */}
                  </Grid>
                </Grid>
              </DialogContent>
            )}
            {action === "add" && (
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    {error && (
                      <Alert
                        severity="error"
                        onClose={() => {
                          setError("");
                        }}
                      >
                        {error}
                      </Alert>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Username"
                      required
                      fullWidth
                      size="small"
                      name="username"
                      id="username"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      autoFocus
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Password"
                      required
                      fullWidth
                      variant="filled"
                      size="small"
                      name="password"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      required
                      fullWidth
                      variant="filled"
                      size="small"
                      name="givenName"
                      id="givenName"
                      value={givenName}
                      onChange={(event) => setGivenName(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      required
                      fullWidth
                      variant="filled"
                      size="small"
                      id="familyName"
                      name="familyName"
                      value={familyName}
                      onChange={(event) => setFamilyName(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      label="Email"
                      required
                      fullWidth
                      variant="filled"
                      size="small"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="Role"
                      required
                      fullWidth
                      variant="filled"
                      size="small"
                      id="role"
                      name="role"
                      value={role}
                      onChange={(event) => setRole(event.target.value)}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
            )}
            {action === "addGroup" && (
              <DialogContent>
                <Grid container>
                  <Grid item xs={12} mb={3}>
                    {error && (
                      <Alert
                        severity="error"
                        onClose={() => {
                          setError("");
                        }}
                      >
                        {error}
                      </Alert>
                    )}
                  </Grid>
                  <Grid item xs={12} mb={3}>
                    <TextField
                      label="Group Name"
                      required
                      fullWidth
                      variant="filled"
                      size="small"
                      name="groupName"
                      id="groupName"
                      value={groupName}
                      onChange={(event) => setGroupName(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Description"
                      fullWidth
                      variant="filled"
                      size="small"
                      id="description"
                      name="description"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
            )}

            <DialogActions>
              <Grid container display={"flex"} flexDirection={"row"}>
                <Grid item xs={6}>
                  {action === "addBulk" ? (
                    <Button
                      sx={{ ml: 2, mb: 1 }}
                      variant="outlined"
                      download
                      href="/static/files/users.csv"
                    >
                      Download CSV header
                    </Button>
                  ) : null}
                </Grid>

                <Grid
                  item
                  xs={6}
                  display={"flex"}
                  flexDirection={"row-reverse"}
                >
                  {showSubmitBtn && (
                    <Button
                      sx={{ mr: 2, mb: 1 }}
                      type="submit"
                      variant="contained"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  )}
                  <Button sx={{ mb: 1 }} onClick={handleClose}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>
          </Dialog>
          <Dialog
            open={deleteDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Confirm to delete</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {/* Are you sure? */}
                Are you sure you want to delete this group?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDeleteDialog(false)}>No</Button>
              <Button onClick={() => handleDeleteGroup([id])} autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={deleteUsersDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Confirm to delete</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete these users?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDeleteUsersDialog(false)}>No</Button>
              <Button
                onClick={() => handleDeleteUsers(selectionUserModel)}
                autoFocus
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>

          <Backdrop
            sx={{
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      )}
    </>
  );
}
