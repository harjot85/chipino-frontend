import React, { Component } from "react";
import { Row, Col, Badge } from "reactstrap";
import { Card, CardHeader, CardLink, CardText, CardBody } from "reactstrap";

//Redux
import { getAllPublicRepos } from "../../redux/actions/github";
import { connect } from "react-redux";
import { PageHeading } from "../../utilities/styledShared";

export class ContentPanel extends Component {
  componentDidMount() {
    const { ...p } = this.props;
    p.getAllPublicRepos();
  }

  render() {
    const { ...p } = this.props;
    const rs = p.repoCollection;

    return (
      <React.Fragment>
        <Row>
          <Col style={{ textAlign: "right" }}>
            <PageHeading>Portfolio</PageHeading>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "right" }}>
            <h1>Filters can go here ! </h1>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "right" }}>
            {rs.map((item, index) => {
              let repoTech =
                item.language == null ? "Not Specified" : item.language;
              return (
                <Card
                  key={index}
                  style={{
                    display: "inline-block",
                    height: "235px",
                    width: "200px",
                    backgroundColor: "white",
                    margin: "10px",
                    paddingBottom: "25px",
                    position: "relative"
                  }}
                >
                  <CardLink href={item.html_url} style={{ color: "#202A2E" }}>
                    <CardHeader>
                      <strong>{item.name}</strong>
                    </CardHeader>
                    <CardBody>
                      <CardText>
                        <b>Id:</b> {item.id}
                      </CardText>
                      <CardText>
                        <b>Desc:</b>
                        {item.description}
                      </CardText>
                    </CardBody>
                    <div
                      style={{
                        bottom: "5px",
                        height: "25px",
                        position: "absolute"
                      }}
                    >
                      {repoTech !== "Not Specified" && (
                        <div>
                          <Badge
                            color="info"
                            style={{
                              padding: "6px",
                              marginLeft: "6px",
                              boxShadow: "0 0 3px #07c"
                            }}
                          >
                            {repoTech}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardLink>
                </Card>
              );
            })}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  repoCollection: state.github.repos
});

const mapDispatchToProps = {
  getAllPublicRepos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentPanel);
