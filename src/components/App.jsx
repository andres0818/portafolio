import React from "react";
import PersonalDescription from "./PersonalDescription/PersonalDescription";
import Proyects from "./Proyects/Proyects";

import "./App.scss";
import Footer from "./Footer/Footer";
import Navbar from "./NavBar/NavBar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <PersonalDescription />
      <Proyects />
      <Footer />
    </div>
  );
};

export default App;
