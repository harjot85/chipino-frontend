import React, { Component } from "react";
import { connect } from "react-redux";
import { getSocialMedia } from "../../redux/actions/text";
import { Row } from "reactstrap";

import { FooterStyled, FooterIcon, FooterIconContainer } from "./styled";

export class Footer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getSocialMedia();
    // console.log("Component Did Mount: " + this.props.socialMedia);
  }

  render() {
    //const p = this.props.socialMedia.socialMedia; // || this.props.socialMedia.link;
    console.log("render: " + this.props.socialMedia);
    const socialM = Object.keys(this.props.socialMedia || []).map(social => ({
      key: social.id,
      name: social.socialMedia
    }));

    console.log(socialM);

    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
          integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns"
          crossOrigin="anonymous"
        />
        <FooterStyled>
          {/* {console.log(JSON.stringify(p.socialMedia))} */}
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
const mapStateToProps = store => ({
  socialMedia: store.text.socialMedia || []
});

const mapDispatchToProps = {
  getSocialMedia
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
