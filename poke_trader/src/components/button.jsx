import React from "react";
import history from "../history";

import "../styles/layout/button.css";

const Button = ({
  text,
  fontColor,
  backgroundColor,
  shadow,
  selectedPokemon,
  selectedPokemonPlayer1,
}) => {
  let value = 0;

  const quantityPokemons = () => {
    if (selectedPokemon.length < 1 || selectedPokemon.length > 6) {
      alert("Selecione 1 até 6 pokémons");
    } else {
      selectedPokemon.map((index) => {
        return (value = +value + +index.quantity);
      });
      if (value < 1 || value > 6) {
        alert("Selecione 1 até 6 pokémons");
      } else {
        if (window.location.pathname === "/first") {
          history.push({
            pathname: "/second",
            state: { selectedPokemon },
          });
        } else {
          history.push({
            pathname: "/result",
            state: {
              player1: selectedPokemonPlayer1,
              player2: selectedPokemon,
            },
          });
        }
        setTimeout(function () {
          window.location.reload();
        });
      }
    }
  };

  return (
    <section>
      {shadow ? (
        selectedPokemon ? (
          <button
            className="button__container__click"
            style={{ color: fontColor, backgroundColor: backgroundColor }}
            onClick={quantityPokemons}
          >
            {text}
          </button>
        ) : (
          <button
            className="button__container__click"
            style={{ color: fontColor, backgroundColor: backgroundColor }}
          >
            {text}
          </button>
        )
      ) : (
        <button
          className="button__container"
          style={{ color: fontColor, backgroundColor: backgroundColor }}
        >
          {text}
        </button>
      )}
    </section>
  );
};

export default Button;
