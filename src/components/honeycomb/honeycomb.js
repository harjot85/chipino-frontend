import React, { Component } from "react";
import './honeycomb.css';
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
      <div className='svg'>
        <HexGrid width={1200} height={800} viewBox="-5 -10 100 100">
          <Layout
            size={{ x: 10, y: 10 }}
            flat={false}
            spacing={1.1}
            origin={{ x: 10, y: 10 }}
          >
            <Hexagon q={0} r={0} s={0} >
              <Text>H0</Text>
            </Hexagon>
            <Hexagon q={1} r={0} s={0}>
              <Text>H1</Text>
            </Hexagon>
            <Hexagon q={-1} r={0} s={0}>
              <Text>H2</Text>
            </Hexagon>
            <Hexagon q={-1} r={1} s={0}>
              <Text>H3</Text>
            </Hexagon>
            <Hexagon q={0} r={1} s={0}>
              <Text>H4</Text>
            </Hexagon>
          </Layout>
        </HexGrid>
      </div>
    );
  }
}
