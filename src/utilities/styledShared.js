import styled from "styled-components";
import { Row, Col, Button, CardBody } from "reactstrap";

export const InfoPanelText = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 200;
  color: ${props => props.color || "black"};
  font-size: ${props => props.size || "24px"};
`;

export const PageHeading = styled.h1`
  color: ${props => props.color || "black"};
  font-size: ${props => props.size || "36px"};
`;

export const Section = styled(Row)`
  padding: ${props => props.padding || "7% 2% 2% 2%"};
  margin-top: ${props => props.marginTop};

  @media only screen and (min-device-width: 320px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
    text-align: ${props => props.marginTop || "center"};
  }
`;

export const ChesterImage = styled.img`
  width: 560px;
  height: 600px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
    display: none;
  }
`;

export const Styles = {
  row: {
    marginLeft: "0px",
    marginRight: "0px"
  }
};

export const ButtonStyled = styled(Button)`
  &&& {
    padding: 1% 5%;
  }
`;

export const ButtonLink = styled(Button)`
  &&& {
    background-color: transparent;
    padding: 0;
    color: #17a2b8;
    border-color: transparent;
    :hover {
      text-decoration: underline;
      background-color: transparent;
    }
  }
`;

export const CardBodyStyled = styled(CardBody)`
  overflow: auto;
  margin-bottom: 10%;
  max-height: 56%;

  @media (max-width: 1000px) {
    max-height: 25%;
  }
`;

export const CardFooterStyled = styled(Row)`
  padding: 4px 10px;
  bottom: 0px;
  position: absolute;
  width: 100%;
`;

export const ColStyled = styled(Col)`
  &&& {
    padding: ${props => props.padding || "0"};
  }
`;

export const Text = styled.p`
  color: ${props => props.textColor || "black"};
  font-size: ${props => props.fontSize || "12px"};
  padding: ${props => props.padding || "0"};
  margin-block-end: auto;
`;
