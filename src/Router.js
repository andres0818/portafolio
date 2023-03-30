import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./components/App";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<App />} />
      </Route>
    </Routes>
  );
};

export default Router;
