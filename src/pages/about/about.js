import React, { Component } from "react";
import { Row, Col } from "reactstrap";

//Components
import { PageHeading, InfoPanelText } from "../../utilities/styledShared";
import Chester from "../../components/chester/chester";

//Redux
import { getAllText } from "../../redux/actions/text";
import { connect } from "react-redux";

export class About extends Component {
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
    const aboutText = text.filter(x => x.key === 101).map(x => x.data);
    return (
      <React.Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />
        <Row>
          <Col >
            <Row>
              <Col style={{ textAlign: "left" }}>
                <PageHeading>About</PageHeading>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg ={6} md ={6}>
                <InfoPanelText>{aboutText}</InfoPanelText>
              </Col>
              <Col lg ={6} md ={6}>
               <Chester/>
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  textCollection: state.text.allText
});

const mapDispatchToProps = {
  getAllText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
