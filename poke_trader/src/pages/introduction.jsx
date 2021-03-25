import React from "react";
import "../styles/layout/introduction.css";
import Header from "../components/header";
import Button from "../components/button";
import Pokemon from "../assets/gastly.png";

const Introduction = () => {
  return (
    <section>
      <Header imgPokemon={Pokemon} color={"#392939"} />
      <section className="introduction__container">
        <section className="introduction__container__image">
          <img src={Pokemon} height="200" width="200" alt="pokemon" />
        </section>
        <section className="introduction__container__text">
          Bem vindo, este é um game baseado em pokémons e ele consiste em dois
          jogadores ofertarem entre 1 e 6 pokémons de cada lado. Qualquer
          combinação é válida. Por exemplo, trocar 2 pokémons iguais por 4
          distintos.
        </section>
        <section className="introduction__container__button">
          <Button
            fontColor={"#ffffff"}
            backgroundColor={"#DE5239"}
            text={"Começar"}
          />
        </section>
      </section>
    </section>
  );
};

export default Introduction;
