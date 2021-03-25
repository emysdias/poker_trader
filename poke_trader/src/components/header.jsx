import React from "react";
import "../styles/layout/header.css";
import { FaHistory } from "react-icons/fa";

const Header = ({ imgPokemon, color, icon }) => {
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
        <FaHistory
          className="header__container__content__icon"
          style={{ color: color }}
        />
      ) : null}
    </section>
  );
};

export default Header;
