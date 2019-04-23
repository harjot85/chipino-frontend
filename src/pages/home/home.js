import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Footer from "../../components/footer/footer";
import chester from "../../resources/chester.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationWrapper = styled.div`
  font-size: 24px;
  padding-right: 5%;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: #42a7f4;
  }
`;

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row style={{ display: "flex", height: "800px" }}>
          <Col style={{ height: "100%", width: "25%" }}>
          <Row>
            <Row>
              <Col>
                <img
                  style={{ maxWidth: "300px", maxHeight: "250px" }}
                  src={chester}
                  alt="Chipino Meshworks"
                />
              </Col>
            </Row>
            </Row>

            <Row>
              <Col>Chipino Meshworks</Col>
            </Row>

            <Row>
              <Col>
                <div
                  style={{
                    padding: "30% 0 30% 0",
                    textAlign: "right"
                  }}
                >
                  <NavigationWrapper>
                    <Row>
                      <LinkStyled to="/">Home</LinkStyled>
                    </Row>
                    <Row>
                      <LinkStyled to="/projects">Portfolio</LinkStyled>
                    </Row>
                    <Row>
                      <LinkStyled to="/contact">Contact</LinkStyled>
                    </Row>
                    <Row>
                      <LinkStyled to="/about">About</LinkStyled>
                    </Row>
                  </NavigationWrapper>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <Footer />
              </Col>
            </Row>
          </Col>
          <Col
            style={{
              height: "100%",
              width: "75%",
              backgroundColor: "grey",
              borderRadius: "400px 0 0 400px"
            }}
          >
            <div
              style={{
                textAlign: "center",
                paddingTop: "30%",
                paddingLeft: "15%",
                paddingRight: "5%",
                display: "inline-block",
                verticalAlign: "middle"
              }}
            >
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. HUIC EGO,
              SI NEGARET QUICQUAM INTERESSE AD BEATE VIVENDUM QUALI UTERETUR
              VICTU, CONCEDEREM, LAUDAREM ETIAM; UTRUM IGITUR TIBI LITTERAM
              VIDEOR AN TOTAS PAGINAS COMMOVERE? EIURO, INQUIT ADRIDENS,
              INIQUUM, HAC QUIDEM DE RE; NIHIL OPUS EST EXEMPLIS HOC FACERE
              LONGIUS. OCULORUM, INQUIT PLATO, EST IN NOBIS SENSUS ACERRIMUS,
              QUIBUS SAPIENTIAM NON CERNIMUS. QUAE SIMILITUDO IN GENERE ETIAM
              HUMANO APPARET. HAEC PARA/DOCA ILLI, NOS ADMIRABILIA DICAMUS. DUO
              REGES: CONSTRUCTIO INTERRETE.
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
