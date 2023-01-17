import "./navbar.css";

import { Link } from "react-router-dom";
import logo from '../../assets/img/logo2.png'

function NavBar(){
    return(
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">
                <img className="logo" src={logo} />
              </Link>
            </li>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/detalle">Detalles</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
              </ul>
            <span>🛒</span>
          </nav>
    );
}

export default NavBar;