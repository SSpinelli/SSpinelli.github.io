import React from "react";
import './style/Banner.css'
import linkedin from '../img/icons8-linkedin.svg'
import github from '../img/icons8-github.svg'

const Banner = (_props) => {
  return (
    <div className="container-principal">
      <h1 className="banner-h1">{'< João Spinelli />'}</h1>
      <div>
        <a href="https://www.linkedin.com/in/jgsspinelli/" rel="noreferrer" target="_blank">
          <img 
            className="banner-img" 
            src={ linkedin } 
            alt="logomarca do site Linkedin: Contorno de um quadrado com as lentras I e N escrita no meio"
          />
        </a>
        <a href="https://github.com/SSpinelli/" rel="noreferrer" target="_blank">
          <img 
            className="banner-img" 
            src={ github } 
            alt="logomarca do site Github: Contorno de um circulo com a silhueta de um gato no meio"
          />
        </a>
      </div>
    </div>
  )
}

export default Banner;