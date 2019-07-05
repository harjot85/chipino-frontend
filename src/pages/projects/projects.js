import React, { Component } from "react";
import {
  Row,
  Col,
  Badge,
  Card,
  CardHeader,
  CardLink,
  CardText,
  CardBody,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import styled from "styled-components";
import { PageHeading, Section, Styles } from "../../utilities/styledShared";

//Redux
import { getAllPublicRepos } from "../../redux/actions/github";
import { connect } from "react-redux";

const ProjectCard = styled(Card)`
  display: inline-block;
  height: 300px;
  width: 240px;
  background-color: white;
  margin: auto;
  margin-bottom: 8%;
  padding-bottom: 25px;
  position: relative;

  @media (max-width: 1000px) {
    height: 260px;
    width: 220px;
  }
`;

const TechBadge = styled(Badge)`
  margin-left: 6px;
  box-shadow: 0 0 3px #07c;
`;

export class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  componentDidMount() {
    const { ...p } = this.props;
    p.getAllPublicRepos();
  }

  render() {
    const { ...p } = this.props;
    const rs = p.repoCollection;

    return (
      <React.Fragment>
        <Section padding="0 2% 0 2%" style={Styles.row}>
          <Col>
            <PageHeading>Projects</PageHeading>
            <hr />
          </Col>
        </Section>

        <Section padding="0 2% 0 2%" style={Styles.row}>
          <Col>
            <Button
              outline
              color="primary"
              size="md"
              style={{ marginRight: "1%" }}
            >
              Technology
            </Button>

            <Button
              outline
              color="primary"
              size="md"
              style={{ marginRight: "1%" }}
            >
              Most Recent
            </Button>

            <ButtonDropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
              style={{ marginRight: "1%" }}
            >
              <DropdownToggle caret color="primary">
                Solutions
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Medicine</DropdownItem>
                <DropdownItem>Real Estate</DropdownItem>
                <DropdownItem>Automobiles</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Show All</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <hr />
          </Col>
        </Section>

        <Row style={{ margin: "0 5%" }}>
          {rs.map((item, index) => {
            let repoTech =
              item.language == null ? "Not Specified" : item.language;
            return (
              <Col xl={3} lg={4} md={4} sm={6} xs={12}>
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
)(Projects);
