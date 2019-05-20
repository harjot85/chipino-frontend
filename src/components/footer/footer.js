import React, { Component } from "react";

import { connect } from "react-redux";
import { getAllText } from "../../redux/actions/text";
import { getAllSocialMediaIcons } from "../../redux/actions/socialMedia";

import { Row } from "reactstrap";
import { FooterStyled, FooterIcon, FooterIconContainer } from "./styled";

export class Footer extends Component {
  componentDidMount() {
    this.props.getAllText();
    this.props.getAllSocialMediaIcons();
  }

  render() {
    const { ...p } = this.props;

    const textElements = p.allText.map(textElement => ({
      key: textElement.id,
      desc: textElement.description
    }));

    const faviconCollection = p.socialMedia.map(favicon => ({
      id: favicon.id,
      iconClass: favicon.iconClass,
      linkTo: favicon.linkTo,
      hoverColor: favicon.hoverColor
    }));

    const homeText = textElements.filter(x => x.key === 0).map(x => x.desc);
    const iconClass = faviconCollection
      .filter(x => x.id === 501)
      .map(x => x.iconClass);
    const hoverColor = faviconCollection
      .filter(x => x.id === 501)
      .map(x => x.hoverColor);

    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
          integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns"
          crossOrigin="anonymous"
        />
        <FooterStyled>
          <Row
            style={{
              display: "flex",
              borderTop: "5px solid #4599BB",
              position: "fixed",
              width: "15%",
              bottom: 10
            }}
          >
            <FooterIconContainer className="social-div fb">
              <a href="/">
                <FooterIcon className={iconClass} hoverColor={hoverColor} />
              </a>
            </FooterIconContainer>
            <FooterIconContainer className="">
              <a href="/">
                <FooterIcon className="fab fa-reddit-alien" />
              </a>
            </FooterIconContainer>

            <FooterIconContainer className="">
              <a href="/">
                <FooterIcon className="fa-medium fab" />
              </a>
            </FooterIconContainer>
          </Row>
        </FooterStyled>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  allText: state.text.allText,
  socialMedia: state.socialMedia.socialMediaIcons
});

const mapDispatchToProps = {
  getAllText,
  getAllSocialMediaIcons
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
