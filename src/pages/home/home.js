import React, { Component } from "react";
import { Container } from "reactstrap";

//Components
import NavPanel from "../../components/navpanel/navpanel";
import HomeContentPanel from "../../components/homeContentPanel/homeContentPanel";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />
        <Container style={{ height: "100%", display: "flex" }}>
          <NavPanel />
          <HomeContentPanel />
        </Container>
      </React.Fragment>
    );
  }
}
