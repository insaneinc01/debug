import React, { Component } from 'react';
import '../styles/App.css';

class Navbar extends Component {

  render() {
    return (
      <div className='app-navbar'>
        <div className='flex-container'>
          <div className='header'>React Debug App</div>
          {this.props.loggedIn && <button className='flat-button border-gray' onClick={this.props.handleLogout}>Sign Out</button>}
        </div>
      </div>
    );
  }
}

export default Navbar;
