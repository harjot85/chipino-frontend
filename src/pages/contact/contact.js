import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <Iframe 
            //url="https://goo.gl/forms/vKfpOj4YeWsfqqFA3"
            url="https://forms.gle/DSjzvpTkPB83bgRZ6"
            width="640px"
            height="800px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen />
      </div>
    )
  }
}
