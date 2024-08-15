import React, { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { deleteUser } from "../../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ open, setOpen, userDetails }) => {
  const [emailField, setEmailField] = useState(null);
  const [errors, setErrors] = useState(null);
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleClose = (action) => {
    if (action) {
      const { email } = userDetails;
      if (emailField && email === emailField) {
        dispatch(deleteUser(userDetails._id, history));
      } else {
        if (!emailField) {
          setErrors("Please enter email address");
        } else {
          setErrors("Please enter the correct email address");
        }
        return;
      }
    }

    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please reenter your email in the textbox below to delete your
            profile.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => setEmailField(event.target.value)}
          />
          <span className="profile-model-errors">{errors}</span>
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
