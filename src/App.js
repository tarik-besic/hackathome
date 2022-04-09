import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./screens/Home";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;