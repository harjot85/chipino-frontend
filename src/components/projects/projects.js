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

import { PageHeading, Styles } from "../../utilities/styledShared";

//Redux
import { getAllPublicRepos } from "../../redux/actions/github";
import { connect } from "react-redux";
import ProjectCollection from "../projectCollection/projectCollection";

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
    return (
      <React.Fragment>
        <Row style={Styles.row}>
          <Col>
            <PageHeading>Projects</PageHeading>
          </Col>
        </Row>
        <hr />
        <Row style={Styles.row} >
          <Col>
            <Button outline color="primary" size="md" style={{marginRight:"1%"}}>
              Technology
            </Button>
          
            <Button outline color="primary" size="md" style={{marginRight:"1%"}}>
              Most Recent
            </Button>
          
            <ButtonDropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
              style={{marginRight:"1%"}}
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
        <Row style={Styles.row}>
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
