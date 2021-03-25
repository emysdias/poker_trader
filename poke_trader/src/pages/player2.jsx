import React from "react";
import { Link } from "react-router-dom";

import "../styles/layout/player2.css";

import Header from "../components/header";
import Button from "../components/button";
import Pokemon from "../assets/mrmime.png";

const Player2 = () => {
  const purple = "#628BBD";
  const white = "#FFFFFF";
  const pink = "#FF5A6A";

  return (
    <section className="player2__container">
      <Header imgPokemon={Pokemon} color={purple} icon />
      <section className="player2__container__button">
        <Button fontColor={white} backgroundColor={pink} text={"Jogador 2"} />
      </section>
      <section className="player2__container__content">
        <section className="player2__container__content__select">
          <section className="player2__container__content__select__name">
            name1
          </section>
          <input
            className="player2__container__content__select__input"
            type="number"
            min="0"
            max="6"
          />
        </section>
        <hr style={{ borderColor: pink }} />
      </section>
      <section className="player2__container__button">
        <Link style={{ textDecoration: "none" }} to={{ pathname: "/result" }}>
          <Button
            fontColor={white}
            backgroundColor={pink}
            text={"Trocar pokémons"}
          />
        </Link>
      </section>
    </section>
  );
};

export default Player2;
