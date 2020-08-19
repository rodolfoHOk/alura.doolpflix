import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-flix.png';
import './Menu.css';
// import ButtonLink from '../components/ButtonLink'
import Button from '../Button';

function Menu({ isHome }) {
  if (isHome) {
    return (
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Logo da DoolpFlix" />
        </Link>
        <Button.A as={Link} className="ButtonLink" to="/cadastro/Video">
          Novo vídeo
        </Button.A>
      </nav>
    );
  }
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo da DoolpFlix" />
      </Link>
    </nav>
  );
}

Menu.defaultProps = {
  isHome: false,
};

Menu.propTypes = {
  isHome: PropTypes.bool,
};

export default Menu;
