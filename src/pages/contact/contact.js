import React, { Component } from 'react'
import NavPanel from "../../components/navpanel/navpanel";
import { Col, Row, Container } from "reactstrap";
import Iframe from 'react-iframe';
import Spinner from 'react-spinkit';


export default class Contact extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true
    }
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
                {this.state.loading ? (
                  <div style={{textAlign:'center'}}>
                    <div style={{display:'inline-block'}}>
                      <Spinner name="cube-grid" color="Turquoise" fadeIn="none" />
                    </div>     
                  </div>   
                ) : null} 
                <br/>
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
            
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
