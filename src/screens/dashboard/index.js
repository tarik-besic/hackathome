import React from 'react'
import HeaderImage from '../../components/headerImg';
import first from '../../assets/images/first.png';
import imageHappy from "../../assets/images/happy-image.png";
import projectImage from "../../assets/images/projectImage.png";
import CardComp from "../../components/card/index";
import Home from "../home/index"
import { data } from '../../assets/data/data';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <div className='main-screen'>
      <div className='home-wrapper'>
        <Home />
        <HeaderImage img={first} text={"PROJEKTI"} />
        <div className='input-wrapper'>
          <div className='top'>
            <input type="text" name='name' placeholder='Naziv projekta' />
            <input type="text" name='trajanje' placeholder='Broj sati' />
          </div>
          <div className='bot'>
            <span>
              <select name="" id="" className='selekt'>
                <option value="" disabled selected>Vrsta DKU-a:</option>
                <option value="">Direktni</option>
                <option value="">Indirektni</option>
                <option value="">Istrazivanje</option>
                <option value="">Zagovaranje</option>
              </select>
            </span>
            <span>
              <select id="" className='selekt'>
                <option value="" disabled selected>Stanje</option>
                <option value="">Aktivni</option>
                <option value="">Zavrseni</option>
              </select>
            </span>
          </div>
          <div className='dugme'>
            <button className='button'>Traži</button>
          </div>
        </div>
        <div className='kartice'>

        </div>
        <div className='card-wrapper'>
          {data.map((card) => {
            return <CardComp
              type={card.type}
              name={card.name}
              active={card.active}
              desProj={card.desProj}
              date={card.date}
              time={card.time} img={card.image} 
              onClick={()=>{
                // console.log("tare")
                navigate("/project",{state:card})
              }}
              />

          })}
        </div>


      </div>

    </div>
  )
}

export default Dashboard