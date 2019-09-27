import React, { Component } from "react";
import { Row, Col } from "reactstrap";

//Components
import { InfoPanelText } from "../../utilities/styledShared";
import Chester from "../chester/chester";

//Redux
import { getAllText } from "../../redux/actions/text";
import { getConfiguration } from "../../redux/actions/configuration";
import { connect } from "react-redux";

export class About extends Component {
  componentDidMount() {
    const { ...p } = this.props;
    p.getAllText();
    p.getConfiguration();
  }
  render() {
    const { ...p } = this.props;

    const text = p.textCollection.map(textElement => ({
      key: textElement.id,
      data: textElement.displayText
    }));
    
    const aboutText = text.filter(x => x.key === 101).map(x => x.data);
    
    const config = p.configuration.map(c => ({
      key: c.id,
      fontSize: c.contentFontSize,
      fontColor: c.contentFontColor
    }));

    const size = config.map(x => x.fontSize);
    const color = config.map(x => x.fontColor);
    
    return (
      <React.Fragment>
        <Row>
          <Col lg={6} md={6}>
          {/* This is a test comment */}
            <InfoPanelText size={size} color={color}>{aboutText}</InfoPanelText>
          </Col>
          <Col lg={6} md={6}>
            <Chester />
          </Col>
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
)(About);
