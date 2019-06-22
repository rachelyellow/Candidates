import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
// import { connect } from 'react-redux'

class CandidateList extends Component {
  handleChange = event => {
    const newSelection = event.target.value;
    this.props.changeActiveApplicant(newSelection);
  }
  
  render() {
    return (
      <Col sm={3}>
        <h3>Candidates</h3>
        <Nav variant="pills" className="flex-column CandidateList">
          {this.props.candidates.map((candidate, index) =>
            <Nav.Link 
              key={index}
              eventKey={candidate.id}
              value={candidate.id}
              onClick={this.handleChange}>{candidate.id} {candidate.name}</Nav.Link>)}
        </Nav>
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

// export default connect(mapStateToProps)(CandidateList);
export default CandidateList;