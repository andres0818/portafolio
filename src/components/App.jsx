import React from "react";
import PersonalDescription from "./PersonalDescription/PersonalDescription";
import Proyects from "./Proyects/Proyects";
import { pages } from "../data/pages";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <PersonalDescription />
      {pages.map((page, index) => (
        <Proyects key={index} data={page} />
      ))}
    </div>
  );
};

export default App;
