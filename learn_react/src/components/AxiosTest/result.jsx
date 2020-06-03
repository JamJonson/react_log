import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
class ResultBox extends React.Component {
	static propTypes = {
		searchName: PropTypes.string.isRequired
	}
	componentDidUpdate(preProps) {
    console.log(preProps, this.props.searchName)
    const {searchName} = preProps
    if (searchName !== this.props.searchName) {
			const url = `https://api.github.com/search/repositories?q=${this.props.searchName}`
			axios.get(url)
			.then(respone => {
				const result = respone.data
				console.log(result)
			})
			.catch(error => {
				console.log(error)
			})
    }
  }
	render() {
		return (
			<div>
				{this.props.searchName}
			</div>
		)
	}
}

export default ResultBox