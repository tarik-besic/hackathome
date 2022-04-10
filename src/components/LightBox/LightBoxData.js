import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import img1 from "../../assets/images/Logo.png";
import img2 from "../../assets/images/carpe.jpg";



const LightBoxData = () => {
  return (
    <>
        <SRLWrapper>
        <img src={img1} alt="" style={{width:"10px"}}/>
        <img src={img2} alt=""/>
        </SRLWrapper>
    </>
  )
}

export default LightBoxData