import React from "react";
import Card from "./Card";
import "./Proyects.scss";
import { pages } from "../../data/pages";

const Proyects = () => {
  return (
    <div className="proyects">
      <h1 className="proyects__title">Algunos proyectos</h1>
      <Card data={pages.libreria} />
    </div>
  );
};

export default Proyects;
