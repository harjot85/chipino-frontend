import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllText } from "../../redux/actions/text";
import { Row } from "reactstrap";

import { FooterStyled, FooterIcon, FooterIconContainer } from "./styled";

export class Footer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllText();
    console.log("Component Did Mount: " + this.props.AllText);
  }

  render() {
    //const p = this.props.AllText.AllText; // || this.props.AllText.link;
    console.log("render: " + this.props.AllText);
    const socialM = Object.keys(this.props.AllText || []).map(social => ({
      key: social.id,
      name: social.AllText
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
  allText: store.allText || []
});

const mapDispatchToProps = {
  getAllText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
