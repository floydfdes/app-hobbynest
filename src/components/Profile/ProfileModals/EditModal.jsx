import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editUser } from "../../../actions/auth";

const EditModal = ({ open, setOpen, userDetails }) => {
  const initialErrorState = {
    firstName: "",
    lastName: "",
    age: "",
  };

  const fieldPattern = {
    firstName: /^[A-Za-z ,]+$/,
    lastName: /^[A-Za-z ,]+$/,
    age: /^[0-9]+$/,
  };

  const history = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(userDetails);
  const [errors, setErrors] = useState(initialErrorState);
  const handleClose = (action) => {
    if (action) {
      const { firstName, lastName, age } = user;
      let formData = { firstName, lastName, age };
      const isValid = validation(formData);
      if (!isValid) return;
      if (user) dispatch(editUser(user._id, user, history));
    }
    setOpen(false);
  };

  const onUserDetailChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validation = (formData) => {
    let isValid = true;
    setErrors(initialErrorState);

    for (let entry in formData) {
      if (!formData[entry]) {
        setErrors((prevState) => ({
          ...prevState,
          [entry]: `${entry} is required`,
        }));
        isValid = false;
      } else if (formData[entry]) {
        let regularExp = new RegExp(fieldPattern[entry]);
        if (!regularExp.test(formData[entry])) {
          setErrors((prevState) => ({
            ...prevState,
            [entry]: `${entry} is invalid`,
          }));
          isValid = false;
        }
      }
    }

    return isValid;
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
            id="firstName"
            name="firstName"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            value={user?.firstName}
            onChange={onUserDetailChange}
          />
          <span className="profile-model-errors">{errors?.firstName}</span>
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            name="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            value={user?.lastName}
            onChange={onUserDetailChange}
          />
          <span className="profile-model-errors">{errors?.lastName}</span>
          <TextField
            autoFocus
            margin="dense"
            id="age"
            name="age"
            label="Age"
            type="number"
            fullWidth
            variant="standard"
            value={user?.age}
            onChange={onUserDetailChange}
          />
          <span className="profile-model-errors">{errors?.age}</span>
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
