import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurrentActions from "./screens/current-actions";
import SignUp from "./screens/signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/projects" element={<CurrentActions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
