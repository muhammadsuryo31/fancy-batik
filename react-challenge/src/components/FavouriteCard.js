import { useParams } from "react-router-dom";
function FavouritesCardDetail(props) {
  let favourites = props.data
  let hargaRendah = 0
  let hargaTinggi = 0
  if (favourites.id){
    hargaRendah = favourites.harga_rendah.toLocaleString('en-US', {
      style: 'currency',
      currency: 'IDR',
    });
    hargaTinggi = favourites.harga_tinggi.toLocaleString('en-US', {
      style: 'currency',
      currency: 'IDR',
    });
  }
  const deleteFav = () => {
    props.deleteFav(favourites.id)
  }
  
    return(
        <div className="card-col col-lg-4 mb-4">
          <div className="card shadow">
            <img src={favourites.link_batik} alt={'Batik ' +favourites.nama_batik} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">Batik { favourites.nama_batik }</p>
                <h5 className="card-title">Daerah Asal</h5>
                <p className="card-text">{ favourites.daerah_batik }</p>
                <h5 className="card-title">harga terendah</h5>
                <p className="card-text">{ hargaRendah }</p>
                <h5 className="card-title">harga tertinggi</h5>
                <p className="card-text">{ hargaTinggi }</p>
                <div class="card-footer col-12 actions">
                    <button  onClick={deleteFav} class="btn btn-outline-danger btn-md">
                      <i class="fas fa-trash-alt"></i> Delete</button>
                </div>
            </div>
          </div>
        </div>
    )
  }
  
  export default FavouritesCardDetail