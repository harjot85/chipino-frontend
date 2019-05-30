import React, { Component } from "react";
import { Container } from "reactstrap";

//Components
import NavPanel from "../../components/navpanel/navpanel";
import { InfoPanelText } from "../../utilities/styledShared";
import { ContainerCurved } from "../../utilities/styledShared";

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
        <Container style={{ display: "flex" }}>
          <NavPanel />
          <ContainerCurved>
            <InfoPanelText>{aboutText}</InfoPanelText>
          </ContainerCurved>
        </Container>
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
