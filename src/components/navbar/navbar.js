import React, { Component } from 'react'
import './navbar.css';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
      return (
        <div>
           <ul>
              <li className='active'><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
        </div>
      )
    }
  }
  