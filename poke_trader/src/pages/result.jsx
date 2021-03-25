import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header";
import Pokemon from "../assets/pikachu.png";
import Button from "../components/button";

import "../styles/layout/result.css";

const Result = ({ text }) => {
  const black = "#000000";
  const yellow = "#FFDE00";

  return (
    <section className="result">
      <Header imgPokemon={Pokemon} color={black} icon />
      <section className="result__container">
        <section className="result__container__text">{text}</section>
      </section>
      <section className="result__container__button">
        <Link style={{ textDecoration: "none" }} to={{ pathname: "/first" }}>
          <Button
            fontColor={black}
            backgroundColor={yellow}
            text={"Jogar novamente"}
            shadow
          />
        </Link>
      </section>
    </section>
  );
};

export default Result;
