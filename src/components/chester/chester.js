import React, { Component } from "react";
import { Col, Row } from "reactstrap";

import { connect } from "react-redux";
import { getAllImages } from "../../redux/actions/media";

import { ChesterImage } from "../../utilities/styledShared";

export class Chester extends Component {
  componentDidMount() {
    if (!sessionStorage["ChesterImage"]) {
      this.props.getAllImages();
    }
  }

  getImage = p => {
    const logo = p.images.map(image => ({
      key: image.id,
      file: image.fileContent,
      type: image.fileType
    }));

    const logoData = logo.filter(x => x.key === 201).map(x => x.file);
    const logoType = logo.filter(x => x.key === 201).map(x => x.type);
    const chesterLogo = logoType + logoData;

    sessionStorage["ChesterImage"]= chesterLogo;

    return chesterLogo;
  };

  render() {
    const { ...p } = this.props;

    const chesterLogo = sessionStorage["ChesterImage"]
      ? sessionStorage["ChesterImage"]
      : this.getImage(p);

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
