import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div>
        <h1><a href="/">Weslley Santos</a></h1>
      </div>
      <div>
        <nav>
          <a href="#home">
            Home
          </a>
          <a href="#projetos">
            Projetos
          </a>
          <a href="#contato">
            Contato 
          </a>
          <a href="#curriculo">
            Currículo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
