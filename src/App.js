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
      selectedCandidate: {},
      selectedApplication: {}
    }
    // this.changeActiveCandidate.bind(this);
    this.fetchSelectionData = this.fetchSelectionData.bind(this);
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

  fetchSelectionData(candidateId) {
    const selectedCandidate = this.state.candidates.find(candidate => candidate.id == candidateId);
    this.setState({ selectedCandidate: selectedCandidate })
    if (selectedCandidate.applicationId) {
      axios.get('http://localhost:3010/applications/' + selectedCandidate.applicationId)
        .then(response => {
          console.log(response.data);
          this.setState({ selectedApplication: response.data })
        })
    } else {
      this.setState({ selectedApplication: {} })
    }
  }

  // changeActiveCandidate = (candidateId) => {
  //   this.fetchSelectionData(candidateId);
  //   this.setState({ selectedApplication: })
  // }

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
            <CandidateList candidates={this.state.candidates} fetchSelectionData={this.fetchSelectionData} />
            <Application selectedCandidate={this.state.selectedCandidate} selectedApplication={this.state.selectedApplication}/>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default App;
