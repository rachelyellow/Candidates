import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import CandidateList from './CandidateList.js';
import Application from './Application.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      candidates: [],
      selected: [],
      responses: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3010/candidates')
      .then(response => {
        this.setState({
          candidates: response.data
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div className="App">
        <h1>
          XYZ Company
        </h1>
        <CandidateList candidates={this.state.candidates} />
        <Application selected={this.state.selected} />
      </div>
    );
  }
}

export default App;
