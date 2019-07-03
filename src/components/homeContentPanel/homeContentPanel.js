import React, { Component } from "react";
import {
 Button,
  Row,
  Col
} from "reactstrap";

//Components
import {
  InfoPanelText,
  PageHeading,
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
      <div style={{height: '100vh'}}>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />
        <Row style={{paddingTop: "40%"}}> 
          <Col>
            <PageHeading>Software Solutions</PageHeading>
          </Col>
        </Row>
        <Row>
          <Col>
            <InfoPanelText>{homeText}</InfoPanelText>
          </Col>
        </Row>
        <Row style={{paddingTop: "20%"}}>
          <Col>
          <Button outline color="primary" size="lg">Explore</Button>
          </Col>
        </Row>
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
