import { Delete as DeleteIcon, Edit as EditIcon, VpnKey as VpnKeyIcon } from '@mui/icons-material';
import {
  Avatar, Box, Button, Card, CardContent, Container, Grid, Typography,
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
    setOpenModal(prev => ({ ...prev, [modalType]: true }));
  };

  if (!user) return <Typography variant="h6">Loading...</Typography>;

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Card elevation={3}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  sx={{ width: 120, height: 120, fontSize: 48, mb: 2 }}
                  alt={`${user?.firstName} ${user?.lastName}`}
                  src={user?.imageUrl}
                >
                  {!user?.imageUrl && `${user?.firstName[0]}${user?.lastName[0]}`}
                </Avatar>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h4" gutterBottom>
                  {user?.firstName} {user?.lastName}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {user?.email}
                </Typography>
                <Grid container spacing={2}>
                  {['Change Password', 'Edit Profile', 'Delete Profile'].map((text, index) => (
                    <Grid item xs={12} sm={4} key={text}>
                      <Button
                        fullWidth
                        variant={index === 2 ? "outlined" : "contained"}
                        color={index === 2 ? "error" : index === 1 ? "secondary" : "primary"}
                        startIcon={index === 0 ? <VpnKeyIcon /> : index === 1 ? <EditIcon /> : <DeleteIcon />}
                        onClick={handleModalOpen(['changePwd', 'edit', 'delete'][index])}
                        size={isMobile ? "small" : "medium"}
                      >
                        {text}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <DeleteModal
        open={openModal.delete}
        setOpen={(isOpen) => setOpenModal(prev => ({ ...prev, delete: isOpen }))}
        userDetails={user}
      />
      <EditModal
        open={openModal.edit}
        setOpen={(isOpen) => setOpenModal(prev => ({ ...prev, edit: isOpen }))}
        userDetails={user}
      />
      <ChangePasswordModal
        open={openModal.changePwd}
        setOpen={(isOpen) => setOpenModal(prev => ({ ...prev, changePwd: isOpen }))}
        userDetails={user}
      />
    </Container>
  );
};

export default Profile;
