export default function Contato() {

   

    return (
        <div className="container mt-3">
            <h1 id="h1">Fale conosco.</h1>

            <h3>Deixe sua mensagem</h3>

            <div className="col-12">
                <label for="inputName" className="form-label">Nome</label>
                <input type="text" className="form-control" placeholder="Nome" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="nome@email.com.br" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Mensagem</label>
                <textarea className="form-control" placeholder="Deixe aqui sua Mensagem" rows="3"></textarea>

            </div>
            <div className="mb-3"><button type="button" className="btn btn-info">Enviar</button></div>
            <address>Rua das Andorinhas n° 25 Bairro: Castanheiras Belo Horizonte/MG</address>
        </div>
    );
}