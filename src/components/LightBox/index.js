import React from 'react'
import SimpleReactLightbox from "simple-react-lightbox";
import LightBoxData from "../LightBox/LightBoxData";


const LightBox = () => {
  return (
    <>
        <SimpleReactLightbox>
        <LightBoxData/> 
        </SimpleReactLightbox>
    </>
  )
}

export default LightBox