import React, { Component } from "react";
import { Collapse, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

//Components
import * as constant from "../../utilities/constants";
import { NavbarStyled, NavItemStyled, BrandName, NavLinkStyled } from "./styled";

//Redux
import { connect } from "react-redux";
import { getNavbarItems } from "../../redux/actions/navbar";

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      shadow: constant.navbar.noShadow
    };
  }

  shadowOnScroll = e => {
    window.scrollY > 200
      ? this.setState({ shadow: constant.navbar.showShadow })
      : this.setState({ shadow: constant.navbar.noShadow });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.shadowOnScroll);
    this.props.getNavbarItems();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { ...p } = this.props;

    const navbar = p.navbar.map(item => ({
      id: item.id,
      menuItem: item.menuItem,
      routeTo: item.routeTo
    }));

    return (
      <NavbarStyled
        color="white"
        light
        expand="md"
        sticky={"top"}
        style={{ boxShadow: this.state.shadow }}
      >
        <NavbarBrand href="/">
          <BrandName>Chipino Meshworks</BrandName>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navbar.map(menuItem => (
              <NavItemStyled>
                <NavLinkStyled href={menuItem.routeTo} >{menuItem.menuItem}</NavLinkStyled>
              </NavItemStyled>
            ))}
          </Nav>
        </Collapse>
      </NavbarStyled>
    );
  }
}
const mapStateToProps = state => ({
  navbar: state.navbar.navbar
});

const mapDispatchToProps = {
  getNavbarItems
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
