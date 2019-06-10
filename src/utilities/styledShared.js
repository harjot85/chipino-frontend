import styled from "styled-components";

export const InfoPanelText = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 15%;
    padding-right: 5%;
    font-size: 18px;
    color: #cdcdcd;
    font-family: Poiret One, cursive;
`;

export const ContainerCurved = styled.div`
    width:100%;
    
    height:  ${props => props.height|| "-webkit-fill-available" };
    background-color: grey;
    border-radius: 400px/50% 0 0 50%;
    background-image: darkgrey;
`;
