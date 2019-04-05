import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSocialMediaIconLinks } from 'redux/actions/text'

export default class Home extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount(){
    this.props.getSocialMediaIconLinks();
  }

  render() {
    return (
      <div>
        
      </div>
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