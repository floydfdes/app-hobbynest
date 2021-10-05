import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/surfboard.png";
import "./styles.scss";

function Appnavbar() {
  const hideDropdown = () => {
    var dropDownMenu = document.getElementsByClassName("dropdown-menu show");
    var navItem = document.getElementById("basic-nav-dropdown");
    navItem.click();
    dropDownMenu[0].classList.remove("show");

    if (document.getElementById("navbar-toggle-button")) {
      document.getElementById("navbar-toggle-button").click();
    }
  };

  const hideNavbar = () => {
    if (document.getElementById("navbar-toggle-button")) {
      document.getElementById("navbar-toggle-button").click();
    }
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/home">
            <img className="logo-image" src={LogoImage} alt="logo" />
            Utilities
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          id="navbar-toggle-button"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="PREDICTION" id="basic-nav-dropdown">
              <Link
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
            </NavDropdown>
            <Link onClick={hideNavbar} className="nav-link" to="/hobbies">
              HOBBIES
            </Link>
            <Link onClick={hideNavbar} className="nav-link" to="/about">
              ABOUT
            </Link>
          </Nav>
          <Nav>
            <Link
              onClick={hideNavbar}
              className="nav-link nav-link-login"
              to="/login"
            >
              LOGIN
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appnavbar;
