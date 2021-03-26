import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Header from "../components/header";
import Pokemon from "../assets/pikachu.png";
import Button from "../components/button";

import "../styles/layout/result.css";

const Result = () => {
  const location = useLocation();
  const black = "#000000";
  const yellow = "#FFDE00";

  const [pokemonsPlayer1] = useState(location.state.player1);
  const [pokemonsPlayer2] = useState(location.state.player2);
  const [worth, setWorth] = useState(false);
  const [resultPlayer1, setResultPlayer1] = useState([]);
  const [resultPlayer2, setResultPlayer2] = useState([]);

  useEffect(() => {
    var valuePokemon1 = 0;
    var valuePokemon2 = 0;

    const calculateResult = () => {
      pokemonsPlayer1.map((item) => {
        var value1 =
          +item.quantity *
          Math.floor(+item.pokemon.experience / +item.pokemon.games);
        return (valuePokemon1 += +value1);
      });
      pokemonsPlayer2.map((item) => {
        var value2 =
          +item.quantity *
          Math.floor(+item.pokemon.experience / +item.pokemon.games);
        return (valuePokemon2 += +value2);
      });
      setResultPlayer1(valuePokemon1);
      setResultPlayer2(valuePokemon2);

      if (valuePokemon1 === valuePokemon2) {
        setWorth(true);
      } else {
        var result = Math.abs(valuePokemon2 - valuePokemon1);
        if (result < 10) {
          setWorth(true);
        } else {
          setWorth(false);
        }
      }
    };

    calculateResult();
  }, [pokemonsPlayer1, pokemonsPlayer2]);

  return (
    <section>
      {worth && worth ? (
        <section className="result">
          <Header imgPokemon={Pokemon} color={black} icon />
          <section className="result__container">
            <section className="result__container__text">
              A troca é justa, pois a quantidade de expêriencia sobre a
              quantidade de lutas em ambos os lados de todos os pokémons
              selecionados são próximos!
            </section>
            <section className="result__container__text">
              {resultPlayer1} ----- {resultPlayer2}
            </section>
          </section>
          <section className="result__container__button">
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: "/first" }}
            >
              <Button
                fontColor={black}
                backgroundColor={yellow}
                text={"Jogar novamente"}
                shadow
              />
            </Link>
          </section>
        </section>
      ) : (
        <section className="resultReject">
          <Header imgPokemon={Pokemon} color={black} icon />
          <section className="result__container">
            <section className="result__container__text">
              A troca não é justa, pois a quantidade de expêriencia sobre a
              quantidade de lutas em ambos os lados de todos os pokémons
              selecionados não são próximos!
            </section>
            <section className="result__container__text">
              {resultPlayer1} ----- {resultPlayer2}
            </section>
          </section>
          <section className="result__container__button">
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: "/first" }}
            >
              <Button
                fontColor={black}
                backgroundColor={yellow}
                text={"Jogar novamente"}
                shadow
              />
            </Link>
          </section>
        </section>
      )}
    </section>
  );
};

export default Result;
