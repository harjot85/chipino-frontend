import React, { Component } from "react";
import { Row } from "reactstrap";
import { ContainerCurved } from '../../utilities/styledShared';

export default class ContentPanel extends Component {
  render() {
    return (
      <React.Fragment>
        <ContainerCurved>
            <Row style={{ textAlign: "right" }}>
              <div
                style={{
                  display: "inline-flex",
                  height: "150px",
                  width: "125px",
                  backgroundColor: "crimson",
                  margin: "5px"
                }}
              >
                1 1
              </div>
              <div
                style={{
                  display: "inline-flex",
                  height: "150px",
                  width: "125px",
                  backgroundColor: "crimson",
                  margin: "5px"
                }}
              >
                1 2
              </div>
              <div
                style={{
                  display: "inline-flex",
                  height: "150px",
                  width: "125px",
                  backgroundColor: "crimson",
                  margin: "5px"
                }}
              >
                1 3
              </div>
            </Row>
            <Row style={{ textAlign: "right" }}>
              <div
                style={{
                  display: "inline-flex",
                  height: "150px",
                  width: "125px",
                  backgroundColor: "crimson",
                  margin: "5px"
                }}
              >
                2 1
              </div>
              <div
                style={{
                  display: "inline-flex",
                  height: "150px",
                  width: "125px",
                  backgroundColor: "crimson",
                  margin: "5px"
                }}
              >
                2 2
              </div>
              <div
                style={{
                  display: "inline-flex",
                  height: "150px",
                  width: "125px",
                  backgroundColor: "crimson",
                  margin: "5px"
                }}
              >
                2 3
              </div>
            </Row>
            </ContainerCurved>
      </React.Fragment>
    );
  }
}
