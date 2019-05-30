import React, { Component } from "react";
import { Container } from "reactstrap";

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
        <Container style={{ display: "flex" }}>
          <NavPanel />
          <ProjectPanel />
        </Container>
      </React.Fragment>
    );
  }
}
