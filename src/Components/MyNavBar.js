import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="md" dark className="navbar px-3">
      <NavbarBrand tag={Link} to="/">🔥 BRILLS</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
        <NavItem>
            <NavLink tag={Link} to="/"> <b>HOME</b> </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/About"> <b>ABOUT</b> </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/Menu"> <b>MENU</b> </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/Gallery"> <b>GALLERY</b> </NavLink>
          </NavItem>        
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;


