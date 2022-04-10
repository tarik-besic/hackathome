import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard/index";
import Project from "./screens/project/project";
import imageHappy from "./assets/images/happy-image.png";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/project" element={<Project />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

/*<Project
                    name="Humanitarni bazar"
                    desProj="Humanitarni bazar za prikupljanje novca za Crveni Križ Ilijaš"
                    active={true}
                    location="Ilijaš"
                    type={['Indirektno', 'Zagovaranje']}
                    organizer={{
                        name: "Carpe diem",
                        description: "UDRUŽENJE OMLADINSKA ORGANIZACIJA 'ISKORISTI DAN - CARPE DIEM' je osnovana sa ciljem ostvarivanja zajedničkih i općih interesa kao i osnaživanja mladih",
                        logo: imageHappy,
                        link: "https://www.facebook.com/omladinskaorganizacijacarpediem/",
                        telephone:"060 32 06 605",
                        email:"oocarpediem14@outlook.com"
                    }}
                    date="22.4.2022"
                    time="10:00-17:00"
                    hoursToGet="7"
                    volNeeded="25"
                    image={imageHappy}

                />*/