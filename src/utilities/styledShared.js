import styled from "styled-components";
import {Row, Button} from "reactstrap";

export const InfoPanelText = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  font-weight: 200;
  color: black;
`;

export const PageHeading = styled.h1`
  color: ${props => props.color || "black"};
  font-size: ${props => props.size || "36px"};
`;


export const Section = styled(Row)`
  padding: ${props => props.padding || "7% 2% 2% 2%"};
`;

export const Styles = {
  row: {
    marginLeft: '0px', 
    marginRight: '0px'
  }
}

export const ButtonStyled = styled(Button)`
  &&& { 
    padding: 1% 5%;
  }
`;
