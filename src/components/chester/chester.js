import React, { Component } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { getAllImages } from "../../redux/actions/media";

import { Col, Row } from "reactstrap";

const ChesterImage = styled.img`
  width: 600px;
  height: 650px;

  @media (max-width: 1400px) {
    width: 500px;
    height: 540px;  
  }
`;

export class Chester extends Component {
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
            <ChesterImage src={chesterLogo} alt="Chipino Meshworks" />
          </Col>
        </Row>
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
)(Chester);
