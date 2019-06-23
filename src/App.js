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
    this.addComment = this.addComment.bind(this);
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

  addComment(applicationId, replacementObj) {
    axios.patch('http://localhost:3010/applications/' + applicationId,
      { "id": applicationId,
        "videos": replacementObj }
    )
    .then(response => console.log(response))
    // axios.put('http://localhost:3010/applications/' + 171, 
    //     {
    //       "id": 171,
    //       "videos": [
    //         {
    //             "src": "https://dashboard.knockri.com/assets?f=124546.mp4",
    //             "questionId": 12,
    //             "comments": "BLAH"
    //         },
    //         {
    //             "src": "https://dashboard.knockri.com/assets?f=32343.mp4",
    //             "questionId": 14,
    //             "comments": ""
    //         },
    //         {
    //             "src": "https://dashboard.knockri.com/assets?f=3545646.mp4",
    //             "questionId": 21,
    //             "comments": ""
    //         }
    //       ]
    //   }
    // )
    // .then(response => console.log(response.data))
  }

  render() {
    return (
      <div className="App">
        <Tab.Container>
          <h1>
            XYZ Company
          </h1>
          <Row>
            <CandidateList 
              candidates={this.state.candidates}
              fetchSelectionData={this.fetchSelectionData}/>
            <Application
              selectedCandidate={this.state.selectedCandidate}
              selectedApplication={this.state.selectedApplication}
              questions={this.state.questions}
              addComment={this.addComment}/>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default App;
