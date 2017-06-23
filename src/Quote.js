import React, { Component } from 'react';
import $ from 'jquery';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    }

    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    var baseUrl = "https://api.forismatic.com/api/1.0/";
    var format = "jsonp";
    var lang = "en";
    var url = baseUrl + "?method=getQuote&format=" + format + "&lang=" + lang + "&jsonp=?";

    $.getJSON(url, function(response) { 
      console.log(response);
      this.setState(function () {
        return {
          quote: response.quoteText,
          author: response.quoteAuthor
        }
      })
      return response; 
    }.bind(this));
  }

  render () {
    return (
      <div>
        <p>
          {this.state.quote}
        </p>
        <p>
          {this.state.author}
        </p>
      </div>
    )
  }
}

export default Quote;