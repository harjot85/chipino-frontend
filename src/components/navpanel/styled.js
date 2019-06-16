import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
  font-size: 28px;
  font-family: "Poiret One", cursive;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  margin-top: 15px;
  padding: 10px;
  color: #323232;
  text-shadow: 2px 2px 6px #aaa

  &:hover {
    color: #cea100;
    text-decoration:none;
  }
`;