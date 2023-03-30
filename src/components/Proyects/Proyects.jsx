import React from "react";
import { pages } from "../../data/pages";
import Card from "./Card";
import "./Proyects.scss";

const Proyects = () => {
  return (
    <div id="proyectos" className="proyects">
      <h1 className="proyects__title">Algunos proyectos</h1>
      {pages.map((page, index) => (
          <Card key={index} data={page} />
      ))}
    </div>
  );
};

export default Proyects;

