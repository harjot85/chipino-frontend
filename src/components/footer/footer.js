import React, { Component } from "react";
import { connect } from "react-redux";
import { getSocialMedia } from "../../redux/actions/text";
import './footer.css';

export class Footer extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.getSocialMedia();
    // console.log("Component Did Mount: " + this.props.socialMedia);
  }

  render() {
    //const p = this.props.socialMedia.socialMedia; // || this.props.socialMedia.link;
    console.log("render: " + this.props.socialMedia);
    const socialM = Object.keys(this.props.socialMedia || []).map(social => ({key: social.id, name: social.socialMedia}));
    
    console.log(socialM)

    return (
      <div className='footer'>
        {/* {console.log(JSON.stringify(p.socialMedia))} */}
        <ol>
          <li>{JSON.stringify(socialM)}</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ol>
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
