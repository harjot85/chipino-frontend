import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSocialMediaIconLinks } from '../../redux/actions/text'
import Footer from "../../components/footer/footer";

export class Home extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount(){
    const icons = this.getIcons();
  }

  getIcons = () => {
    this.props.getSocialMediaIconLinks();
  }

  render() {
    return (
      <React.Fragment>
        {this.icons}
        <h1>Chipino Home component</h1>
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = store => ({
  socialMedia: store.text.smLinkFB
})

const mapDispatchToProps = {
  getSocialMediaIconLinks
}

export default (
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
  );