import React, { Component } from "react";
import Footer from "../../components/footer/footer";

import { connect } from "react-redux";
import { getAllImages } from "../../redux/actions/media";

import { Col, Row } from "reactstrap";
import { NavigationWrapper, LinkStyled } from "./styled";

export class NavPanel extends Component {
  componentDidMount() {
    this.props.getAllImages();
  }

  render() {
    const { ...p } = this.props;

    const logo = p.images.map(image => ({
      key: image.id,
      file: image.fileContent,
      type: image.fileType
    }));

    const logoData = logo.filter(x => x.key === 201).map(x => x.file);
    const logoType = logo.filter(x => x.key === 201).map(x => x.type);
    const chesterLogo = logoType + logoData

    return (
      <React.Fragment>
        <Col >
          <Row>
            <Col>
              <img
                style={{ maxWidth: "300px", maxHeight: "250px" }}
                src={chesterLogo}
                alt="Chipino Meshworks"
              />
            </Col>
          </Row>

          <Row>
            <Col
              style={{
                fontFamily: "'Poiret One', cursive",
                fontSize: "24px",
                textShadow: "4px 4px 4px #aaa"
              }}
            >
              Chipino Meshworks
            </Col>
          </Row>

          <Row>
            <Col>
              <div
                style={{
                  padding: "30% 0 30% 0",
                  float: "right",
                  fontWeight: "600"
                }}
              >
                <NavigationWrapper>
                  <Row style={{ marginTop: "10px" }}>
                    <LinkStyled to="/">Home</LinkStyled>
                  </Row>
                  <Row style={{ marginTop: "10px" }}>
                    <LinkStyled to="/projects">Portfolio</LinkStyled>
                  </Row>
                  <Row style={{ marginTop: "10px" }}>
                    <LinkStyled to="/contact">Contact</LinkStyled>
                  </Row>
                  <Row style={{ marginTop: "10px" }}>
                    <LinkStyled to="/about">About</LinkStyled>
                  </Row>
                </NavigationWrapper>
              </div>
            </Col>
          </Row>

          <Row>
            <Footer />
          </Row>
        </Col>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  images: state.media.images
});

const mapDispatchToProps = {
  getAllImages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPanel);
