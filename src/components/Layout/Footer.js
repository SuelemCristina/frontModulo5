import {Link} from 'react-router-dom'

export default function () {
    return (
        <footer className="footer fixed-bottom border-top bg-primary">
            <div className="container text-center text-white">
                2022&copy; Agência Boa Viagem. Todos os direitos reservados. <Link to='/Contato' className="text-white">Contato</Link>
            </div>
        </footer>
    )

}
 