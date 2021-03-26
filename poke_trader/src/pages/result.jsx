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
    var gameIndice1 = 0;
    var gameIndice2 = 0;

    const calculateResult = () => {
      pokemonsPlayer1.map((item) => {
        var value1 = +item.quantity * +item.pokemon.experience;
        valuePokemon1 += +value1;
        gameIndice1 = item.pokemon.games;
      });
      pokemonsPlayer2.map((item) => {
        var value2 = +item.quantity * +item.pokemon.experience;
        valuePokemon2 += +value2;
        gameIndice2 = item.pokemon.games;
      });

      if (valuePokemon1 === valuePokemon2) {
        setWorth(true);
      } else {
        var result = Math.abs(valuePokemon2 - valuePokemon1);
        var game = Math.abs(gameIndice1 - gameIndice2);
        if (result < 150 && game < 5) {
          setWorth(true);
        } else {
          setWorth(false);
        }
      }
    };

    calculateResult();
  }, []);

  return (
    <section>
      {worth && worth ? (
        <section className="result">
          <Header imgPokemon={Pokemon} color={black} icon />
          <section className="result__container">
            <section className="result__container__text">
              A troca é justa
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
              A troca não é justa
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
