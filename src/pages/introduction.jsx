import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header";
import { darkPurple, white, orange } from "../components/pallete";
import Button from "../components/button";

import Pokemon from "../assets/gastly.png";
import "../styles/layout/introduction.css";

const Introduction = () => {

  return (
    <section className="introduction">
      <Header imgPokemon={Pokemon} color={darkPurple} />
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
          <Link style={{ textDecoration: "none" }} to={{ pathname: "/first" }}>
            <Button
              fontColor={white}
              backgroundColor={orange}
              text={"Começar"}
              shadow
            />
          </Link>
        </section>
      </section>
    </section>
  );
};

export default Introduction;
