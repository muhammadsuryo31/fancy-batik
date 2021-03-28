import { useState } from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom'
function Navbar(props) {
  const [inputFilter, setInputFilter] = useState('')

  const filtering = (event) => {
    let input = event.target.value.toLowerCase()
    setInputFilter(input)
  }
  const filterData = () => {
    props.filterData(inputFilter)
  }
  const getAllData = () => {
    setInputFilter('')
    props.getAllData()
  }
    return (
      <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/" onClick={getAllData}>
                <i class="fa fa-home"></i>
                Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/favourites">
                <i class="fa fa-star">
                </i>
                Favourites
              </Link>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-sign-in-alt">
                </i>
                Sign in
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-sign-out-alt">
                </i>
                Sign Out
              </a>
            </li> */}
          </ul>
          <div id="searchbar">
            <input class="form-control mr-sm-2 search-input" type="text" 
            placeholder="Batik Names / Locations" aria-label="Search"
            onChange={ filtering } value= {inputFilter}/>
            <button class="btn btn-outline-success my-2 my-sm-0 search-btn" 
            type="submit" onClick={ filterData } >Search</button>
          </div>
        </div>
      </nav>
    )
}

export default Navbar