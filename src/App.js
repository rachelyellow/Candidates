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
      selectedApplication: {},
      questions: []
    }
    this.fetchSelectionData = this.fetchSelectionData.bind(this);
    // this.fetchQuestions = this.fetchQuestions.bind(this);
    // this.getQuestionObjs = this.getQuestionObjs.bind(this);
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
    const selectedCandidate = this.state.candidates.find(candidate => candidate.id === parseInt(candidateId));
    if (selectedCandidate.applicationId) {
      axios.get('http://localhost:3010/applications/' + selectedCandidate.applicationId)
        .then(response => {
          const selectedApplication = response.data
          const questionIds = selectedApplication.videos.map(video => video.questionId)
          let allQuestions =[];
          questionIds.forEach(questionId => {
            axios.get('http://localhost:3010/questions/' + questionId)
              .then(response => {
                allQuestions = allQuestions.concat(response.data)
                if (allQuestions.length === questionIds.length) {
                  this.setState({ 
                    selectedApplication: selectedApplication, selectedCandidate: selectedCandidate, questions: allQuestions
                  }, () => console.log(this.state))
                }
              })
              .catch(function(error) {
                console.log(error)
              })
          })
        })
    } else {
      this.setState({ 
        selectedApplication: {}, selectedCandidate: selectedCandidate, questions: []
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Tab.Container defaultActiveKey="first">
          <h1>
            XYZ Company
          </h1>
          <Row>
            <CandidateList candidates={this.state.candidates} fetchSelectionData={this.fetchSelectionData}/>
            <Application selectedCandidate={this.state.selectedCandidate} selectedApplication={this.state.selectedApplication}/>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default App;
