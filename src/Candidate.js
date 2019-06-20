import React, {Component} from 'react';

class Candidate extends Component {
  render() {
    return (
      <li className="Candidate">
        {this.props.name}
      </li>
    );
  }
}
export default Candidate;