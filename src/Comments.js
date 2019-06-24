import React, {Component} from 'react';
import CommentText from './CommentText';

class Comments extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  forceUpdateHandler = () => {
    this.forceUpdate();
  }

  handleSubmit = event => {
    event.preventDefault()
    let textInput = event.target.elements.text.value.trim();
    if (textInput.length > 0) {
      // create new object to replace existing position
      let replace = this.props.application.videos;
  
      // find the submitted video to updated with new comment
      let submission = this.props.application.videos.find(submission => submission.questionId === this.props.questionId);
      // find index of submitted video and update with the new comment
      const position = replace.indexOf(submission)
      if (replace[position].comments.length > 0) {
        replace[position].comments = submission.comments + "|" + textInput;
      } else {
        replace[position].comments = textInput;
      };
  
      // empty textarea after submitting comment, update current application with new comment
      event.target.elements.text.value = "";
      this.props.addComment(this.props.application.id, replace);
    }
  }

  render() {
    return (
      <div>
        <CommentText comments={this.props.comments}/>
        <form onSubmit={this.handleSubmit}>
          <textarea name="text" placeholder="Add a comment..." onChange={this.updateInput}></textarea>
          <input onClick={this.forceUpdateHandler.bind(this)} type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}


export default Comments;