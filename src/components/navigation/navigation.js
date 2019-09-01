import React, { Component } from "react";
import { Collapse, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

//Components
import * as constant from "../../utilities/constants";
import {
  NavbarStyled,
  NavItemStyled,
  BrandName,
  NavLinkStyled,
  ChipinoLogo
} from "./styled";

//Redux
import { connect } from "react-redux";
import { getNavbarItems } from "../../redux/actions/navbar";
import { getConfiguration } from "../../redux/actions/configuration";
import { getAllImages } from "../../redux/actions/media";

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

    const { ...p } = this.props;
    p.getNavbarItems();
    p.getConfiguration();
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
      routeTo: item.routeTo,
      bottomBorderColor: item.bottomBorderColor
    }));

    const config = p.configuration.map(c => ({
      key: c.id,
      brandText: c.navbar.BrandText,
      brandFontSize: c.navbar.BrandFontSize,
      brandFontColor: c.navbar.BrandFontColor
    }));
    
    const brandText = config.map(x => x.brandText);
    const brandFontSize = config.map(x => x.brandFontSize);
    const brandFontColor = config.map(x => x.brandFontColor);


    const logo = p.images.map(image => ({
      key: image.id,
      file: image.fileContent,
      type: image.fileType
    }));

    const logoData = logo.filter(x => x.key === 202).map(x => x.file);
    const logoType = logo.filter(x => x.key === 202).map(x => x.type);
    const navbarLogo = logoType + logoData;

    return (
      <NavbarStyled
        color="white"
        light
        expand="md"
        sticky={"top"}
        style={{ boxShadow: this.state.shadow }}
      >
        <NavbarBrand href="/">
          <ChipinoLogo src={navbarLogo} alt="Chipino" />
        </NavbarBrand>
        <NavbarBrand href="/">
          <BrandName fontSize={brandFontSize} fontColor={brandFontColor}>
            {brandText}
          </BrandName>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navbar.map(menuItem => (
              <NavItemStyled>
                <NavLinkStyled
                  href={menuItem.routeTo}
                  bottomBorderColor={menuItem.bottomBorderColor}
                >
                  {menuItem.menuItem}
                </NavLinkStyled>
              </NavItemStyled>
            ))}
          </Nav>
        </Collapse>
      </NavbarStyled>
    );
  }
}
const mapStateToProps = state => ({
  navbar: state.navbar.navbar,
  configuration: state.configuration.configuration,
  images: state.media.images
});

const mapDispatchToProps = {
  getNavbarItems,
  getConfiguration,
  getAllImages
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
