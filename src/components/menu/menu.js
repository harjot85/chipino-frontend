import React, { Component } from "react";
import { NavigationWrapper, LinkStyled } from "./styled";

import styled from "styled-components";

import { Row } from "reactstrap";

export default class Menu extends Component {
  render() {
    return (
      <div
        style={{
          padding: "20% 0 0 0",
          textAlign: "right",
          fontWeight: "600"
        }}
      >
      
      

        
        {/* <NavigationWrapper>
          <Row style={{ marginTop: "20px" }}>
            <LinkStyled to="/">Home</LinkStyled>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <LinkStyled to="/projects">Portfolio</LinkStyled>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <LinkStyled to="/contact">Contact</LinkStyled>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <LinkStyled to="/about">About</LinkStyled>
          </Row>
        </NavigationWrapper> */}
      </div>
    );
  }
}
