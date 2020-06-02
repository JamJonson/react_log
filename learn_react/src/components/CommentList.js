import React from 'react'
import PropTypes from 'prop-types'

class CommentList extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state ={
  //   }
  // }
  state = {

  }
  // 给组件类指定属性
  static propTypes = {
    comments: PropTypes.array.isRequired
  }
  deleteThis = (index) => {
    this.props.deleteComment(index)
  }
  render() {
    return (
          <div className="comment-list-component">
      <label>评论列表</label>
      <ul className="list-group mb-3">
      {
        this.props.comments.map((comment, index) => 
          <li key={index} className="list-group-item">{comment}<button onClick={() => this.deleteThis(index)}>删除</button></li>
        )
      }
      </ul>
    </div>
    )
  }
}

export default CommentList