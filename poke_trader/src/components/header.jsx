import React from "react";
import "../styles/layout/header.css";
import { FaHistory } from "react-icons/fa";

const Header = ({ imgPokemon, color, icon }) => {
  // localStorage.removeItem("player1");
  // localStorage.removeItem("player2");
  // var storedNames = JSON.parse(localStorage.getItem("player1"));
  // console.log(storedNames);
  // var storedNames2 = JSON.parse(localStorage.getItem("player2"));
  // console.log(storedNames2);
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
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
          </section>
        </section>
      ) : null}
    </section>
  );
};

export default Header;
