import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

//Components
import Chester from "../../components/chester/chester";
import About from "../../components/about/about";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import HomeContentPanel from "../../components/homeContentPanel/homeContentPanel";

import ProjectSlider from "../../components/projectSlider/projectSlider";
import { PageHeading, Section, Styles } from "../../utilities/styledShared";
import { Separator } from "../../utilities/functions";

export default class Home extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.shadowOnScroll);
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ height: "100vh" }}>
          <Section id="home" padding="2% 2% 0 2%" style={Styles.row}>
            <Col lg={6} md={6}>
              <HomeContentPanel />
            </Col>
            <Col lg={6} md={6}>
              <Chester />
            </Col>
            {Separator()}
          </Section>
        </div>
        <Section id="about" style={Styles.row}>
          <Col>
            <About />
          </Col>
        </Section>

        <Section id="projects" padding="7% 2% 20% 2%" style={Styles.row}>
          <Col lg="8" md="8" sm="8">
            <PageHeading>Projects</PageHeading>
          </Col>
          <Col lg="4" md="4" sm="4" className="text-right">
             <a href="/projects">
            <Button outline color="info" size="lg">
                See All >
              </Button>
              </a>
          </Col>

          <Col>
            <hr />
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
