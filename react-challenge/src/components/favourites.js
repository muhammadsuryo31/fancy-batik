import React from 'react'
import '../style/App.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFavourites } from '../store/actions'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import FavouriteCard from './FavouriteCard.js'
function Favourites (props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const MySwal = withReactContent(Swal)
  const favourites = useSelector(state => state.favourites.favourites)
  const deleteFav = (id) => {
    let input = []
    favourites.forEach(el => {
      if(el.id !== id) {
        input.push(el)
      }
    });
    dispatch(deleteFavourites(input))
    history.push('/favourites')
    Swal.fire({
      icon: 'success',
      title: 'SUCCESS',
      text: 'delete successfull'
    })
  }
    return (
      <div>
        <div className="row my-5 mx-3" id="card-container">
          {
            favourites.map(data => {
              return <FavouriteCard data={ data } deleteFav={deleteFav} key={data.id} />
            })
          }
        </div>
      </div>
    )
}

export default Favourites