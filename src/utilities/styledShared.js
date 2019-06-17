import styled from "styled-components";

export const InfoPanelText = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #cdcdcd;
  font-family: Poiret One, cursive;
  text-align: right;
`;

export const ContainerCurved = styled.div`
  height: ${props => props.height || "-webkit-fill-available"};
  background-color: grey;
  border-radius: 400px/50% 0 0 50%;
  background-image: darkgrey;
`;

export const PageHeading = styled.h1`
  color: ${props => props.color || "white"};
  font: ${props => props.font || "Poiret One, cursive"};
  font-size: ${props => props.size || "36px"};
`;

export const ContainerStyled = styled.div`
    float: right;
    padding: 2% 4% 2% 0;
    width: 70%;
    height: 100%;
`;
