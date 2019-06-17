import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { ContainerCurved, ContainerStyled } from "../../utilities/styledShared";

//Components
import NavPanel from "../../components/navpanel/navpanel";
import ProjectPanel from "../../components/projectPanel/projectPanel";

export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />
        <Row>
          <Col lg={3}>
            <NavPanel />
          </Col>
          <Col lg={9}>
            <ContainerCurved>
            <ContainerStyled>
              <ProjectPanel />
              </ContainerStyled>
            </ContainerCurved>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
