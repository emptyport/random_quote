import React, { Component } from 'react';
import './css/Quote.css';
import './css/font-awesome.min.css';
import $ from 'jquery';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    }

    this.getQuote = this.getQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  handleClick() {
    this.getQuote();
  }

  handleTweet() {
    var tweet = this.state.quote + " -" + this.state.author;
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweet));
  }

  getQuote() {
    var baseUrl = "https://api.forismatic.com/api/1.0/";
    var format = "jsonp";
    var lang = "en";
    var url = baseUrl + "?method=getQuote&format=" + format + "&lang=" + lang + "&jsonp=?";

    $.getJSON(url, function(response) {
      var author;
      if(response.quoteAuthor==="") {
        author = "Author unknown";
      } 
      else {
        author = response.quoteAuthor;
      }
      this.setState(function () {
        return {
          quote: response.quoteText,
          author: author
        }
      })
      return response; 
    }.bind(this));
  }

  render () {
    return (
      <div>
        <div className="quoteContainer">
          <p>
            {this.state.quote}
          </p>
          <p>
            {this.state.author}
          </p>
        </div>
        <div className="buttonContainer">
          <button className="btn" onClick={this.handleClick}>Get Quote</button>
        </div>
        <div className="buttonContainer">
          <button className="btn" onClick={this.handleTweet}>
            <i className="fa fa-twitter"></i> Tweet
          </button>
        </div>
      </div>
    )
  }
}

export default Quote;