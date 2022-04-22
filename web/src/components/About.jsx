import React from "react";
import MyProfile from '../img/joao_gabriel.png'
import './style/About.css'

const About = (_props) => {
  return (
    <section id="about" className="section-about">
      <h1>Sobre</h1>
      <div className="div-about">
        <img src={ MyProfile } alt="Foto de uma pessoa com óculos escuro sorrindo, sentada no carro mostrando o cartão de vacinação" />
        <div>
          <p>Olá, como você já deve ter visto no topo me chamo João Gabriel, atualmente estou cursando desenvolvimento web na <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>. Ao mesmo tempo, curso Análise e desenvolvimento de sistemas de maneira remota pela <a href="https://estacio.br/" target="_blank" rel="noreferrer">Estácio</a>, e sempre que posso faço alguns cursos focados em front-end no site <a href="https://www.origamid.com/" target="_blank" rel="noreferrer">Origamid</a>, antes de me interessar pela área de programação me formei em Administração e trabalhei principalmente com marketing digital, o que me confere a vantagem de conseguir me comunicar de forma clara com pessoas das mais diversas áreas, evitando ruídos de entendimento entre as áreas.</p>
          <p>Quando não estou estudando sobre desenvolvimento gosto de cozinhar, passar tempo com os amigos, tocar piano e jogar (jogos eletrônicos ou de tabuleiro).</p>
        </div>
      </div>
    </section>
  )
}

export default About;