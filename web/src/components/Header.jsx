import React from "react";
import './style/Header.css'

const Header = (_props) => {
  return (
    <section className="section-header">
      <nav className="header-nav">
        <h3>{'< JS />'}</h3>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#certificates">Certificados</a></li>
        </ul>
      </nav>
    </section>
  )
}

export default Header;