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
      isOpen: false,
      shadow: "0 0 10px rgba(0, 0, 0, 0)"
    };
  }

  shadowOnScroll = e => {
    if (window.scrollY > 400) {
      this.setState({ shadow: "0 0 10px rgba(0, 0, 0, 0.4)" });
    } else {
      this.setState({ shadow: "0 0 10px rgba(0, 0, 0, 0)" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.shadowOnScroll);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <NavbarStyled
        color="white"
        light
        expand="md"
        sticky={"top"}
        style={{ boxShadow: this.state.shadow }}
      >
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
