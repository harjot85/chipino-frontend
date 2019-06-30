import React, { Component } from "react";
import { Row, Col } from "reactstrap";

//Components
import Chester from "../../components/chester/chester";
import About from "../about/about";
import Contact from "../contact/contact";
import Footer from "../../components/footer/footer";
import HomeContentPanel from "../../components/homeContentPanel/homeContentPanel";

import styled from "styled-components";
import ProjectCollection from "../../components/projectCollection/projectCollection";
import { PageHeading } from "../../utilities/styledShared";

const Section = styled(Row)`
  padding: ${props => props.padding || "2%"};
`;

const styles = {
  row: {
    marginLeft: '0px', 
    marginRight: '0px'
  }
}

export default class Home extends Component {
  render() {
    return (
      <React.Fragment style={{}}>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />

        <Section style={styles.row}>
          <Col lg={6} md={6}>
            <HomeContentPanel />
          </Col>
          <Col lg={6} md={6}>
            <Chester />
          </Col>
        </Section>

        <Section style={styles.row}>
          <Col>
            <About />
          </Col>
        </Section>

        <Section padding="4% 2% 20% 2%" style={styles.row}>
          <Col lg="12" md="12" sm="12">
            <PageHeading>Projects</PageHeading>
            <hr />
          </Col>
          <Col>
            <ProjectCollection />
          </Col>
          <Col lg="1" md="1" sm="1" className="text-right">
            <a href="/projects">See all ></a>
          </Col>
        </Section>

        <Section style={styles.row}>
          <Col lg="12" md="12" sm="12">
            <PageHeading>Say Hello</PageHeading>
            <hr />
          </Col>
          <Col>
            <Contact />
          </Col>
        </Section>

        <Row style={styles.row}>
            <Footer />
        </Row>
      </React.Fragment>
    );
  }
}
