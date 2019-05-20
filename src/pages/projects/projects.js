import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import NavPanel from "../../components/navpanel/navpanel";

export default class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />
        <Container style={{ height: "100%" }}>
          <Row style={{ display: "inline-flex", height: "100%" }}>
            <NavPanel />
            <Col
              style={{
                width: "75%",
                backgroundColor: "grey",
                borderRadius: "50% 0 0 50%",
                backgroundImage: 'linear-gradient(to bottom right, #3B3B3B, grey)'
             
              }}>

              
              <h2>THIS IS WHERE GITHUB REPOST WILL BE PRESENTED</h2>
                <Row style={{textAlign: 'right'}}>
                  <div style={{ display: 'inline-flex', height: '150px', width: '125px', backgroundColor: 'crimson', margin: '5px'}}>1 1</div>
                  <div style={{display: 'inline-flex', height: '150px', width: '125px', backgroundColor: 'crimson', margin: '5px'}}>1 2</div>
                  <div style={{display: 'inline-flex', height: '150px', width: '125px', backgroundColor: 'crimson', margin: '5px'}}>1 3</div>
                </Row>
                <Row style={{textAlign: 'right'}}>
                  <div style={{display: 'inline-flex', height: '150px', width: '125px', backgroundColor: 'crimson', margin: '5px'}}>2 1</div>
                  <div style={{display: 'inline-flex', height: '150px', width: '125px', backgroundColor: 'crimson', margin: '5px'}}>2 2</div>
                  <div style={{display: 'inline-flex', height: '150px', width: '125px', backgroundColor: 'crimson', margin: '5px'}}>2 3</div>
                </Row>
              
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}
