import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          Criado por Weslley Santos com <strong>React</strong> e
          {' '}
          <FontAwesomeIcon icon={faHeart} className="color-green" />
        </p>
      </div>
      <div className="social-icons">
        <a href="https://linkedin.com/in/weslley-almerindo">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/wes-santos">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:weslleyalmerindo2@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.instagram.com/weslley.almerindo/">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
