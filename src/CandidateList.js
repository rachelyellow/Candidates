import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
// import { connect } from 'react-redux'

class CandidateList extends Component {
  handleChange = event => {
    const newSelection = event.target.candidate;
    this.props.changeActiveApplicant(newSelection);
  }
  
  render() {
    return (
      <div>
        <h3>Candidates</h3>
        <Nav className="flex-sm-column CandidateList">
          {this.props.candidates.map((candidate, index) =>
            <Nav.Link key={index} candidate={candidate.id} onClick={this.handleChange}>{candidate.id} {candidate.name}</Nav.Link>)}
        </Nav>
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