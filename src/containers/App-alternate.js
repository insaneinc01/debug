import React, { Component } from 'react';
import Navbar from '../components/Navbar-alternate';//BUG: actual file name not capitalised
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm'; //BUG: missing import
import { Glyphicon } from 'react-bootstrap';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({
      login: true,
    });
  }

  handleLogout() {
    this.setState({
      login: false
    });
  }

  render() {
    return (
      <div className='app'>
        <Navbar handleLogout={this.handleLogout} loggedIn={this.state.login}/>
        <div className={!this.state.login ? '' : 'hide'}>
          <LoginForm handleLogin={this.handleLogin} />
        </div>
        <div className={this.state.login ? 'text-center mt9x' : 'hide'}>
          <Glyphicon glyph='glyphicon glyphicon-ok-sign' />
          <h2>Great work!</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
