import React, {Component} from 'react';
// import { connect } from 'react-redux'

class CandidateList extends Component {
  handleChange = event => {
    const newSelection = event.target.id;
    this.props.changeActiveApplicant(newSelection);
  }
  
  render() {
    return (
      <div>
        <h3>Candidates</h3>
        <ul className="CandidateList">
          {this.props.candidates.map((candidate, index) =>
            <li key={index} id={candidate.id} onMouseUp={this.handleChange}>{candidate.id} {candidate.name}</li>)}
        </ul>
      </div>
    );
  }
}

// this.props.candidates.length ? (<p>Loading...</p>) : 

// const mapStateToProps = (state) => {
//   return {
//     selected: state.selected
//   }
// }

// export default connect(mapStateToProps)(CandidateList);
export default CandidateList;