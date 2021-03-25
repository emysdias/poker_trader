import React from "react";
import "../styles/layout/introduction.css";
import Header from "../components/header";
import Pokemon from "../assets/gastly.png";

const Introduction = () => {
  return (
    <section>
      <Header imgPokemon={Pokemon} color={'#392939'}/>
      <section className="introduction__container">hello!!</section>
    </section>
  );
};

export default Introduction;
