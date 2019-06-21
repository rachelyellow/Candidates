import React, {Component} from 'react';
import Comments from './Comments';
import axios from 'axios';
// import { connect } from 'react-redux'

class Application extends Component {

  componentWillMount() {
    axios.get('http://localhost:3010/applications')
    .then(response => {
      this.setState({
        responses: response.data
      })
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  render() {
    if (this.props.selectedApplication.id > 0) {
      return (
        <div>
          <h3>{this.props.selectedApplication.id}</h3>
          <ul className="Application">
            {this.props.selectedApplication.videos.map((video, index) =>
              <li key={index}>
              {video.questionId}
              <video src={video.src}></video>
              <Comments comments={video.comments}/>
              </li>)}
          </ul>
        </div>
      );
    } else if (this.props.selectedApplication.id === 0) {
      return (
        <h3>Please select a candidate from the left to view their application.</h3>
      );
    }
    return (
      <h3>This candidate doesn't have an application yet!</h3>
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