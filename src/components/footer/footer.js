import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllText } from "../../redux/actions/text";
import { getAllSocialMediaIcons } from "../../redux/actions/socialMedia";
import { Row } from "reactstrap";

import { FooterStyled, FooterIcon, FooterIconContainer } from "./styled";

export class Footer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllText();
    this.props.getAllSocialMediaIcons();
  }

  
  render() {
    const { ...p } = this.props;
    
    console.log(p.socialMedia);

    const i = p.allText.findIndex(x => x.id === 0)
    
    const textElements = p.allText.map((textElement) => ({
      key: textElement.id,
      desc: textElement.description
    }));

    const homeText = textElements.filter(x => x.key === 0).map(x => x.desc)

    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
          integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns"
          crossOrigin="anonymous"
        />
        <FooterStyled>
          {/* {console.log(JSON.stringify(p.AllText))} */}
          <Row
            style={{
              display: "flex",
              borderTop: "5px solid #4599BB",
              position: "fixed",
              width: "15%",
              bottom: 10
            }}
          >
            {<p>{homeText}</p>}
         
            <FooterIconContainer className="social-div fb">
              <a href="/">
                <FooterIcon className="fab fa-github" />
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
