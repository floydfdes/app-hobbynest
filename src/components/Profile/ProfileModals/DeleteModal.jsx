import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../../actions/auth';

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
          setErrors('Please enter email address');
        } else {
          setErrors('Please enter the correct email address');
        }
        return;
      }
    }

    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => handleClose(false)} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ color: 'var(--secondary-color)' }}>Delete Profile</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2, color: 'var(--fourth-color)' }}>
          Please reenter your email in the textbox below to delete your profile.
        </DialogContentText>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            onChange={(event) => setEmailField(event.target.value)}
            error={!!errors}
            helperText={errors}
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
            backgroundColor: 'var(--fourth-color)',
            color: 'var(--primary-color)',
            '&:hover': {
              backgroundColor: 'var(--fourth-color)',
              filter: 'brightness(90%)',
            },
          }}
          variant="contained"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Add PropTypes validation
DeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  userDetails: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeleteModal;
