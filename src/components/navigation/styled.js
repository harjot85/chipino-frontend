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
  }
`;

export const NavLinkStyled = styled(NavLink)`
  &&&& {
    color: #171717;
    border-bottom: 2px solid transparent;
    
    :hover {
      border-bottom-color: ${props => props.bottomBorderColor || "#47a7fa"};
      color: #000;
    }
  }
`;

export const BrandName = styled.div`
  border: 1px solid #d9dfe2;
  border-radius: 2%;
  padding: 10px 20px;
  
`;

export const ChipinoLogo = styled.img`
  max-width: 100px;
  max-height: 55px;
`;
