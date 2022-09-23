import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const EditModal = ({ open, setOpen, userDetails }) => {
  const [user, setUser] = useState(userDetails);
  const handleClose = (action) => {
    setOpen(false);
  };

  const onUserDetailChange = (e) => {
    console.log(e);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter your new details.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="email"
            fullWidth
            variant="standard"
            value={user?.firstName}
            onChange={onUserDetailChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="email"
            fullWidth
            variant="standard"
            value={user?.lastName}
            onChange={onUserDetailChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Age"
            type="email"
            fullWidth
            variant="standard"
            value={user?.age}
            onChange={onUserDetailChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={() => handleClose(true)}>Edit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditModal;
