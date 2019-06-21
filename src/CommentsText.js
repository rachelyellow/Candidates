import React, {Component} from 'react';
// import { connect } from 'react-redux'

class CommentsText extends Component {

  render() {
    if (this.props.comments.trim().length > 0) {
      return (
        <p>{this.props.comments}</p>
      );
    }
    return null;
  }
}

// this.props.candidates.length ? (<p>Loading...</p>) : 

// const mapStateToProps = (state) => {
//   return {
//     selected: state.selected
//   }
// }

// export default connect(mapStateToProps)(Application);
export default CommentsText;