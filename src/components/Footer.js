import React, { Component } from 'react';
import '../styles/App.css';

//BUG: typo -> extend corrected to extends
class Footer extends Component {
  render() {
    return (
      <div>
        <div className='footer-anchor'></div>
        <div className='app-footer'></div>
      </div>
    );
  }
}

export default Footer;
