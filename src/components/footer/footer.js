import React, { Component } from "react";
import { Row } from "reactstrap";

//Components
import { FooterIcon, FooterStyled } from "./styled";
import { Text, ColStyled } from "../../utilities/styledShared";

//Redux
import { connect } from "react-redux";
import { getAllSocialMediaIcons } from "../../redux/actions/socialMedia";
import { getConfiguration } from "../../redux/actions/configuration";
import { getAllText } from "../../redux/actions/text";

export class Footer extends Component {
  componentDidMount() {
    const { ...p } = this.props;
    p.getAllSocialMediaIcons();
    p.getAllText();
  }

  render() {
    const { ...p } = this.props;

    const faviconCollection = p.socialMedia.map(favicon => ({
      id: favicon.id,
      iconClass: favicon.iconClass,
      linkTo: favicon.linkTo,
      hoverColor: favicon.hoverColor
    }));

    const text = p.textCollection.map(textElement => ({
      key: textElement.id,
      data: textElement.displayText
    }));

    const config = p.configuration.map(c => ({
      key: c.id,
      footerCopyrightFontSize: c.footerCopyrightFontSize,
      footerCopyrightFontColor: c.footerCopyrightFontColor
    }));
    
    const footerCopyrightFontSize = config.map(x => x.footerCopyrightFontSize);
    const footerCopyrightFontColor = config.map(x => x.footerCopyrightFontColor);

    const copyrightText = text.filter(x => x.key === 109).map(x => x.data);

    return (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
          integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns"
          crossOrigin="anonymous"
        />
        {faviconCollection.length && (
        <FooterStyled>
          {faviconCollection.map(socialMediaIcon => (
            <a href={socialMediaIcon.linkTo}>
              <FooterIcon
                key={socialMediaIcon.id}
                className={socialMediaIcon.iconClass}
                hoverColor={socialMediaIcon.hoverColor}
              />
            </a>
          ))}
          <Row>
            <ColStyled padding="0 25% 2% 25%">
              <Text fontSize={footerCopyrightFontSize} textColor={footerCopyrightFontColor}> {copyrightText}</Text>
            </ColStyled>
          </Row>
        </FooterStyled>
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  socialMedia: state.socialMedia.socialMediaIcons,
  textCollection: state.text.allText,
  configuration: state.configuration.configuration
});

const mapDispatchToProps = {
  getAllSocialMediaIcons,
  getAllText,
  getConfiguration
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
