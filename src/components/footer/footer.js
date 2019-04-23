import React, { Component } from "react";
import { connect } from "react-redux";
import { getSocialMedia } from "../../redux/actions/text";
import { Row } from "reactstrap";
import styled from "styled-components";


const FooterStyled = styled.div`
  margin-bottom: 0em;
  left: 0;
  bottom: 0;
  text-align: center;
`;

const FooterIcon = styled.div`
  font-size: 32px;
  color: black;
  &:hover {
   color:#42a7f4; 
  }
`;

const FooterIconContainer = styled.div`
  margin-top: 3%;
  margin-left: 5%;
  margin-right: 5%;
  border: 3px solid black;
  border-radius: 50%;
  padding: 8px;

  &:hover {
    border-color:#42a7f4; 
   }
`;

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
          <Row style={{ display: "flex", borderTop: "5px solid black", position: 'fixed', width:'15%' , bottom: 90 }}>
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
