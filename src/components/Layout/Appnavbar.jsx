import "./styles.scss";

import React, { useCallback, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import { useDispatch } from "react-redux";

const Appnavbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const hideNavbar = () => {
    const navbarToggle = document.getElementById("navbar-toggle-button");
    if (navbarToggle) {
      navbarToggle.click();
    }
  };

  const logout = () => {
    hideNavbar();
    dispatch({ type: "LOGOUT" });
    history("/");
    setUser(null);
  };

  const goToProfile = () => {
    history("/profile");
  };

  return (
    <Navbar expand="lg">
      <Container className="navbar-fixed-top-mobile">
        <Navbar.Brand>
          <Link to="/home">
            <h2 className="main-logo">HobbyNest</h2>
          </Link>
        </Navbar.Brand>
        {screenWidth < 990 && (
          <Navbar.Toggle id="navbar-toggle-button" aria-controls="basic-navbar-nav">
            {user && (
              <Avatar
                onClick={goToProfile}
                className="profile-avatar mx-2"
                alt={user?.result?.firstName[0]}
                src={user.result?.imageUrl || user.result?.firstName}
              />
            )}
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link onClick={hideNavbar} className="nav-link" to="/hobbies">
              Hobbies
            </Link>
            <Link onClick={hideNavbar} className="nav-link" to="/about">
              About
            </Link>
          </Nav>
          <Nav className="profile-login-div">
            {user && screenWidth > 768 && (
              <Avatar
                onClick={goToProfile}
                className="profile-avatar mx-2"
                alt={user?.result?.firstName[0]}
                src={user.result?.imageUrl || user.result?.firstName}
              />
            )}
            {user ? (
              <Link onClick={logout} to="/" className="nav-link nav-link-login">
                Logout
              </Link>
            ) : (
              <Link onClick={hideNavbar} className="nav-link nav-link-login" to="/login">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appnavbar;
