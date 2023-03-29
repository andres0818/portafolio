import React from "react";
import { pages } from "../../data/pages";
import Card from "./Card";
import "./Proyects.scss";

const Proyects = () => {
  return (
    <div className="proyects">
      <h1 className="proyects__title">Algunos proyectos</h1>
      {pages.map((page, index) => (
        <Card data={page} />
      ))}
    </div>
  );
};

export default Proyects;
