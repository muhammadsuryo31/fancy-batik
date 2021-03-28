import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
function BatikCardDetail() {
  const { id } = useParams();
  let batik = useSelector(state => state.batik.batik)
  let pickedBatik = {}
  let hargaRendah = 0
  let hargaTinggi = 0
  batik.forEach(element => {
    if(Number(element.id) === Number(id)) {
      pickedBatik = element
    }
  });
  if (pickedBatik.id){
    hargaRendah = pickedBatik.harga_rendah.toLocaleString('en-US', {
      style: 'currency',
      currency: 'IDR',
    });
    hargaTinggi = pickedBatik.harga_tinggi.toLocaleString('en-US', {
      style: 'currency',
      currency: 'IDR',
    });
  }
  
    return(
      <div className="row my-5 mx-3" id="card-container">
      <div className="card-col col-lg-4 mb-4">
        <div className="card shadow">
          <img src={pickedBatik.link_batik} alt={'Batik ' +pickedBatik.nama_batik} className="card-img-top" />
          <div className="card-body">
              <h5 className="card-title">Name</h5>
              <p className="card-text">Batik { pickedBatik.nama_batik }</p>
              <h5 className="card-title">Daerah Asal</h5>
              <p className="card-text">{ pickedBatik.daerah_batik }</p>
              <h5 className="card-title">harga terendah</h5>
              <p className="card-text">{ hargaRendah }</p>
              <h5 className="card-title">harga tertinggi</h5>
              <p className="card-text">{ hargaTinggi }</p>
          </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default BatikCardDetail