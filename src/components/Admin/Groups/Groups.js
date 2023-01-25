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
  LinearProgress,
  Paper,
  Radio,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import useStore from "../../Store/store";
import config from "../../../config";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";

let parsedData;

let IdToken, Authorization, TENANT_ID, headers;

const currentUser = config.UserPool.getCurrentUser();
if (currentUser) {
  currentUser.getSession((err, session) => {
    if (err) {
      console.log("error please try login again");
    } else {
      if (session.isValid()) {
        console.log("token is valid");
        IdToken = session.idToken.jwtToken;
        Authorization = session.accessToken.jwtToken;
        TENANT_ID = "azharengineering2020";
        headers = {
          authorization: JSON.stringify({ Authorization, IdToken, TENANT_ID }),
        };
      }
    }
  });
} else {
  console.log("Please login ");
}

export default function Groups() {
  const navigate = useNavigate();

  const {
    setUsers,
    addUser,
    removeUser,
    users,
    setPageTitle,
    groups,
    // group,
    // setGroup,
    setGroups,
    addGroup,
    removeGroup,
    isLoggedIn,
  } = useStore((state) => state);

  const groupColumns = [
    {
      field: "radiobutton",
      headerName: "",
      width: 60,
      sortable: false,
      renderCell: (params) => (
        <Radio
          checked={radioChecked[0] === params.id}
          value={params.id}
          // onClick={() => {
          //    setGroup(params.id);
          //   navigate(`/group?id=${params.id}`);
          // }}
        />
      ),
    },
    { field: "col1", headerName: "Group Name", width: 350 },
    { field: "col2", headerName: "Description", width: 600 },
    // { field: "col3", headerName: "Creation Date", width: 300 },
    {
      field: "deletebutton",
      headerName: "",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <>
          <Edit
            style={{ marginRight: 10 }}
            // onClick={() => handleClickOpen("edit", user.username)}
          />
          <Delete
            style={{ marginRight: 10 }}
            onClick={() => {
              setId(params.id);
              // console.log("id", id);
              setDeleteDialog(true);
            }}
            // onClick={() => handleDeleteGroup([params.id])}
          />
        </>
      ),
    },
  ];

  const groupRows = [];
  for (let i = 0; i < groups.length; i++) {
    groupRows.push({
      id: groups[i].GroupName,
      col1: groups[i].GroupName,
      col2: groups[i].Description,
      // col3: groups[i].CreationDate,
    });
  }
  let radioChecked = [];

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
  const [selectionGroupModel, setSelectionGroupModel] = useState(radioChecked);
  const [selectionUserModel, setSelectionUserModel] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [id, setId] = useState("");
  const [deleteUsersDialog, setDeleteUsersDialog] = useState(false);

  radioChecked = selectionGroupModel;
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
    setPageTitle("Groups");
  }, []);

  useEffect(() => {
    if (selectionGroupModel.length === 1) {
      setGroup(selectionGroupModel[0]);
      // axios
      //   .get(
      //     `${config.apiURL}/${config.UserPool.getUserPoolId()}/groups/${
      //       selectionGroupModel[0]
      //     }/users`,
      //     { headers }
      //   )
      //   .then((res) => {
      //     setUsers(res.data.users);
      navigate(`/group?id=${selectionGroupModel[0]}`);
      // });
    } else {
      setGroup("");
    }
  }, [selectionGroupModel]);

  // useEffect(() => {
  //   if (group) {
  //     setGroup(group);
  //     navigate("/group");
  //   }
  //   else {
  //     axios
  //       .get(`${config.apiURL}/${config.UserPool.getUserPoolId()}/users`, {
  //         headers,
  //       })
  //       .then((res) => {
  //         setUsers(res.data.users);
  //       });
  //   }
  // }, [group]);

  useEffect(() => {
    axios
      .get(`${config.apiURL}/${config.UserPool.getUserPoolId()}/groups`, {
        headers,
      })
      .then((res) => {
        setGroups(res.data.groups);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (action === "addGroup") {
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
                mb: 30,
              }}
            >
              <Container
                maxWidth="lg"
                // sx={{ mt: 4 }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}></Grid>
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
                    <Paper sx={{ height: 500, width: 1 }}>
                      <DataGrid
                        onSelectionModelChange={(newSelectionModel) => {
                          setSelectionGroupModel(newSelectionModel);
                        }}
                        selectionModel={selectionGroupModel}
                        onPageSizeChange={(newPageSize) =>
                          setPageSize(newPageSize)
                        }
                        pageSize={pageSize}
                        rows={groupRows}
                        columns={groupColumns}
                        rowsPerPageOptions={[5, 10, 50, 100]}
                        pagination
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
