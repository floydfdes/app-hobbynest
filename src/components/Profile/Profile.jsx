import { Avatar } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./Profile.scss";
const Profile = () => {
  const user = JSON.parse(localStorage.getItem("profile")).result;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="container card profile-padding ">
        <div className="row p-4">
          <div className="col-md-3 col-lg-3 col-sm-12">
            <div className="p-4">
              <Avatar
                className="profile-avatar-page"
                alt={user?.firstName[0]}
                src={user?.imageUrl ? user?.imageUrl : user?.firstName}
              />
            </div>
          </div>
          <div className="col-md-9 col-lg-9 col-sm-12">
            <h2>Profile details</h2>
            <div className="row">
              <div className="col-3">
                <div>Full Name</div>
                <div>Email</div>
              </div>
              <div className="col-9">
                <div>
                  {user?.firstName} &nbsp;
                  {user?.lastName}
                </div>
                <div>{user?.email}</div>
              </div>
            </div>
            <div className="my-2 btn-grid">
              <button className="btn btn-success">Change Password</button>
              <button onClick={handleClickOpen} className="btn btn-danger">
                Delete Profile
              </button>
              <button className="btn btn-warning">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your password if you want to delete your profile.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Profile;
