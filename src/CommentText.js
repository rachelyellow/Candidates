import React, {Component} from 'react';

class CommentText extends Component {

  render() {
    if (this.props.comments.length > 0) {
      const individualComments = this.props.comments.split("|");
      return (
        <ul>
          Comments:
          {individualComments.map((comment, index) => <li key={index}>{comment}</li>)}
        </ul>
      );
    }
    return null;
  }
}


export default CommentText;