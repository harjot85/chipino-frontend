import styled from "styled-components";
import { Col } from "reactstrap";

export const FooterStyled = styled(Col)`
  height: 100%;
  background-color: black;
  left: 0;
  bottom: 0;
  text-align: center;
  margin-top: 2%;
`;

export const FooterIcon = styled.div`
  font-size: 48px;
  color: white;
  padding: 4% 1% 4% 1%;
  
  :hover {
    color: ${props => props.hoverColor || "blue"};
  }
`;
