import './Profile.scss'; // Import the SCSS file

import { Delete as DeleteIcon, Edit as EditIcon, VpnKey as VpnKeyIcon } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useMemo, useState } from 'react';

import ChangePasswordModal from './ProfileModals/ChangePasswordModal';
import DeleteModal from './ProfileModals/DeleteModal';
import EditModal from './ProfileModals/EditModal';

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const user = useMemo(() => JSON.parse(localStorage.getItem('profile'))?.result, []);
  const [openModal, setOpenModal] = useState({ delete: false, edit: false, changePwd: false });

  const handleModalOpen = (modalType) => () => {
    setOpenModal((prev) => ({ ...prev, [modalType]: true }));
  };

  if (!user) return <Typography variant="h6">Loading...</Typography>;

  return (
    <Container maxWidth="md" className="profile-container">
      <Card elevation={4} className="profile-card">
        <Box className="profile-header">
          <Avatar
            className="profile-avatar"
            alt={`${user?.firstName} ${user?.lastName}`}
            src={user?.profilePicture ? `${user?.profilePicture}` : ''}
          >
            {!user?.profilePicture && `${user?.firstName[0]}${user?.lastName[0]}`}
          </Avatar>
          <Typography variant="h4" className="profile-name">
            {user?.firstName} {user?.lastName}
          </Typography>
          <Typography variant="subtitle1" className="profile-email">
            {user?.email}
          </Typography>
        </Box>
        <CardContent>
          <Box className="profile-details">
            <Typography variant="h6" className="profile-details-heading">
              Personal Details
            </Typography>
            <Divider className="profile-divider" />
            <Typography variant="body1" className="profile-detail">
              <strong>Age:</strong> {user?.age}
            </Typography>
            <Typography variant="body1" className="profile-detail">
              <strong>Gender:</strong> {user?.gender}
            </Typography>
          </Box>
          <Grid container spacing={2} className="profile-actions">
            {['Change Password', 'Edit Profile', 'Delete Profile'].map((text, index) => (
              <Grid item xs={12} sm={4} key={text}>
                <Button
                  fullWidth
                  className={`profile-button ${index === 2 ? 'profile-button-delete' : index === 1 ? 'profile-button-edit' : ''
                    }`}
                  variant={index === 2 ? 'outlined' : 'contained'}
                  color={index === 2 ? 'error' : index === 1 ? 'secondary' : 'primary'}
                  startIcon={index === 0 ? <VpnKeyIcon /> : index === 1 ? <EditIcon /> : <DeleteIcon />}
                  onClick={handleModalOpen(['changePwd', 'edit', 'delete'][index])}
                  size={isMobile ? 'small' : 'medium'}
                >
                  {text}
                </Button>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      <DeleteModal
        open={openModal.delete}
        setOpen={(isOpen) => setOpenModal((prev) => ({ ...prev, delete: isOpen }))}
        userDetails={user}
      />
      <EditModal
        open={openModal.edit}
        setOpen={(isOpen) => setOpenModal((prev) => ({ ...prev, edit: isOpen }))}
        userDetails={user}
      />
      <ChangePasswordModal
        open={openModal.changePwd}
        setOpen={(isOpen) => setOpenModal((prev) => ({ ...prev, changePwd: isOpen }))}
        userDetails={user}
      />
    </Container>
  );
};

export default Profile;
