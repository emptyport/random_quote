import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
  render () {
    return (
      <div>
        <div className="credits">
          Quotes come from <a href="https://forismatic.com/en">forismatic.com</a>
        </div>
        <div className="credits">
          Code available on Github <a href="https://github.com/emptyport/random_quote" target="_blank"><i className="fa fa-github"></i></a>
        </div>
      </div>
    )
  }
}

export default Footer;