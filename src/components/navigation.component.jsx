import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";
  import { SocialIcon } from "react-social-icons";

export const Navigation = () => {
  return (
    <div className="navigation">
        <Navbar dark expand="md">
            <NavbarBrand href="/">
              <SocialIcon url="https://www.instagram.com/sebastiansaint/" />{" "}
              <SocialIcon url="https://www.facebook.com/sebastian.mattsson" />{" "}
              <SocialIcon url="https://soundcloud.com/sebastiansaint" />{" "}
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Frontpage </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Gallery/">Gallery </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/About/">About Me </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact/">Contact Me </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Mixes/">Mixes </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
    </div>
  );
};
