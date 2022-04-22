import React from "react";
import './style/Footer.css'

const Footer = (_props) => {
  return (
    <div className="container-footer">
      <h3>{'< JS />'}</h3>
      <p>Todos os direitos reservados ©</p>
      <ul className="ul-footer">
        <li><span>Contatos:</span></li>
        <li><a href="https://www.linkedin.com/in/jgsspinelli/">Linkedin</a></li>
        <li><a href="https://www.linkedin.com/in/jgsspinelli/">Github</a></li>
        <li><a href="https://www.linkedin.com/in/jgsspinelli/">E-mail</a></li>
        <li><a href="https://www.linkedin.com/in/jgsspinelli/">WhatsApp</a></li>
      </ul>
    </div>
  )
}

export default Footer;