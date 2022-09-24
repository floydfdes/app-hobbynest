import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../actions/auth";

const DeleteModal = ({ open, setOpen, userDetails }) => {
  const [password, setPassword] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClose = (action) => {
    if (action) {
      const { email } = userDetails;
      const body = { email, password };
      if (password) dispatch(deleteUser(userDetails._id, body, history));
    }

    setOpen(false);
  };
  return (
    <>
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
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => setPassword(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={() => handleClose(true)}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteModal;
