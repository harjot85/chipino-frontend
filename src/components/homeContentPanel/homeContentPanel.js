import React, { Component } from "react";

//Components
import { InfoPanelText, ContainerCurved } from "../../utilities/styledShared";

//Redux
import { getAllText } from "../../redux/actions/text";
import { connect } from "react-redux";

export class HomeContentPanel extends Component {
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
      <React.Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />
        <ContainerCurved>
          <InfoPanelText>{homeText}</InfoPanelText>
        </ContainerCurved>
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
)(HomeContentPanel);
