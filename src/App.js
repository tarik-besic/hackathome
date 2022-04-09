import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./screens/Home";
import Dashboard from "./screens/dashboard/index";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;