import CarrosselAnuncio from "./CarrosselAnuncio";

export default function CardAnuncio({title, text, img1, img2, img3}){
    return(
        <div className="card mx-auto text-center" style={{width: '18rem'}}>
            <CarrosselAnuncio img1={img1} img2={img2} img3={img3} stl="150px"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <a className="btn btn-primary">Comprar</a>
  </div>
</div>
    )
}