import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./screens/dashboard/index";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;