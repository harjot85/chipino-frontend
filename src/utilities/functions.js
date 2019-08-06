import React from "react";
import { Col } from "reactstrap";
import * as constant from "./constants";

export function getElementsPerScreen() {
  var showCards;
  window.innerWidth <= 765
    ? (showCards = constant.size.xs)
    : window.innerWidth <= 1099
    ? (showCards = constant.size.sm)
    : window.innerWidth <= 1399
    ? (showCards = constant.size.md)
    : window.innerWidth <= 1699
    ? (showCards = constant.size.lg)
    : (showCards = constant.size.xl);
  return showCards;
}

export function Separator() {
  return (
    <Col style={{ paddingTop: "4%", textAlign: "center" }}>
      {" "}
      <h1>
        <i style={{ color: "#C4C4C4" }} class="fas fa-chevron-down" />
      </h1>{" "}
    </Col>
  );
}

export function GetEnvironment(){
  let envType = process.env.NODE_ENV;
  let data = {};
  console.log(`Env Proc Env Node_ENV: ${envType}`);

  switch (envType) {
    case "development": 
      data = { 
        baseUrl: process.env.REACT_APP_API_LOCAL
      }
    break;
    case "qa":
      data = {
        baseUrl: process.env.REACT_APP_API_LOCAL
      }
      break;
    case "production": 
      data = {
        baseUrl: process.env.REACT_APP_API_STAGING
      }
      break;
    default: 
      data = {
        baseUrl: process.env.REACT_APP_API_LOCAL
      }
      break;
    }
    return data;
}
