import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputFilter: ''
    }
  }
  filtering = (event) => {
    let input = event.target.value.toLowerCase()
    this.setState({
      inputFilter: input
    })
  }
  filterData = () => {
    this.props.filterData(this.state.inputFilter)
  }
  getAllData = () => {
    this.props.getAllData()
  }

  render () {
      return (
        <div className="batik-search mt-4">
            <div className="mb-3">
              <label className="form-label">Batik Names / Locations </label>
              <input type="text" className="form-control" placeholder="Abimanyu / solo" onChange={ this.filtering } />
            </div>
          <button className="btn btn-primary" onClick={ this.filterData }><i className="fas fa-search"></i> Find One</button>
          <button className="btn btn-warning mt-2" onClick={ this.getAllData }><i className="fas fa-search"></i> Get All</button>
        </div>
      )
  }
}

export default SearchBar