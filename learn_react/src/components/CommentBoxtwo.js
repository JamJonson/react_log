import React from 'react'
// 非受控组件(受控组件看CommentBox)
class CommentBoxtwo extends React.Component {
  // constructor(pros) {
  //   super(pros)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }
  handleSubmit = (event) => {
    console.log(this.textInput.value)
    console.log(process.env)
    this.props.onAddComment(this.textInput.value)
    this.textInput.value = ''
    // 阻止跳转
    event.preventDefault();
  }
  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容</label>
          <input type="text" className="form-control" placeholder="请输入留言" ref={(textInput) => {this.textInput = textInput}}></input>
          <button type="submit" className="btn btn-primary">留言</button>
       </div>
       <p>已有{this.props.commentsLength}条评论</p>
      </form>
    )
  }
}

export default CommentBoxtwo