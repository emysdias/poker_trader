import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

import "../styles/layout/player2.css";

import Header from "../components/header";
import Button from "../components/button";
import Pokemon from "../assets/mrmime.png";

const Player2 = () => {
  const [pokemon, setPokemon] = useState([]);
  const purple = "#628BBD";
  const white = "#FFFFFF";
  const pink = "#FF5A6A";

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        var numbers = [];
        setPokemon([]);

        for (var i = 0; i < 6; i++) {
          const value = Math.random();
          const multiplied = value * 500;
          const answer = Math.floor(multiplied);
          if (answer > 0) {
            numbers.push(answer);
          } else if (answer < 0) {
            i--;
          }
        }

        numbers.map(async (index) => {
          const response = await api.get(`/v2/pokemon/${index}`);
          setPokemon((pokemon) => [
            ...pokemon,
            {
              name: response.data.name,
              experience: response.data.base_experience,
            },
          ]);
        });
      } catch (error) {
        alert("Ocorreu um erro!");
      }
    };
    loadPokemons();
  }, []);

  return (
    <section className="player2__container">
      <Header imgPokemon={Pokemon} color={purple} icon />
      <section className="player2__container__button">
        <Button fontColor={white} backgroundColor={pink} text={"Jogador 2"} />
      </section>
      <section className="player2__container__content">
        {pokemon &&
          pokemon.map((item, index) => (
            <section key={index}>
              <section className="player1__container__content__select">
                <section className="player1__container__content__select__name">
                  {item.name}
                </section>
                <input
                  className="player1__container__content__select__input"
                  type="number"
                  min="0"
                  max="6"
                />
              </section>
              <hr style={{ borderColor: pink }} />
            </section>
          ))}
      </section>
      <section className="player2__container__button">
        <Link style={{ textDecoration: "none" }} to={{ pathname: "/result" }}>
          <Button
            fontColor={white}
            backgroundColor={pink}
            text={"Trocar pokémons"}
            shadow
          />
        </Link>
      </section>
    </section>
  );
};

export default Player2;
