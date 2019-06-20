import React, {Component} from 'react';
import Candidate from './Candidate.js';
import { connect } from 'react-redux'

class CandidateList extends Component {
  render() {
    return (
      <div>
        <h3>Candidates</h3>
        <ul className="CandidateList">
          {this.props.Candidates.map((Candidate, index) =>
            <Candidate data={Candidate} key={index} />)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.selected
  }
}

export default connect(mapStateToProps)(CandidateList);