import React, { Component } from "react";
import { Row, Col } from "reactstrap";

//Components
import Chester from "../../components/chester/chester";
import About from "../about/about";
import Contact from "../contact/contact";
import Footer from "../../components/footer/footer";
import HomeContentPanel from "../../components/homeContentPanel/homeContentPanel";

import ProjectSlider from "../../components/projectSlider/projectSlider";
import { PageHeading, Section, Styles } from "../../utilities/styledShared";


export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Section id="home" padding="2% 2% 0 2%" style={Styles.row}>
          <Col lg={6} md={6}>
            <HomeContentPanel />
          </Col>
          <Col lg={6} md={6}>
            <Chester />
          </Col>
        </Section>

        <Section id="about" style={Styles.row}>
          <Col>
            <About />
          </Col>
        </Section>

        <Section id="projects" padding="7% 2% 20% 2%" style={Styles.row}>
          <Col lg="10" md="10" sm="10">
            <PageHeading>Projects</PageHeading>
            
          </Col>
          <Col lg="2" md="2" sm="2" className="text-right">
            <a href="/projects">See all ></a>
          </Col>
          
          <Col>
          <hr/>
            <ProjectSlider />
          </Col>
        
        </Section>

        <Section id="contact" style={Styles.row}>
          <Col lg="12" md="12" sm="12">
            <PageHeading>Say Hello</PageHeading>
            <hr />
          </Col>
          <Col>
            <Contact />
          </Col>
        </Section>

        <Row style={Styles.row}>
          <Footer />
        </Row>
      </React.Fragment>
    );
  }
}
