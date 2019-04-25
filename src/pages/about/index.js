import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import NavPanel from "../../components/navpanel/navpanel";
import { InfoPanelText } from "../home/styled";

export default class Home extends Component {
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
             
              }}
            >
              <InfoPanelText>
              Here we can out the info for the About page. This info is no info and I am totally making this info up to
              generate some fake info. 
              Here we can out the info for the About page. This info is no info and I am totally making this info up to
              generate some fake info. 
              Here we can out the info for the About page. This info is no info and I am totally making this info up to
              generate some fake info. 
              </InfoPanelText>
           
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
