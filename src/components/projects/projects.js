import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { PageHeading } from "../../utilities/styledShared";

//Redux
import { getAllPublicRepos } from "../../redux/actions/github";
import { connect } from "react-redux";
import ProjectCollection from "../projectCollection/projectCollection";

export class Projects extends Component {
  constructor(props) {
    super(props);

    //this.toggle = this.toggle.bind(this);
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
    return (
      <React.Fragment>
        <Row>
          <Col
            lg={{ size: "auto", offset: 1 }}
            md={{ size: "auto", offset: 1 }}
          >
            <PageHeading>Projects</PageHeading>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col
            lg={{ size: "auto", offset: 1 }}
            md={{ size: "auto", offset: 1 }}
          >
            <Button outline color="primary" size="md">
              Language
            </Button>
          </Col>

          <Col
            lg={{ size: "auto", offset: 0 }}
            md={{ size: "auto", offset: 0 }}
          >
            <Button outline color="primary" size="md">
              Type
            </Button>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <ButtonDropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
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
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <ProjectCollection />
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
)(Projects);
