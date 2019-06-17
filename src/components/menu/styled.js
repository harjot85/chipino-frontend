import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
  font-size: 28px;
  padding-right: .5%;
  font-family: "Poiret One", cursive;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  margin-top: 25px;
  color: #323232;
  text-shadow: 2px 2px 6px #aaa

  &:hover {
    color: #459993;
  }
`;