import { Link, NavLink } from "react-router-dom"
import logo from '../assests/logo.png'
import './Header.css'

export const Header = () => {
  return (
    <header className="mainHeader">
      <div className="container">
        <Link
        to="/"
        className="logo"
      >
        <img src={logo} alt="logo" />
        <span>KPL</span>
        </Link>
        <nav className="navigation">
        <NavLink
          to="/"
          className="link"
        >
          {' '}
          Home{' '}
        </NavLink>
        <NavLink
          to="/Menus"
          className="link"
        >
          {' '}
          Menus{' '}
        </NavLink>
        <NavLink
          to="/contact"
          className="link"
        >
          {' '}
          Contact{' '}
        </NavLink>
        <NavLink
          to="/About"
          className="link"
        >
          {' '}
          About{' '}
        </NavLink>
      </nav>
      </div>
    </header>
  )
}
