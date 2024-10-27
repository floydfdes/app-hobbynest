import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../../actions/auth';

const ChangePasswordModal = ({ open, setOpen, userDetails }) => {
  const initialErrorState = {
    oldPass: '',
    newPass: '',
    cNewPass: '',
  };

  const [formData, setFormData] = useState(initialErrorState);
  const [errors, setErrors] = useState(initialErrorState);
  const [showPassword, setShowPassword] = useState({
    oldPass: false,
    newPass: false,
    cNewPass: false,
  });
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleClose = (action) => {
    if (action) {
      const isValid = validatedFields(formData);
      if (!isValid) return;
      const { newPass } = formData;

      dispatch(
        resetPassword(userDetails._id, { newPassword: newPass }, history),
      );
    }
    setOpen(false);
  };

  const onUserDetailChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  const validatedFields = (formData) => {
    let isValid = true;
    setErrors(initialErrorState);

    for (const entry in formData) {
      if (!formData[entry]) {
        setErrors((prevState) => ({
          ...prevState,
          [entry]: `${entry} is required`,
        }));
        isValid = false;
      }
    }

    if (formData.oldPass && formData.oldPass === formData.newPass) {
      setErrors((prevState) => ({
        ...prevState,
        newPass: `New password cannot be same as old password`,
      }));
      isValid = false;
    }
    if (formData.newPass && formData.cNewPass !== formData.newPass) {
      setErrors((prevState) => ({
        ...prevState,
        cNewPass: `Please enter proper confirmation password`,
      }));
      isValid = false;
    }

    return isValid;
  };

  return (
    <Dialog open={open} onClose={() => handleClose(false)} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ color: 'var(--secondary-color)' }}>Change Password</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2, color: 'var(--fourth-color)' }}>
          Please provide your new password.
        </DialogContentText>
        <Box component="form" noValidate autoComplete="off">
          {['oldPass', 'newPass', 'cNewPass'].map((field) => (
            <TextField
              key={field}
              margin="dense"
              id={field}
              name={field}
              label={field === 'oldPass' ? 'Current Password' : field === 'newPass' ? 'New Password' : 'Confirm New Password'}
              type={showPassword[field] ? 'text' : 'password'}
              fullWidth
              variant="outlined"
              onChange={onUserDetailChange}
              error={!!errors[field]}
              helperText={errors[field]}
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword(field)}
                      edge="end"
                    >
                      {showPassword[field] ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          ))}
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
          Change Password
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ChangePasswordModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  userDetails: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChangePasswordModal;
