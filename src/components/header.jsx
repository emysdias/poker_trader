import React from "react";
import { FaHistory } from "react-icons/fa";

import "../styles/layout/header.css";

const Header = ({ imgPokemon, color, icon }) => {
  var storedPokemons = JSON.parse(localStorage.getItem("pokemonsData"));

  return (
    <section className="header__container">
      <section className="header__container__content">
        <h1
          className="header__container__content__text"
          style={{ color: color }}
        >
          Eae, vamo jogar?
        </h1>
        <img
          className="header__container__content__image"
          alt="pokemon"
          src={imgPokemon}
          height="50"
          width="50"
        />
      </section>
      {icon ? (
        <section className="header__container__dropdown">
          <FaHistory
            className="header__container__content__icon"
            style={{ color: color }}
          />
          <section className="header__container__dropdown__content">
            {storedPokemons &&
              storedPokemons.map((item, index) => (
                <section key={index}>
                  <section className="header__container__dropdown__content__history">
                    <section className="header__container__dropdown__content__history__data">
                      {item.pokemon}
                    </section>
                    <section className="header__container__dropdown__content__history__divisor">
                      {item.divisor}
                    </section>
                    {item.separator}
                  </section>
                </section>
              ))}
          </section>
        </section>
      ) : null}
    </section>
  );
};

export default Header;
