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
import { connect } from "react-redux";

export class HomeContentPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  componentDidMount() {
    const { ...p } = this.props;
    p.getAllText();
  }

  render() {
    const { ...p } = this.props;

    const text = p.textCollection.map(textElement => ({
      key: textElement.id,
      data: textElement.pageData
    }));

    const homeText = text.filter(x => x.key === 201).map(x => x.data);

    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />
        <Section padding="40% 0 0 0" style={Styles.row}>
          <Col>
            <PageHeading>Software Solutions</PageHeading>
          </Col>
        </Section>
        <Section padding="0 0 0 2%">
          <Col>
            <InfoPanelText>{homeText}</InfoPanelText>
          </Col>
        </Section>
        <Section padding="20% 0 0 2%">
          <Col>
            <a href="/projects">
              <ButtonStyled outline color="primary" size="lg">
                Explore
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
  carousel: state.carousel.carousel
});

const mapDispatchToProps = {
  getAllText,
  getCarousel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContentPanel);
