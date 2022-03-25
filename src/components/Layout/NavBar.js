import {Link} from 'react-router-dom'

function NavBar() {
    return (
<nav className="navbar navbar-expand-lg navbar-light text-white p-0 m-0">
            <div className="container-fluid bg-primary">
                <Link className="navbar-brand mx-2 my-auto" to='/'> <img src="../img/logo.jpg" width="50px" 
                    alt="Home" /></Link>
                 <button className="navbar-toggler btn-lg btn-outline-secondary border-1 border-secondary" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav">

                        <li className="nav-item mx-2 my-1">
                            <Link className="btn btn-md btn-outline-secondary text-white" to='/Destinos'>Destinos</Link>
                        </li>
                        <li className="nav-item mx-2 my-1">
                            <Link className="btn btn-md btn-outline-secondary text-white" to='/Promocoes'>Promoções</Link>
                        </li>
                        <li className="nav-item mx-2 my-1">
                            <Link className="btn btn-md btn-outline-secondary text-white" to='/Contato'>Contato</Link>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>


      
    );
}
export default NavBar;