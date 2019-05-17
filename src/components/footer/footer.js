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
  }

  
  render() {
    const { ...p } = this.props;
    
    const i = p.allText.findIndex(x => x.id === 0)
    console.log(i)
    
    const textElements = p.allText.map((textElement) => ({
      key: textElement.id,
      desc: textElement.description
    }));

    console.log(textElements)
    
    const homeText = textElements.filter(x => x.key === 0).map(x => x.desc)
    console.log("Home: " + homeText)

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
  allText: state.text.allText
});

const mapDispatchToProps = {
  getAllText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
