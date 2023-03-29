import React from "react";
import { profile } from "../../img";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home bg-dark">
      <div className="home__info">
        <h1 className="home__title">Hola! soy Andrés Pérez</h1>
        <h2 className="home__subTitle">Desarrollador Front-End</h2>
        <p className="home__description">
          Soy una web apasionada y comprometida que busca
          constantemente nuevos desafíos en mi carrera. Me encanta resolver
          problemas complejos y siempre estoy buscando maneras de mejorar mis
          habilidades y conocimientos en el campo de la tecnología.
        </p >
        <p className="home__description">
          En mi tiempo libre, disfruto viendo series animadas, lo que me ha
          ayudado a desarrollar mi creatividad y mi capacidad para pensar fuera
          de la caja. Creo que esto se refleja en mi enfoque innovador y único
          para resolver problemas en el desarrollo web.
        </p>
        <button className="home__moreInfoBtn">Más info</button>
      </div>
      <img
        name="hola"
        className="home__pictureProfile"
        src={profile}
        alt="Foto de perfil"
      />
    </div>
  );
};

export default Home;
