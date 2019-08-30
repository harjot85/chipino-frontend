import React, { Component } from "react";
import { Col } from "reactstrap";

//Components
import {
  InfoPanelText,
  PageHeading,
  ButtonStyled,
  Section,
  Styles
} from "../../utilities/styledShared";

//Redux
import { getAllText } from "../../redux/actions/text";
import { getCarousel } from "../../redux/actions/carousel";
import { getConfiguration } from "../../redux/actions/configuration";

import { connect } from "react-redux";

export class HomeContentPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

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

    const config = p.configuration.map(c => ({
      key: c.id,
      bootstrapClass: c.buttonClass,
      headTitleFontSize: c.headTitleFontSize,
      headTitleFontColor: c.headTitleFontColor,
      subHeadTitleFontSize: c.subHeadTitleFontSize,
      subHeadTitleFontColor: c.subHeadTitleFontColor,
    }));

    
    const bootstrapClass = config.map(x => x.bootstrapClass);

    const headText = text.filter(x => x.key === 103).map(x => x.data);
    const headTitleFontSize = config.map(x => x.headTitleFontSize);
    const headTitleTextFontColor = config.map(x => x.headTitleFontColor);

    const subText = text.filter(x => x.key === 102).map(x => x.data);
    const subHeadTitleFontSize = config.map(x => x.subHeadTitleFontSize);
    const subHeadTitleTextFontColor = config.map(x => x.subHeadTitleFontColor);

    const buttonText = text.filter(x => x.key === 107).map(x => x.data);

    return (
      <div>
        <Section padding="40% 0 0 0" style={Styles.row}>
          <Col>
            <PageHeading color={headTitleTextFontColor} size={headTitleFontSize}>{headText}</PageHeading>
          </Col>
        </Section>
        <Section padding="0 0 0 2%">
          <Col>
            <InfoPanelText color={subHeadTitleTextFontColor} size={subHeadTitleFontSize}>{subText}</InfoPanelText>
          </Col>
        </Section>
        <Section padding="20% 0 0 2%">
          <Col>
            <a href="/projects">
              <ButtonStyled outline color={bootstrapClass} size="lg">
                {buttonText}
              </ButtonStyled>
            </a>
          </Col>
        </Section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  textCollection: state.text.allText,
  carousel: state.carousel.carousel,
  configuration: state.configuration.configuration
});

const mapDispatchToProps = {
  getAllText,
  getCarousel,
  getConfiguration
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContentPanel);
