import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurrentActions from "./screens/current-actions";
import Project from "./screens/project";
import SignUp from "./screens/signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/project" element={<Project />} />
        <Route path="/modal" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
