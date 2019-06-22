import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import CandidateList from './CandidateList';
import Application from './Application';

class App extends Component {

  constructor() {
    super();
    this.state = {
      candidates: [],
      selectedApplicant: {},
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

  changeActiveApplicant = (candidate) => {
    this.setState({
      selectedApplicant: candidate
    })
    console.log(candidate)
  }

  // getApplication = () => {

  // }

  render() {
    return (
      <div className="App">
        <Tab.Container defaultActiveKey="first">
          <h1>
            XYZ Company
          </h1>
          <Row>
            <CandidateList candidates={this.state.candidates} changeActiveApplicant={this.changeActiveApplicant} />
            <Application selectedApplicant={this.state.selectedApplicant} selectedApplication={this.state.selectedApplication}/>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default App;
