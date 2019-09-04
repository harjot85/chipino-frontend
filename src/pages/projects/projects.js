import React, { Component } from "react";

//STYLES
import {
  Row,
  Col,
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
import {
  PageHeading,
  Section,
  Styles,
  ColStyled,
  CardBodyStyled,
  CardFooterStyled,
  ButtonLink
} from "../../utilities/styledShared";
import {
  FilterValuesHolder,
  ProjectCard,
  TechBadge,
  DropdownMenuStyled
} from "./styled";

//COMPONENTS
import Footer from "../../components/footer/footer";

//REDUX
import { connect } from "react-redux";
import { getConfiguration } from "../../redux/actions/configuration";
import { getAllImages } from "../../redux/actions/media";

export class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      dropdownLangOpen: false,
      modal: false,
      qry: "",
      dropDownOnefilter: "",
      dropDownTwofilter: "",
      repo: {
        name: "",
        description: "",
        link: ""
      },
      types: ["Project Type", "Language"],
      language: []
    };
  }

  toggleDropDown = dropdown => {
    if (dropdown === "sol") {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    } else if (dropdown === "lang") {
      this.setState({
        dropdownLangOpen: !this.state.dropdownLangOpen
      });
    }
  };

  handleDropDownSelected = event => {
    const { ...p } = this.props;
    const filterValue = event.target.innerHTML;

    p.getFilteredRepos(filterValue);
    this.setState({ dropDownTwofilter: filterValue });
  };

  handleDropdownOneSelected = event => {
    const filterValue = event.target.innerHTML;

    filterValue === "Language"
      ? this.setState({
          language: [
            "C#",
            "F#",
            "BrainFuck",
            "Haskell",
            "JavaScript",
            "Python",
            "Django"
          ]
        })
      : this.setState({ language: ["FrontEnd", "BackEnd"] });

    this.setState({ dropDownOnefilter: filterValue });
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

  clearFilters = () => {
    const { ...p } = this.props;
    p.getAllPublicRepos();
    this.setState({ dropDownTwofilter: "" });
    this.setState({ dropDownOnefilter: "" });
    this.setState({ language: [] });
  };

  componentDidMount() {
    const { ...p } = this.props;
    p.getAllPublicRepos();
    p.getAllImages();
  }

  render() {
    const { ...p } = this.props;
    const rs = p.repoCollection;
    const dp_types = this.state.types;
    const dp_lang = this.state.language;

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
          <Col md="10">
            <ButtonDropdown
              isOpen={this.state.dropdownLangOpen}
              toggle={() => this.toggleDropDown("lang")}
              style={{ marginRight: "1%" }}
            >
              <DropdownToggle caret color="info">
                Type
              </DropdownToggle>
              <DropdownMenu>
                {dp_types.map((it, index) => {
                  return (
                    <DropdownItem
                      key={index}
                      onClick={this.handleDropdownOneSelected}
                      value={this.state.value}
                    >
                      {it}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </ButtonDropdown>

            {this.state.language.length > 0 && (
              <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={() => this.toggleDropDown("sol")}
                style={{ marginRight: "1%" }}
              >
                <DropdownToggle caret color="info">
                  Solutions
                </DropdownToggle>

                <DropdownMenuStyled
                  modifiers={{
                    setMaxHeight: {
                      enabled: true,
                      order: 890,
                      fn: data => {
                        return {
                          ...data,
                          styles: {
                            ...data.styles,
                            overflow: "auto",
                            maxHeight: 200
                          }
                        };
                      }
                    }
                  }}
                >
                  {dp_lang.map((it, index) => {
                    return (
                      <DropdownItem
                        key={index}
                        onClick={e => this.handleDropDownSelected(e)}
                      >
                        {it}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenuStyled>
              </ButtonDropdown>
            )}
          </Col>
          <Col md="2">
            {this.state.dropDownTwofilter && (
              <Button
                outline
                color="info"
                size="md"
                style={{ marginRight: "1%" }}
                className="float-right"
                onClick={this.clearFilters}
              >
                Clear
              </Button>
            )}
          </Col>
        </Section>

        {this.state.dropDownOnefilter && (
          <Section padding="0 2%" style={Styles.row}>
            <FilterValuesHolder>
              <span>Search results for:</span>
              <Col lg="6" md="6">
                <TechBadge padding="5px 10px" outline color="info">
                  {this.state.dropDownOnefilter}
                </TechBadge>


                <TechBadge padding="5px 10px" marginLeft="10px" outline color="info">
                  {this.state.dropDownTwofilter}
                </TechBadge>

              </Col>
            </FilterValuesHolder>
          </Section>
        )}

        <Row style={{ padding: "0 3% 0 3%" }}>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row style={{ margin: "0 5%" }}>
          {rs.map((item, index) => {
            let repoTech =
              item.language == null ? "Not Specified" : item.language;
            return (
              <Col xl={3} lg={4} md={4} sm={6} xs={12}>
                <ProjectCard key={index}>
                  <CardHeader>
                    <Row>
                      <ColStyled
                        md="8"
                        lg="8"
                        sm="8"
                        xs="8"
                        padding="0 0 0 15px"
                      >
                        <strong>{item.name}</strong>
                      </ColStyled>
                      <ColStyled md="4" lg="4" sm="4" xs="4">
                        <CardLink
                          href={item.html_url}
                          style={{ color: "#202A2E" }}
                        >
                          <span style={{ float: "right" }}>
                            <i
                              class="fab fa-github"
                              style={{ fontSize: "28px", color: "#6699C7" }}
                            />
                          </span>
                        </CardLink>
                      </ColStyled>
                    </Row>
                  </CardHeader>
                  <CardBodyStyled>
                    <CardText>{item.description}</CardText>
                  </CardBodyStyled>
                  <CardFooterStyled>
                    <ColStyled lg="6" md="6" xs="6" padding="0 0 0 15px">
                      {repoTech !== "Not Specified" && (
                        <TechBadge
                          color="info"
                          size="sm"
                          className="float-left"
                        >
                          {repoTech}
                        </TechBadge>
                      )}
                    </ColStyled>
                    <ColStyled lg="6" md="6" xs="6" padding="0 0 0 0">
                      <ButtonLink
                        color="primary"
                        onClick={e =>
                          this.handleToggleModal(
                            item.name,
                            item.description,
                            item.html_url
                          )
                        }
                      >
                        See More...
                      </ButtonLink>
                    </ColStyled>
                  </CardFooterStyled>
                </ProjectCard>
              </Col>
            );
          })}
        </Row>
        <Section marginTop="10%" padding="0">
          <Footer />
        </Section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  repoCollection: state.github.repos,
  qry: state.qry,
  configuration: state.configuration.configuration,
  images: state.media.images
});

const mapDispatchToProps = {
  getConfiguration,
  getAllImages,
  getAllPublicRepos: () => ({ type: "GET_GITHUB_REPOS" }),
  getFilteredRepos: filter => ({ type: "GET_FILTERED_REPOS", val: filter })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
