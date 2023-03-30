import React from "react";
import { linkedin, profile } from "../../img";
import "./PersonalDescription.scss";

const PersonalDescription = () => {
  return (
    <div className="personalDescription ">
      <div className="personalDescription__info">
        <h1 className="personalDescription__title">¡Hola! soy Andrés Pérez</h1>
        <h2 className="personalDescription__subTitle">
          Desarrollador Front-End
        </h2>
        <p className="personalDescription__description">
          Soy un programador apasionado y comprometido que busca constantemente
          nuevos desafíos en mi carrera. Me encanta resolver problemas complejos
          y siempre estoy buscando maneras de mejorar mis habilidades y
          conocimientos en el campo de la tecnología.
        </p>
        <p className="personalDescription__description">
          En mi tiempo libre, disfruto viendo series animadas, lo que me ha
          ayudado a desarrollar mi creatividad y mi capacidad para pensar fuera
          de la caja. Creo que esto se refleja en mi enfoque innovador y único
          para resolver problemas en el desarrollo web.
        </p>
        <a
          href="https://www.linkedin.com/in/andres-perez0818/"
          target="_blank"
          rel="noreferrer"
          className="personalDescription__moreInfoBtn"
        >
          <img src={linkedin} alt="Linkedin" />
          Hablemos
        </a>
      </div>
      <img
        name="hola"
        className="personalDescription__pictureProfile"
        src={profile}
        alt="Foto de perfil"
      />
    </div>
  );
};

export default PersonalDescription;
