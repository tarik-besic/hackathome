import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./screens/Home";
import Dashboard from "./screens/dashboard/index";
import ActiveComp from "./components/ActiveComp";

const App = () => {
    return (
        <BrowserRouter>
        <ActiveComp active={false} />
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;