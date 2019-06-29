import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import styled from "styled-components";

const NavbarStyled = styled(Navbar)`
    height: 80px;
    
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); 
`;

const NavItemStyled = styled(NavItem)`
  font-size: 24px;
  color: black;
  padding-left: 5%;
`;

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <NavbarStyled color="white" light expand="md" sticky={"top"}>
        <NavbarBrand href="/">Chipino Meshworks</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItemStyled>
              <NavLink href="/">Home</NavLink>
            </NavItemStyled>
            <NavItemStyled>
              <NavLink href="/about">About</NavLink>
            </NavItemStyled>
            <NavItemStyled>
              <NavLink href="/projects">Projects</NavLink>
            </NavItemStyled>
            <NavItemStyled>
              <NavLink href="/contact">Contact</NavLink>
            </NavItemStyled>
          </Nav>
        </Collapse>
      </NavbarStyled>
    );
  }
}
