import { useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavourites } from '../store/actions'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
function BatikCard(props) {
  const favouriteList = useSelector(state => state.favourites.favourites)
  const dispatch = useDispatch()
  const history = useHistory();
  let backupUrl = 'http://www.freeiconspng.com/uploads/error-icon-28.png'
  const detailInfo = (id) => {
    history.push(`/detail/${id}`);
  }
  const addFavourite = () =>{
    let flag = false
    favouriteList.forEach(el => {
      if(el.id === props.data.id){
        flag = true
      }
    });
    if(flag === false){
      dispatch(addFavourites(props.data))
      Swal.fire({
        icon: 'success',
        title: 'SUCCESS',
        text: 'Successfully added to favourite'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'FAIL',
        text: 'this batik already added to your favourite'
      })
    }
  }
  return(
    <div className="card-col col-lg-4 mb-4">
      <div className="card shadow">
        <img src={props.data.link_batik} 
        onError={(err)=>{ 
          if (err.target.src !== backupUrl) {
            err.target.src=backupUrl } 
          }}
        alt={'Batik ' + props.data.nama_batik} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">Name</h5>
            <p className="card-text">Batik { props.data.nama_batik }</p>
        </div>
        <div class="card-footer col-12 actions">
        <button  onClick={() => detailInfo(props.data.id)} class="btn btn-outline-success btn-md">
          <i class="fas fa-info-circle"></i> Detail</button>
        <button onClick={() => addFavourite()} class="btn btn-outline-warning btn-md">
          <i class="fas fa-star"></i> Favourite</button>
      </div>
      </div>
    </div>
  )
}

export default BatikCard