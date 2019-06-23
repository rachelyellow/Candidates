import React, {Component} from 'react';
import CommentsText from './CommentsText';
// import { connect } from 'react-redux'

class Comments extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <CommentsText comments={this.props.comments}/>
        <form onSubmit={this.handleSubmit}>
          <textarea placeholder="Add a comment..."></textarea>
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}

// {/* <form action="/tweets/" method="POST">
// <textarea name="text" placeholder="What are you humming about?">
// <input id="submitTweet" type="submit" value="Tweet">
// <span class="counter">140</span>
// <p class="error"></p>
// </form> */}

// this.props.candidates.length ? (<p>Loading...</p>) : 

// const mapStateToProps = (state) => {
//   return {
//     selected: state.selected
//   }
// }

// export default connect(mapStateToProps)(Application);
export default Comments;