import React from "react";
import './style/Home.css'
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";

const Home = (_props) => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Footer />
    </>
  )
}

export default Home;