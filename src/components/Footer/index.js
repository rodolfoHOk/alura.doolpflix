import React from 'react';
import FooterBase from './styles';
import Logo from '../../assets/img/logo-flix.png';

function Footer() {
  return (
    <FooterBase>
      <img src={Logo} alt="Logo Doopflix" className="Logo" />
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
