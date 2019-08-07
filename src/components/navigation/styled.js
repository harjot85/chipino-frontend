import { Navbar, NavItem, NavLink } from "reactstrap";
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
    border-bottom: 2px solid transparent;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  &&&& {
    color: #171717;

    :hover {
      border-bottom: 2px solid #47a7fa;
      color: #000;
    }
  }
`;

export const BrandName = styled.div`
  border: 1px solid #D9DFE2;
  border-radius: 2%;
  padding: 10px 20px;
`;
