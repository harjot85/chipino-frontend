import React, { Component } from "react";
import { connect } from "react-redux";
import { getSocialMedia } from "../../redux/actions/text";

export class Footer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getSocialMedia();
   // console.log("Component Did Mount: " + this.props.socialMedia);
  }

  
  render() {
    const p = this.props.socialMedia// || this.props.socialMedia.link;
    {
      console.log(JSON.stringify(p))
    }
    return (
      <div>
        {console.log(JSON.stringify(p.socialMedia))}
        <ul>
          
          <li>{JSON.stringify(p.socialMedia)}</li>
          <li>Insta</li>
          <li>Face</li>
          <li>Twit</li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = store => ({
  socialMedia: store.text.socialMedia || []
});

const mapDispatchToProps = {
  getSocialMedia
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
