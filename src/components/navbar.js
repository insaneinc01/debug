import React, { Component } from 'react';
import '../styles/App.css';

class Navbar extends Component {

    constructor(props) {
    super(props);
    this.state = {
      showLogoutButton: false
    };
  }

  handleLogoutButton() {
    this.setState(prevState => ({
      showLogoutButton: !prevState.showLogoutButton
    }));
  }
  //Use of 2 different states for handling logoutbutton. Instead the logoutbutton can be controlled from parent. Please see Navbar-alternate.js file

  render() {
    let sessionButton;
    if (this.state.showLogoutButton === true) {
      sessionButton = (<button className='flat-button border-gray' onClick={this.props.handleLogout}>Sign Out</button>);
    }
    return (
      <div className='app-navbar'>
        <div className='flex-container'>
          <div className='header'>React Debug App</div>
          {sessionButton}
        </div>
      </div>
    );
  }
}

export default Navbar;
