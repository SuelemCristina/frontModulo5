import api from '../../api';
import {useEffect, useState, useRef} from 'react'
export default function Promocoes() {


    const nome = useRef()
    const email = useRef()
    const telefone = useRef()

    function enviarDados(event){
    event.preventDefault()
    api.post("/promocoes/",{
        nome: nome.current.value,
        email: email.current.value,
        telefone: telefone.current.value
    }).then((res) => console.log(res)).catch((err) => console.log(err))
}

const [promocoes, setPromocoes] = useState([])

useEffect(()=>{
    api.get('promocoes').then((res) => setPromocoes(res.data)).catch((err) => console.log(err))
    }, [promocoes])



    return (
        <div className="container mt-3 formul">
            <h1 id="h1">Cadastre-se e receba nossas promoções.</h1>
            <div className="row mb-5 justify-content-center">
                <img id="imgpromo" src="../img/promocoes.png" alt="imagem de divulgação de promoção" />
            </div>
            <form className="row g-3" onsubmit={enviarDados}>
                <div className="col-12">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" id="inputNome" placeholder="Nome" ref={nome}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" ref={email}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Telefone</label>
                    <input type="tex" className="form-control" id="inputTel" placeholder="(99)99999-9999" ref={telefone}/>
                </div>
                <div className="col-12">
                    <button type="submit" color="#4682B4" className="btn btn-info">Enviar</button>
                </div>
            </form>

        </div>
    );
}