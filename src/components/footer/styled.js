import styled from "styled-components";
import { Col } from 'reactstrap';

export const FooterStyled = styled(Col)`
  border-top: 5px solid #07c; 
  bottom: 80px;
  padding-top: 10px;
`;

export const FooterIconContainer = styled.div`
  border: 3px solid black;
  border-radius: 50%;
  position: absolute;
  padding: 8px;
  
  &:hover {
    border-color: ${props => props.hoverColor|| "blue" };
   }
`;

export const FooterIcon = styled.div`
  font-size: 32px;
  color: black;
  
  ${FooterIconContainer}:hover & {
   color: ${props => props.hoverColor|| "blue" };
  }
`;
