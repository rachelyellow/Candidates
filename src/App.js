import React, { Component } from 'react';
import './styles/App.css';
import CandidateList from './CandidateList.js';

class App extends Component {
  componenentWillMount() {
    console.log("willmount");
  }

  render () {
    return (
      <div className="App">
        <h1>
          XYZ Company
        </h1>
        <CandidateList/>
      </div>
    );
  }
}

export default App;
