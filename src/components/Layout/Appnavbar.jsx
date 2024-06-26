import "./styles.scss";

import { Container, Nav } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Avatar from '@mui/material/Avatar';
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";

function Appnavbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  const history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setScreenHeight();
    window.addEventListener("resize", setScreenHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const setScreenHeight = () => {
    setScreenWidth(window.innerWidth);
  };

  // const hideDropdown = () => {
  //   var dropDownMenu = document.getElementsByClassName("dropdown-menu show");
  //   var navItem = document.getElementById("basic-nav-dropdown");
  //   navItem.click();
  //   dropDownMenu[0].classList.remove("show");

  //   if (document.getElementById("navbar-toggle-button")) {
  //     document.getElementById("navbar-toggle-button").click();
  //   }
  // };

  const hideNavbar = () => {
    if (document.getElementById("navbar-toggle-button")) {
      document.getElementById("navbar-toggle-button").click();
    }
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

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
          <Navbar.Toggle
            id="navbar-toggle-button"
            aria-controls="basic-navbar-nav"
          >
            {user && (
              <Avatar
                onClick={goToProfile}
                className="profile-avatar mx-2"
                alt={user?.result?.firstName[0]}
                src={
                  user.result?.imageUrl
                    ? user.result?.imageUrl
                    : user.result?.firstName
                }
              />
            )}
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        )}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <NavDropdown title="Prediction" id="basic-nav-dropdown">
              {/* <Link
                onClick={hideDropdown}
                className="dropdown-item"
                to="/imagedetection"
              >
                Image
              </Link> 
              <Link
                onClick={hideDropdown}
                className="dropdown-item"
                to="/hearts"
              >
                Heartscape
              </Link>
              <Link
                onClick={hideDropdown}
                className="dropdown-item"
                to="/mobilenet"
              >
                Mobile net
              </Link>
            </NavDropdown> */}
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
                src={
                  user.result?.imageUrl
                    ? user.result?.imageUrl
                    : user.result?.firstName
                }
              />
            )}
            {user ? (
              <Link onClick={logout} to="/" className="nav-link nav-link-login">
                Logout
              </Link>
            ) : (
              <Link
                onClick={hideNavbar}
                className="nav-link nav-link-login"
                to="/login"
              >
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appnavbar;
