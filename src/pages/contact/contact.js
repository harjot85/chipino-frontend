import React, { Component } from "react";
import { Row, Col } from "reactstrap";

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
          <Col lg={12}>
            <div style={{ overflow: "hidden" }}
            >
              {this.state.loading ? (
                // todo: Do we still need this spinner ? 
                <div style={{ textAlign: "center" }}>
                  <div style={{ display: "inline-block" }}>
                    <Spinner name="cube-grid" color="Turquoise" fadeIn="none" />
                  </div>
                </div>
              ) : null}
              <Iframe
                url="https://forms.gle/DSjzvpTkPB83bgRZ6"
                height="1000px"
                width="100%"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                onLoad={this.hideSpinner}
              />
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
