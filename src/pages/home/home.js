import React, { Component } from "react";
import { Row, Col } from "reactstrap";

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
        <Row>
          <Col lg={3}>
          <NavPanel />
          </Col>
          <Col lg = {9}>
          <HomeContentPanel />
          </Col>
          </Row>
      </React.Fragment>
    );
  }
}
