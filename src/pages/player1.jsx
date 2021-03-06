import React, { useState, useEffect } from "react";
import api from "../services/api";

import Header from "../components/header";
import Button from "../components/button";
import { lightGreen, green } from "../components/pallete";

import Pokemon1 from "../assets/bulbasaur.png";
import "../styles/layout/player1.css";

const Player1 = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectPokemon, setSelectPokemon] = useState([]);

  const quantityOfPokemon = (quantity, pokemon) => {
    selectPokemon.map((index) => {
      if (index.pokemon.name === pokemon.name) {
        return selectPokemon.splice(selectPokemon.indexOf(index), 1);
      }
      return selectPokemon;
    });

    setSelectPokemon((selectPokemon) => [
      ...selectPokemon,
      {
        pokemon,
        quantity,
      },
    ]);
  };
  useEffect(() => {
    const loadPokemons = async () => {
      try {
        var numbers = [];
        setPokemon([]);

        for (var i = 0; i < 10; i++) {
          const value = Math.random();
          const multiplied = value * 300;
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
              games: response.data.game_indices.length,
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
        {pokemon &&
          pokemon.map((item, index) => (
            <section key={index}>
              <section className="player1__container__content__select">
                <section className="player1__container__content__selectFlex">
                  <section className="player1__container__content__select__name">
                    Nome: {item.name}
                  </section>
                  <input
                    className="player1__container__content__select__input"
                    type="number"
                    min="0"
                    max="6"
                    onChange={(e) => quantityOfPokemon(e.target.value, item)}
                  />
                </section>
                <section className="player1__container__content__selectBlock">
                  <section className="player1__container__content__selectBlock__text">
                    Experi??ncia: {item.experience}
                  </section>
                  <section className="player1__container__content__selectBlock__text">
                    Jogos: {item.games}
                  </section>
                </section>
              </section>
              <hr style={{ borderColor: lightGreen }} />
            </section>
          ))}
      </section>
      <section className="player1__container__button">
        <Button
          fontColor={green}
          backgroundColor={lightGreen}
          text={"Pr??ximo jogador"}
          shadow
          selectedPokemon={selectPokemon}
        />
      </section>
    </section>
  );
};

export default Player1;
