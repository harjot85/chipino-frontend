import styled from "styled-components";
import { Col } from "reactstrap";

export const FooterStyled = styled(Col)`
  height: 100%;
  background-color: black;
  left: 0;
  text-align: center;
  padding-bottom: 1%;

  &&& {
    margin-top: 4%;
    bottom: 0;
    position: sticky;
  }
`;

export const FooterIcon = styled.div`
  font-size: 64px;
  color: grey;
  padding: 8px;
  margin: 6% 10px;
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${props => props.hoverColor || "blue"};
    transform: scale(1.1);
  }
`;