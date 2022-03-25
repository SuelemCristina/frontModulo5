
export default function CarrosselAnuncio({ img1, img2, img3, stl, ti1, ti2, ti3 }) {
  return (

    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="w-100 rounded" style={{height: stl}} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>{ti1}</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} className="w-100  rounded" style={{height: stl}} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>{ti2}</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} className="w-100  rounded" style={{height: stl}} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>{ti3}</h5>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


  )
}