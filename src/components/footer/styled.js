import styled from "styled-components";

export const FooterStyled = styled.div`
  margin-bottom: 0em;
  left: 0;
  bottom: 0;
  text-align: center;
`;


export const FooterIconContainer = styled.div`
  margin-top: 3%;
  margin-left: 5%;
  margin-right: 5%;
  border: 3px solid black;
  border-radius: 50%;
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
