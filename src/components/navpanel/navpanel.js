import React, { Component } from "react";
import chester from "../../resources/chester.png";

import { Col, Row } from "reactstrap";
import { NavigationWrapper, LinkStyled } from "./styled";

export default class NavPanel extends Component {
  render() {
    return (
      <React.Fragment>
        <Col style={{ width: "25%" }}>
          <Row>
            <Col>
              <img
                style={{ maxWidth: "300px", maxHeight: "250px" }}
                src={chester}
                alt="Chipino Meshworks"
              />
            </Col>
          </Row>

          <Row>
            <Col
              style={{
                fontFamily: "'Poiret One', cursive",
                fontSize: "24px",
                textShadow: "4px 4px 4px #aaa"
              }}
            >
              Chipino Meshworks
            </Col>
          </Row>

          <Row>
            <Col>
              <div
                style={{
                  padding: "30% 0 30% 0",
                  textAlign: "right",
                  fontWeight: "600"
                }}
              >
                <NavigationWrapper>
                  <Row style={{ marginTop: "10px" }}>
                    <LinkStyled to="/">Home</LinkStyled>
                  </Row>
                  <Row style={{ marginTop: "10px" }}>
                    <LinkStyled to="/projects">Portfolio</LinkStyled>
                  </Row>
                  <Row style={{ marginTop: "10px" }}>
                    <LinkStyled to="/contact">Contact</LinkStyled>
                  </Row>
                  <Row style={{ marginTop: "10px" }}>
                    <LinkStyled to="/about">About</LinkStyled>
                  </Row>
                </NavigationWrapper>
              </div>
            </Col>
          </Row>
        </Col>
      </React.Fragment>
    );
  }
}
