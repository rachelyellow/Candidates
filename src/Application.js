import React, {Component} from 'react';
import Comments from './Comments';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
// import { connect } from 'react-redux'

class Application extends Component {

  // componentWillMount() {

  // }

  // static getDerivedStateFromProps(props, state) {
  //   return null
  // }

  // getAllQuestions = questionIds => questionIds.forEach(id => {
  //   axios.get('http://localhost:3010/questions/' + questionId)
  //   .then(response => {
  //     console.log(response.data)
  //     return response.data
  //   })
  //   .catch(function(error) {
  //     console.log(error)
  //   })
  // })



  render() {
    if (this.props.selectedApplication.id) {
      // console.log(this.state)
      // console.log(this.props.selectedApplication)
      return (
        <Col sm={9}>
          <Tab.Content>
            <h3>Application Number {this.props.selectedApplication.id}</h3>
            {this.props.selectedApplication.videos.map((video, index) =>
              <div key={index}>
                {video.questionId}{video.src}
                <video src={video.src}></video>
                <Comments comments={video.comments}/>
              </div>)}
          </Tab.Content>
        </Col>
      );
    } else if (this.props.selectedCandidate.id > 0) {
      return (
      <Col sm={9}>
        <h5>This candidate doesn't have an application yet!</h5>
      </Col>
      );
    }
    return (
        <Col sm={9}>
          <h5>Please select a candidate from the left to view their application.</h5>
        </Col>
    );
  }
}

// this.props.candidates.length ? (<p>Loading...</p>) : 

// const mapStateToProps = (state) => {
//   return {
//     selected: state.selected
//   }
// }

// export default connect(mapStateToProps)(Application);
export default Application;