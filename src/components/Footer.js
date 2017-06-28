import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
  render () {
    return (
      <div className="footerContainer">
        <div className="credits">
          Quotes from&nbsp;<a href="https://forismatic.com/en" target="_blank">forismatic.com</a>
        </div>
        <div className="credits">
          Code available on&nbsp;<a href="https://github.com/emptyport/random_quote" target="_blank">Github&nbsp;<i className="fa fa-github"></i></a>
        </div>
      </div>
    )
  }
}

export default Footer;