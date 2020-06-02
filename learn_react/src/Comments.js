import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBoxtwo from './components/CommentBoxtwo'
import CommentList from './components/CommentList'
class Comments extends React.Component{
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     comments: ['this is my first reply']
  //   }
  //   this.addComment = this.addComment.bind(this)
  //   this.deleteComment = this.deleteComment.bind(this)
  // }
  state = {
    comments: ['this is my first reply']
  }
  addComment = (comment) => {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  deleteComment = (index) => {
    let commentArr = this.state.comments
    for (let i in this.state.comments) {
      if (Number(i) === index) {
        commentArr.splice(index, 1)
      }
    }
    this.setState({
      comments: commentArr
    })
  }
  render () {
    const {comments} = this.state
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <CommentList comments={this.state.comments} deleteComment={this.deleteComment}/>
      <CommentBoxtwo commentsLength={comments.length} onAddComment={this.addComment} />
    </div>
    )
  }
}

export default Comments;
