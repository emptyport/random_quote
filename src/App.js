import React, { Component } from 'react';
import './App.css';
import Quote from './components/Quote';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quote />
        <Footer />
      </div>
    );
  }
}

export default App;
