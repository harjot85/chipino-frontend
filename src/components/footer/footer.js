import React, { Component } from "react";
import { Row } from "reactstrap";

//Components
import { FooterStyled, FooterIcon, FooterIconContainer } from "./styled";

//Redux
import { connect } from "react-redux";
import { getAllSocialMediaIcons } from "../../redux/actions/socialMedia";

export class Footer extends Component {
  componentDidMount() {
    this.props.getAllSocialMediaIcons();
  }

  render() {
    const { ...p } = this.props;

    const faviconCollection = p.socialMedia.map(favicon => ({
      id: favicon.id,
      iconClass: favicon.iconClass,
      linkTo: favicon.linkTo,
      hoverColor: favicon.hoverColor
    }));

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

          {faviconCollection.map((socialMediaIcon) =>
            <FooterIconContainer className="social-div fb" hoverColor={socialMediaIcon.hoverColor}>
              <a href={socialMediaIcon.linkTo}>
               <FooterIcon key={socialMediaIcon.id} className={socialMediaIcon.iconClass} hoverColor={socialMediaIcon.hoverColor} />
              </a>
            </FooterIconContainer>)}

          </Row>
        </FooterStyled>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  socialMedia: state.socialMedia.socialMediaIcons
});

const mapDispatchToProps = {
  getAllSocialMediaIcons
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
