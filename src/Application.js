import React, {Component} from 'react';
import Comments from './Comments';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card'

class Application extends Component {

  render() {
    if (this.props.selectedApplication.id) {
      return (
        <Col sm={9}>
          <Tab.Content>
            {this.props.selectedApplication.videos.map((video, index) =>
              <Card bg="dark" text="white" className="submissions" key={index}>
                <Card.Header><p className="question">{video.questionId}. {this.props.questions.find(question => question.id === video.questionId).question}</p></Card.Header>
                <video controls src={video.src}></video>
                <Comments
                  comments={video.comments} 
                  application={this.props.selectedApplication} 
                  questionId={video.questionId}
                  addComment={this.props.addComment}/>
              </Card>)}
          </Tab.Content>
        </Col>
      );
    } else if (this.props.selectedCandidate.id > 0) {
      return (
        <h5>This candidate doesn't have an application yet!</h5>
      );
    }
    return (
      <h5>Select a candidate from the left to view their application.</h5>
    );
  }
}


export default Application;