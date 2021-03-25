import React from "react";
import "../styles/layout/result.css";
import Header from "../components/header";
import Pokemon from "../assets/pikachu.png";
import Button from "../components/button";

const Result = ({ text }) => {
  const black = "#000000";
  const yellow = "#FFDE00";

  return (
    <section>
      <Header imgPokemon={Pokemon} color={black} icon/>
      <section className="result__container">
        <section className="result__container__text">
          {text}
        </section>
      </section>
      <section className="result__container__button">
        <Button
          fontColor={black}
          backgroundColor={yellow}
          text={"Jogar novamente"}
        />
      </section>
    </section>
  );
};

export default Result;
