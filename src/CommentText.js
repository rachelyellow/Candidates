import React, {Component} from 'react';

class CommentText extends Component {

  render() {
    if (this.props.comments.length > 0) {
      console.log(this.props.comments.split("|"))
      const individualComments = this.props.comments.split("|");
      return (
        <ul>
          {individualComments.map((comment, index) => <li key={index}>{comment}</li>)}
        </ul>
      );
    }
    return null;
  }
}


export default CommentText;