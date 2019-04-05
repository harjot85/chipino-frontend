import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSocialMediaIconLinks } from 'redux/actions/text'
import Footer from "../../components/footer/footer";

export default class Home extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount(){
    this.props.getSocialMediaIconLinks();
  }

  render() {
    return (
      <React.Fragment>
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