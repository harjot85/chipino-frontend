import React, { Component } from "react";
import { Row, Col } from "reactstrap";

//Components
import NavPanel from "../../components/navpanel/navpanel";
import { ContainerCurved } from "../../utilities/styledShared";

import Iframe from "react-iframe";
import Spinner from "react-spinkit";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.hideSpinner = this.hideSpinner.bind(this);
  }

  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />

        <Row>
          <Col lg={3}>
            <NavPanel />
          </Col>
          <Col lg={9}>
            <ContainerCurved>
              
              
              <div
                style={{
                  overflow: "hidden",
                  marginRight: "1%",
                  float: "right",
                  width: "65%"
                }}
              >
                {this.state.loading ? (
                  <div style={{ textAlign: "center" }}>
                    <div style={{ display: "inline-block" }}>
                      <Spinner
                        name="cube-grid"
                        color="Turquoise"
                        fadeIn="none"
                      />
                    </div>
                  </div>
                ) : null}
                <br />
                <Iframe
                  url="https://forms.gle/DSjzvpTkPB83bgRZ6"
                  width="950px"
                  height="850px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                  onLoad={this.hideSpinner}
                />
              </div>
            </ContainerCurved>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
