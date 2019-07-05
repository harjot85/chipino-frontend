import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import { Badge, Card, Button } from "reactstrap";

export const ProjectCard = styled(Card)`
  display: inline-block;
  height: 360px;
  width: 260px;
  background-color: white;
  margin: auto;
  margin-bottom: 10px;
  position: relative;
  box-shadow: 1px 2px 4px 1px #c8d8d8;
`;

export const TechBadge = styled(Badge)`
  margin-left: 6px;
  box-shadow: 0 0 3px #07c;
  &&& {
    font-weight: 500;
  }
`;

export const TechBadgeHolder = styled.div`
  bottom: 3px;
  height: 30px;
  position: absolute;
`;

export const SliderButton = styled(Button)`
  &&& {
    border-radius: 50%;
    box-shadow: 0 0 4px 1px #c8d8d8;
  }
`;

export const Carousel = styled(ItemsCarousel)`
  padding-left: 8%;
  padding-right: 8%;
  button {
    background-color: white;
  }
`;