import React from "react";
import Card from "./Card";
import "./Proyects.scss";

const Proyects = ({data,reverse=false}) => {
  return (
    <div className="proyects">
      <h1 className="proyects__title">Algunos proyectos</h1>
      <Card  data={data} />
    </div>
  );
};

export default Proyects;
