import CardAnuncio from "../destinoAnuncios/CardAnuncio";
import CarrosselAnuncio from "../destinoAnuncios/CarrosselAnuncio";

export default function Destinos() {
    return (
        <div className="container mt-3">
            <h1 id="h1">Escolha seu destino e aproveite!!</h1>
            <CarrosselAnuncio  ti1="Porto Seguro" ti2="Porto Seguro" ti3="Porto De Galinhas" img1="../img/portoSeg1.jpg" img3="../img/portodeGal1.jpg"  img2="../img/portoSeg2.jpg" title="Porto Seguro" />

            <div className="row mt-5 fotos">
                <CardAnuncio img1="../img/portoSeg1.jpg" img2="../img/portoSeg1.jpg" img3="../img/portoSeg1.jpg" title="Porto Seguro" text="R$: 1699,00" />
                <CardAnuncio img1="../img/portoSeg2.jpg" img2="../img/portoSeg2.jpg" img3="../img/portoSeg2.jpg" title="Porto Seguro" text="R$: 1699,00" />
                <CardAnuncio img1="../img/portodeGal1.jpg" img2="../img/portodeGal1.jpg" img3="../img/portodeGal1.jpg" title="Porto De Galinhas" text="R$: 1999,00" />
            </div>
        </div>

    );
}