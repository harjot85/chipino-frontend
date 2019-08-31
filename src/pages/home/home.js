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

//Redux
import { getAllText } from "../../redux/actions/text";
import { getConfiguration } from "../../redux/actions/configuration";
import { connect } from "react-redux";

export class Home extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.shadowOnScroll);
    this.props.getAllText();
  }

  render() {

    const { ...p } = this.props;

    const text = p.textCollection.map(textElement => ({
      key: textElement.id,
      data: textElement.displayText
    }));

    const about = text.filter(x => x.key === 106).map(x => x.data);
    const projects = text.filter(x => x.key === 105).map(x => x.data);
    const seeProjects = text.filter(x => x.key === 107).map(x => x.data);
    const contact = text.filter(x => x.key === 108).map(x => x.data);

    const config = p.configuration.map(c => ({
      key: c.id,
      bootstrapClass: c.projectLinkButtonClass,
    }));

    const bootstrapClass = config.map(x => x.bootstrapClass);

    
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
        <Col lg="12" md="12" sm="12">
            <PageHeading>{about}</PageHeading>
            <hr/>
          </Col>
          <Col>
            <About />
          </Col>
        </Section>

        <Section id="projects" padding="7% 2% 20% 2%" style={Styles.row}>
          <Col lg="8" md="8" sm="8">
            <PageHeading>{projects}</PageHeading>
          </Col>
          <Col lg="4" md="4" sm="4" className="text-right">
             <a href="/projects">
            <Button outline color={bootstrapClass} size="lg">
               {seeProjects}
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
            <PageHeading>{contact}</PageHeading>
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

const mapStateToProps = state => ({
  textCollection: state.text.allText,
  configuration: state.configuration.configuration
});

const mapDispatchToProps = {
  getAllText,
  getConfiguration
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
