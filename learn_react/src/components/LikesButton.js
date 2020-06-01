import React from 'react';

class LikesButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      likes: 0
    }
  }
  increaseLikes () {
    console.log(this)
    this.setState({
      likes: this.state.likes + 1 // ++this.state.num，直接修改来state，在react中这样是不允许的  
    })
  }
  render() {
    return (
      <div className="likes-button-component">
        <button type="button" className="btn btn-outline-primary btn lg" onClick={() => this.increaseLikes()}>
         点赞{this.state.likes}
        </button>
      </div>
    )
  }
}

export default LikesButton