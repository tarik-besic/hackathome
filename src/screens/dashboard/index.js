import React from 'react'
import HeaderImage from '../../components/headerImg';
import first from '../../assets/images/first.png';
import imageHappy from "../../assets/images/happy-image.png";
import projectImage from "../../assets/images/projectImage.png";
import Card from '../../components/card';


const Dashboard = () => {
  return (
    <div>
      <HeaderImage img={first} text={"PROJEKTI KOJE SU REALIZOVALE SREDNJE ŠKOLE"}/>
      <Card img={imageHappy} description={{
        header_text:`Projekat: Ljepši park - Sretnije dijete`,
        body_text:`Učenici srednjoškolskog centra "Nedžad Ibrišimović" Ilijaš uspješno su realizovali projekat “Ljepši park - Sretnije dijete”. Veliki odaziv srednjoškolaca učinio je da se ovaj projekat... `
      }} />
      <Card img={projectImage} description={{
        header_text:`Projekat: Kako imati bolju prezentaciju?`,
        body_text:`Učenici srednjoškolskog centra "Nedžad Ibrišimović" Ilijaš uspješno su realizovali projekat “Kako imati bolju prezentaciju?”, gdje su gimnazijalci IT smjera dali mnoge savijete...`
      }} />
    </div>
  )
}

export default Dashboard