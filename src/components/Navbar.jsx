import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} className="navbar-icon" />
          <span>Home</span>
        </Link>
      </div>
      <div className="navbar-center">
        <Link to="/cadastro-artista">
          <FontAwesomeIcon icon={faUserPlus} className="navbar-icon" />
          <span>Cadastro de Artista</span>
        </Link>
        {/* <Link to="/login">
          <FontAwesomeIcon icon={faUser} className="navbar-icon" />
          <span>Login</span>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
