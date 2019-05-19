import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import NavPanel from "../../components/navpanel/navpanel";
import { InfoPanelText } from "./styled";


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
            <div
              style={{
                width: "75%",
                backgroundColor: "grey",
                borderRadius: "400px/50% 0 0 50%",
                backgroundImage: 'linear-gradient(to bottom right, #3B3B3B, grey)'
             
              }}
            >
              <InfoPanelText>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. HUIC
                EGO, SI NEGARET QUICQUAM INTERESSE AD BEATE VIVENDUM QUALI
                UTERETUR VICTU, CONCEDEREM, LAUDAREM ETIAM; UTRUM IGITUR TIBI
                LITTERAM VIDEOR AN TOTAS PAGINAS COMMOVERE? EIURO, INQUIT
                ADRIDENS, INIQUUM, HAC QUIDEM DE RE; NIHIL OPUS EST EXEMPLIS HOC
                FACERE LONGIUS. OCULORUM, INQUIT PLATO, EST IN NOBIS SENSUS
                ACERRIMUS, QUIBUS SAPIENTIAM NON CERNIMUS. QUAE SIMILITUDO IN
                GENERE ETIAM HUMANO APPARET. HAEC PARA/DOCA ILLI, NOS
                ADMIRABILIA DICAMUS. DUO REGES: CONSTRUCTIO INTERRETE.
              </InfoPanelText>
           
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
