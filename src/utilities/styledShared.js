import styled from "styled-components";
import {Row} from "reactstrap";

export const InfoPanelText = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: black;
  font-family: Poiret One, cursive;
`;

export const PageHeading = styled.h1`
  color: ${props => props.color || "black"};
  font: ${props => props.font || "Poiret One, cursive"};
  font-size: ${props => props.size || "36px"};
`;


export const Section = styled(Row)`
  padding: ${props => props.padding || "5% 2% 2% 2%"};
`;

export const Styles = {
  row: {
    marginLeft: '0px', 
    marginRight: '0px'
  }
}
