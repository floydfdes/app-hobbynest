import './styles.scss';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Button, Drawer, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Appnavbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const history = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = useCallback(() => {
    dispatch({ type: 'LOGOUT' });
    history('/');
    setUser(null);
    handleClose();
    setMobileOpen(false);
  }, [dispatch, history]);

  const goToProfile = useCallback(() => {
    history('/profile');
    handleClose();
    setMobileOpen(false);
  }, [history]);

  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} to="/hobbies" onClick={handleDrawerToggle}>
          <ListItemText primary="Hobbies" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
          <ListItemText primary="About" />
        </ListItem>
        {user && (
          <>
            <ListItem button onClick={goToProfile}>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={logout}>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        )}
        {!user && (
          <ListItem button component={Link} to="/login" onClick={handleDrawerToggle}>
            <ListItemText primary="Login" />
          </ListItem>
        )}
      </List>
    </div>
  );

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        <Typography variant="h6" component={Link} to="/home" className="navbar-brand">
          HobbyNest
        </Typography>
        <div className="navbar-right">
          {!isMobile && (
            <>
              <Button color="inherit" component={Link} to="/hobbies">Hobbies</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
            </>
          )}
          {!isMobile && user && (
            <>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt={user?.result?.firstName[0]} src={user.result?.imageUrl || user.result?.firstName} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={goToProfile}>Profile</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </>
          )}
          {!isMobile && !user && (
            <Button color="inherit" component={Link} to="/login">Login</Button>
          )}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </div>
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Appnavbar;
