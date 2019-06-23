import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
// import { connect } from 'react-redux'

class CandidateList extends Component {
  constructor(props) {
    super(props);
    this.handleChange.bind(this);
  }

  handleChange(selection) {
    this.props.fetchSelectionData(selection);
  }
  
  render() {
    return (
      <Col sm={2}>
        <h3>Candidates</h3>
        <Nav variant="pills" className="flex-column CandidateList" onSelect={event => this.handleChange(event)}>
          {this.props.candidates.map((candidate, index) =>
            <Nav.Link 
              key={index}
              eventKey={candidate.id}>
                {candidate.id} {candidate.name}
            </Nav.Link>)}
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