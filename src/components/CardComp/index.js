import React from 'react'
import True from "../../assets/images/Active.png"
import False from "../../assets/images/Unactive.svg"

const CardComp = (props) => {
  return (
        <div className='Card'>
            <div className='Header'>
               <div className='Type'>{props.type}</div>
               {props.active ? <img src={True} alt="" /> : <img src={False} alt="" /> } 
            </div>
            <div className='Body'>
                <div className='Img'><img src={props.img} alt="" /></div>
                <div className='Title'><h1>{props.name}</h1></div>
                <div className='Decs'>{props.desProj}</div>
                </div>
            <div className='Footer'>
                <div className='Date'>{props.date}</div>
                <div className='Time'>{props.time}</div>
            </div>

        </div>
  )
}

export default CardComp