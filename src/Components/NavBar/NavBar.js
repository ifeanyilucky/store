import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
} from "reactstrap";
import style from "./navbar.module.css";
import { FaArrowRight } from "react-icons/fa";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="transparent" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <svg
              width="49"
              height="35"
              viewBox="0 0 49 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="15" width="20" height="20" rx="10" fill="#9C69E2" />
              <rect x="29" width="20" height="35" rx="10" fill="#F063B8" />
            </svg>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto ml-5" navbar>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Help</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Sign up</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <button className={style.navButton}>
                Request a demo <FaArrowRight className={style.arrow} />
              </button>
            </NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
