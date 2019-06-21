import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import CandidateList from './CandidateList';
import Application from './Application';

class App extends Component {

  constructor() {
    super();
    this.state = {
      candidates: [],
      selectedApplicant: 0,
      selectedApplication: { id: 0, videos: [] }
    }
    this.changeActiveApplicant.bind(this);
  }

  componentDidMount() {
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

  changeActiveApplicant = (id) => {
    // this.setState({
    //   selectedApplicant: id
    // })
    console.log(id)
  }

  render() {
    return (
      <div className="App">
        <h1>
          XYZ Company
        </h1>
        <CandidateList candidates={this.state.candidates} changeActiveApplicant={this.changeActiveApplicant} />
        <Application selectedApplicant={this.state.selectedApplicant} selectedApplication={this.state.selectedApplication}/>
      </div>
    );
  }
}

export default App;
