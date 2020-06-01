import React from 'react'
// 受控组件(非受控组件看CommentBoxtwo)
class CommentBox extends React.Component {
  constructor(pros) {
    super(pros)
    this.state={
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }
  handleSubmit (event) {
    console.log(event)
    // 阻止跳转
    event.preventDefault();
  }
  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容</label>
          <input type="text" className="form-control" placeholder="请输入留言" value={this.state.value} onChange={this.handleChange}></input>
          <button type="submit" className="btn btn-primary">留言</button>
       </div>
      </form>
    )
  }
}

export default CommentBox