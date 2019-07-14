import { Navbar, NavItem } from "reactstrap";
import styled from "styled-components";

export const NavbarStyled = styled(Navbar)`
  &&& {
    height: 80px;
    padding-right: 2%;
  }
`;

export const NavItemStyled = styled(NavItem)`
  &&& {
    font-size: 24px;
    color: black;
  }
`;
