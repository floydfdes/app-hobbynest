import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ChangePasswordModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide your new password.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Current Password"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="New Password"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Confirm New Password"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Change Password</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChangePasswordModal;
