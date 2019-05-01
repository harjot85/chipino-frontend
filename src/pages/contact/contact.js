import React, { Component } from 'react'
import NavPanel from "../../components/navpanel/navpanel";
import { Col, Row, Container } from "reactstrap";
import Iframe from 'react-iframe';


export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Poiret+One"
          rel="stylesheet"
        />
        <Container style={{ height: '100%' }}>
          <Row style={{ display: "inline-flex" }}>
            <NavPanel />
            <Col
          
          style={{
            width: "75%",
            backgroundColor: "grey",
            borderRadius: "50% 0 0 50%",
            backgroundImage: 'linear-gradient(to bottom right, #3B3B3B, grey)'
         
          }}>
        
              <div style={{margin: '25px', overflow:"hidden",  float: 'right', width: '75%'}}>
                <Iframe 
                  //url="https://goo.gl/forms/vKfpOj4YeWsfqqFA3"
                  url="https://forms.gle/DSjzvpTkPB83bgRZ6"
                  width="950"
                  height="850px"
                  overflow="hidden"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                  allowFullScreen />
              </div>
            
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
