import styled from "styled-components";
import { Col } from "reactstrap";

export const FooterStyled = styled(Col)`
  height: 100%;
  background-color: black;
  left: 0;
  bottom: 0;
  text-align: center;
  margin-top: 4%;
  position: fixed;
`;

export const FooterIcon = styled.div`
  font-size: 64px;
  color: grey;
  padding: 8px;
  margin: 6% 10px;
  border-radius: 50%;
  transition: all .2s ease-in-out; 

  :hover {
    color: ${props => props.hoverColor || "blue"};
    transform: scale(1.1); 
    border-bottom-color: ${props => props.hoverColor || "blue"};
    box-shadow:
    0 0 30px 10px ${props => props.hoverColor || "blue"};
  }
`;
