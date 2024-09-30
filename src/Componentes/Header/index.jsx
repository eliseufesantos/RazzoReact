import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <>
        <header className="header">
        <a href="" className="logo">Razzo</a>
            <nav>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <a href="#inicio">Início</a>
                    </li>
                    <li>
                        <a href="#map">Campeonato</a>
                    </li>
                    <li>
                        <Link to='/form-login'>Login | Cadastro</Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    </>
  )
}

export default Header;
