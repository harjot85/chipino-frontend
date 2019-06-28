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
  padding: ${props => props.padding || "5% 2%"};
`;

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />


        <Section padding="2%">
          <Col lg={6} md={6}>
            <HomeContentPanel />
          </Col>
          <Col lg={6} md={6}>
            <Chester />
          </Col>
        </Section>

        <Section>
          <Col>
            <About />
          </Col>
        </Section>

        <Section>
          <Col lg="12" md="12" sm="12">
            <PageHeading>Projects</PageHeading>
            <hr />
          </Col>
          <ProjectCollection />
          <Col className="text-right">
            <a href="/projects">See all ></a>
          </Col>
        </Section>

        <Section>
        <Col lg="12" md="12" sm="12">
            <PageHeading>Say Hello</PageHeading>
            <hr />
          </Col>
          <Col>
            <Contact />
          </Col>
        </Section>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
