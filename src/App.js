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
          this.setState({ 
            selectedApplication: response.data, selectedCandidate: selectedCandidate
          })
        })
    } else {
      this.setState({ 
        selectedApplication: {}, selectedCandidate: selectedCandidate
      })
    }
  }

  // getQuestionObj = (questionId) => {
  //   axios.get('http://localhost:3010/questions/' + questionId)
  //   .then(response => {
  //     return response.data
  //   })
  //   .catch(function(error) {
  //     console.log(error)
  //   })
  // }

  // fetchQuestions = () => {
  //   if (this.state.selectedApplication.id) {
  //     const questionIds = this.props.selectedApplication.videos.map(video => video.questionId);
  //     let allQuestions =[];
  //     questionIds.forEach(id => {
  //       allQuestions.push(getQuestionObj(id));
  //       console.log(allQuestions)
  //     });
  //     // const allQuestions = questionIds.map(questionId => getQuestionObj(questionId));
  //     console.log(allQuestions);
  //   }
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
