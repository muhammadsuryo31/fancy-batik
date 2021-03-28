import '../style/header.css'
function Header (props) {
    return (
      <div class="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
        
        <div class="overlay"></div>
        <div class="carousel-inner">
          <div class="item slides active">
            <div class="slide-1"></div>
            <div class="hero">
              <hgroup>
                  <h1>fancy batik</h1>        
                  <h3>Pesona Batik Nusantara</h3>
              </hgroup>
            </div>
          </div>
        </div> 
      </div>
    )
}

export default Header