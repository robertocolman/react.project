import "./navbar.css";

import logo from '../../assets/img/logo2.png'

function NavBar(){
    return(
        <nav>
            <ul className="nav-menu">
                <li>
                    <a href="#">
                        <img className="logo" src={logo} />
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">
                        cafe en frasco
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Cafe en bolsa descartables
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Importados
                    </a>
                </li>

                {/* cartwifget */}
                <span>🛒</span>
                {/* fontawsome */}
            </ul>
        </nav>
    )
}

export default NavBar;