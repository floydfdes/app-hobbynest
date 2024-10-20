import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types'; // Import PropTypes
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editUser } from '../../../actions/auth';

const EditModal = ({ open, setOpen, userDetails }) => {
  const initialErrorState = {
    firstName: '',
    lastName: '',
    age: '',
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
    <Dialog open={open} onClose={() => handleClose(false)} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ color: 'var(--secondary-color)' }}>Edit Profile</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2, color: 'var(--fourth-color)' }}>
          Please enter your new details.
        </DialogContentText>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            name="firstName"
            label="First Name"
            type="text"
            fullWidth
            variant="outlined"
            value={user?.firstName}
            onChange={onUserDetailChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            id="lastName"
            name="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="outlined"
            value={user?.lastName}
            onChange={onUserDetailChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            id="age"
            name="age"
            label="Age"
            type="number"
            fullWidth
            variant="outlined"
            value={user?.age}
            onChange={onUserDetailChange}
            error={!!errors.age}
            helperText={errors.age}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button
          onClick={() => handleClose(false)}
          sx={{
            color: 'var(--secondary-color)',
            borderColor: 'var(--secondary-color)',
            '&:hover': {
              borderColor: 'var(--secondary-color)',
              backgroundColor: 'var(--secondary-color)',
              color: 'var(--primary-color)',
            },
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          onClick={() => handleClose(true)}
          sx={{
            backgroundColor: 'var(--secondary-color)',
            color: 'var(--primary-color)',
            '&:hover': {
              backgroundColor: 'var(--secondary-color)',
              filter: 'brightness(90%)',
            },
          }}
          variant="contained"
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Add PropTypes validation
EditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  userDetails: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default EditModal;
