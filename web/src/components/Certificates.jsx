import React from "react";
import './style/Certificates.css'

const Certificates = (_props) => {
  return (
    <section id="certificates" className="section-certificates">
      <h1>Certificados</h1>
      <ul>
        <li><a href="https://www.origamid.com/certificate/77fbdd64/" rel="noreferrer" target="_blank">Origamid - CSS FlexBox</a></li>
        <li>
          <a href="https://www.credential.net/023897c9-1758-4ac9-9fb6-d82714cd3739" rel="noreferrer" target="_blank">Trybe - Módulo de Fundamentos do Desenvolvimento Web</a>
        </li>
        <li>
          <a href="https://www.credential.net/c836a569-d98f-4a1d-b015-63830cc4fec1#gs.xkkkl3" rel="noreferrer" target="_blank">Trybe - Módulo de Desenvolvimento Front-end</a>
        </li>
        <li>
          <a href="https://cursos.alura.com.br/certificate/4cf0a134-d073-4fb0-836f-8889e0d23464" rel="noreferrer" target="_blank">Alura - Introdução ao SQL com MySQL: Manipule e Consulte Dados</a>
        </li>
        <li>
          <a href="https://cursos.alura.com.br/certificate/c1daf9ce-0088-43b9-9e14-b2179de5aa42" rel="noreferrer" target="_blank">Alura - Consultas SQL: Avançando no SQL com MySQL</a>
        </li>
      </ul>
    </section>
  )
}

export default Certificates;