import React from "react";
import { Link } from "react-router-dom";

import "../styles/layout/player1.css";

import Header from "../components/header";
import Button from "../components/button";
import Pokemon1 from "../assets/bulbasaur.png";

const Player1 = () => {
  const green = "#184A4A";
  const lightGreen = "#A4D541";

  return (
    <section className="player1__container">
      <Header imgPokemon={Pokemon1} color={green} icon />
      <section className="player1__container__button">
        <Button
          fontColor={green}
          backgroundColor={lightGreen}
          text={"Jogador 1"}
        />
      </section>
      <section className="player1__container__content">
        <section className="player1__container__content__select">
          <section className="player1__container__content__select__name">
            name1
          </section>
          <input
            className="player1__container__content__select__input"
            type="number"
            min="0"
            max="6"
          />
        </section>
        <hr style={{ borderColor: lightGreen }} />
      </section>
      <section className="player1__container__button">
        <Link style={{ textDecoration: "none" }} to={{ pathname: "/second" }}>
          <Button
            fontColor={green}
            backgroundColor={lightGreen}
            text={"Próximo jogador"}
            shadow
          />
        </Link>
      </section>
    </section>
  );
};

export default Player1;
