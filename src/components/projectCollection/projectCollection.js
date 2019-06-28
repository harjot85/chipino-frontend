import React, { Component } from "react";
import { Row, Col, Badge } from "reactstrap";
import { Card, CardHeader, CardLink, CardText, CardBody } from "reactstrap";

import styled from "styled-components";

//Redux
import { getAllPublicRepos } from "../../redux/actions/github";
import { connect } from "react-redux";

const ProjectCard = styled(Card)`
  display: inline-block;
  height: 300px;
  width: 240px;
  background-color: white;
  margin: 10px;
  padding-bottom: 25px;
  position: relative;
`;

const TechBadge = styled(Badge)`
  padding: 6px;
  margin-left: 6px;
  box-shadow: 0 0 3px #07c;
`;

export class ProjectCollection extends Component {
  componentDidMount() {
    const { ...p } = this.props;
    p.getAllPublicRepos();
  }

  render() {
    const { ...p } = this.props;
    const rs = p.repoCollection;

    return (
      <React.Fragment>
        <Row style={{padding: "0 "}}>
          {rs.slice(0, 4).map((item, index) => {
            let repoTech =
              item.language == null ? "Not Specified" : item.language;
            return (
              <Col
                sm="12"
                lg={{ size: "auto", offset: 2 }}
                md={{ size: "auto", offset: 2 }}
                style={{ margin: "auto 0px" }}
              >
                <ProjectCard key={index}>
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
                        bottom: "3px",
                        height: "30px",
                        position: "absolute"
                      }}
                    >
                      {repoTech !== "Not Specified" && (
                        <TechBadge color="info">{repoTech}</TechBadge>
                      )}
                    </div>
                  </CardLink>
                </ProjectCard>
              </Col>
            );
          })}
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
)(ProjectCollection);
