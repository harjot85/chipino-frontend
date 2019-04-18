import React, { Component } from "react";
import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  Path,
  Hex
} from "react-hexgrid";

export default class Honeycomb extends Component {
  render() {
    return (
      <div>
        <HexGrid style={{backgroundColor: 'red'}} width={1200} height={800} viewBox="-5 -10 100 100">
          <Layout
            size={{ x: 10, y: 10 }}
            flat={false}
            spacing={1.1}
            origin={{ x: 10, y: 10 }}
          >
            <Hexagon style={{backgroundColor: 'red'}}  q={0} r={0} s={0} />
          </Layout>
        </HexGrid>
      </div>
    );
  }
}
