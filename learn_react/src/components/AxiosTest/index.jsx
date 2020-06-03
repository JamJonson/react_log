import React from 'react'
import SearchBox from './search'
import ResultBox from './result'
class AxiosTest extends React.Component {
  state = {
    searchName: ''
  }

  startSearch = (val) => {
    // this.searchName = val
    this.setState({
      searchName: val
    })
  }

  render () {
    return (
      <div>
      <SearchBox startSearch={this.startSearch} />
      <ResultBox searchName={this.state.searchName}  />
      </div>
    )
  }
}

export default AxiosTest