import React from "react";
import PersonalDescription from "./PersonalDescription/PersonalDescription";
import Proyects from "./Proyects/Proyects";

import "./App.scss";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <PersonalDescription />
      <Proyects />
      <Footer />
    </div>
  );
};

export default App;
