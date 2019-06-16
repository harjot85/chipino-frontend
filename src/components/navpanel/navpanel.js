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
    const chesterLogo = logoType + logoData;

    return (
      <React.Fragment>
        <Row>
          <Col>
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
                    <Row>
                      <Col style={{ marginBottom: "10px", textAlign: 'right' }}>
                        <LinkStyled to="/">Home</LinkStyled>
                      </Col>
                    </Row>

                    <Row>
                      <Col style={{ marginBottom: "10px", textAlign: 'right' }}>
                        <LinkStyled to="/projects">Portfolio</LinkStyled>
                      </Col>
                    </Row>

                    <Row>
                      <Col style={{ marginBottom: "10px", textAlign: 'right' }}>
                        <LinkStyled to="/contact">Contact</LinkStyled>
                      </Col>
                    </Row>

                    <Row >
                      <Col style={{ marginBottom: "10px", textAlign: 'right' }}>
                        <LinkStyled to="/about">About</LinkStyled>
                      </Col>
                    </Row>
                  </NavigationWrapper>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Footer />
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
