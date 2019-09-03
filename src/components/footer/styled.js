import styled from "styled-components";
import { Col } from "reactstrap";

export const FooterStyled = styled(Col)`
  
  background-color: black;
  
  text-align: center;
  padding-bottom: 1%;

  &&& {
    margin-top: 4%;
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
`;

export const FooterIcon = styled.div`
  font-size: 64px;
  color: grey;
  padding: 8px;
  margin: 4% 10px;
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${props => props.hoverColor || "blue"};
    transform: scale(1.1);
  }
`;