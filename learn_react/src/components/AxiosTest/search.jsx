import React from 'react'
import PropTypes from 'prop-types'
class SearchBox extends React.Component {

	static propTypes = {
		startSearch: PropTypes.func.isRequired
	}
	getResult = () => {
		if (this.input.value.trim()) {
			this.props.startSearch(this.input.value.trim())
		}
	}
	render() {
		return (
			<div>
				<input ref={input => this.input = input}></input>
				<button onClick={this.getResult}>查找</button>
			</div>
		)
	}
}

export default SearchBox