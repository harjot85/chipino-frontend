import styled from "styled-components";
import { Badge, Card } from "reactstrap";

export const FilterValuesHolder = styled.div`
  padding: 15px;
  margin: 15px 15px 0;
  width: 100%;
  display: flex;
  border: 1px solid #d9dfe2;
  borderradius: 0.25rem;
`;

export const ProjectCard = styled(Card)`
  display: inline-block;
  height: 300px;
  width: 240px;
  background-color: white;
  margin: auto;
  margin-bottom: 8%;
  position: relative;

  @media (max-width: 1000px) {
    height: 260px;
    width: 220px;
  }
`;

export const TechBadge = styled(Badge)`
  margin-top: 2px;
  box-shadow: 0 0 3px #07c;
  &&& {
    padding: ${props => props.padding};
  }
`;
