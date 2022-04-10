import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import img1 from "../src/assets/images/carpe.jpg"

import Home from "./screens/Home";
import Dashboard from "./screens/dashboard/index";
import LightBox from "./components/LightBox";
import CardComp from "./components/CardComp";

const App = () => {
    return (
        <BrowserRouter>
            <CardComp type="Indirektno" name="Neki Projekt Znas" active={true} desProj="bla blas adasdasdasdas asdasdasdasdasdasd asdasdasd asdasdasdasdasd a adasdas adasdasd adasdad adadadasd adasdasdasdasd adasdslasdl asdlasldak lasedkmc" date="22.4.2022" time="14:00-16:00" img={img1}/>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;