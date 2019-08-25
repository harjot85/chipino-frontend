import React, { Component } from "react";
import {
  Row,
  Col,
  Badge,
  Card,
  CardHeader,
  CardLink,
  CardText,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import styled from "styled-components";
import {
  PageHeading,
  Section,
  Styles,
  CardBodyStyled,
  CardFooterStyled
} from "../../utilities/styledShared";

//Redux
import {
  getAllPublicRepos,
  getFilteredRepos
} from "../../redux/actions/github";
import { connect } from "react-redux";

const ProjectCard = styled(Card)`
  display: inline-block;
  height: 300px;
  width: 240px;
  background-color: white;
  margin: auto;
  margin-bottom: 8%;
  position: relative;

  @media (max-width: 1000px) {
    height: 260px;
    width: 220px;
  }
`;

const TechBadge = styled(Badge)`
  margin-top: 2px;
  box-shadow: 0 0 3px #07c;
`;

export class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      modal: false,
      qry: "",
      repo: {
        name: "",
        description: "",
        link: ""
      }
    };
  }

  toggleDropDown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  handleDropDownSelected = (event)=> {
    const { ...p } = this.props;
    p.getFilteredRepos(event.target.innerHTML);
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleToggleModal = (name, desc, link) => {
    var repo = { ...this.state.repo };
    repo.name = name;
    repo.description = desc;
    repo.link = link;
    this.setState({
      repo
    });

    this.toggleModal();
  };

  componentDidMount() {
    console.log("in Component did mount")
    const { ...p } = this.props;
    p.getAllPublicRepos();
  }

  render() {
    const { ...p } = this.props;
    const rs = p.repoCollection;

    return (
      <React.Fragment>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleModal}>
            {this.state.repo.name}
          </ModalHeader>
          <ModalBody>{this.state.repo.description}</ModalBody>
          <ModalFooter>
            <Button color="primary" href={this.state.repo.link}>
              Visit Github
            </Button>{" "}
            <Button color="danger" onClick={this.toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
          crossOrigin="anonymous"
        />
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
              toggle={this.toggleDropDown}
              style={{ marginRight: "1%" }}
            >
              <DropdownToggle caret color="primary">
                Solutions
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={(e)=>this.handleDropDownSelected(e)}>C#</DropdownItem>
                <DropdownItem onClick={(e)=>this.handleDropDownSelected(e)}>F#</DropdownItem>
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
                  <CardHeader>
                    <strong>{item.name}</strong>

                    <CardLink href={item.html_url} style={{ color: "#202A2E" }}>
                      <span style={{ float: "right" }}>
                        <i
                          class="fab fa-github"
                          style={{ fontSize: "28px", color: "#6699C7" }}
                        />
                      </span>
                    </CardLink>
                  </CardHeader>
                  <CardBodyStyled>
                    <CardText>{item.description}</CardText>
                  </CardBodyStyled>
                  <CardFooterStyled>
                    <Col lg="6" md="6" xs="6">
                      {repoTech !== "Not Specified" && (
                        <TechBadge
                          color="info"
                          size="sm"
                          className="float-left"
                        >
                          {repoTech}
                        </TechBadge>
                      )}
                    </Col>
                    <Col lg="6" md="6" xs="6">
                      <a
                        href="#"
                        onClick={e =>
                          this.handleToggleModal(
                            item.name,
                            item.description,
                            item.html_url
                          )
                        }
                      >
                        See More...
                      </a>
                    </Col>
                  </CardFooterStyled>
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
  repoCollection: state.github.repos,
  qry: state.qry
});

const mapDispatchToProps = {
    getAllPublicRepos: () => ({type: 'GET_GITHUB_REPOS'}), 
    getFilteredRepos: (filter) => ({type: 'GET_FILTERED_REPOS', val: filter})
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
