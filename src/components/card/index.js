import React from 'react'
import True from "../../assets/images/active.png"
import False from "../../assets/images/unactive.png"

const CardComp = (props) => {
    
  return (
        <div className='Card' onClick={props.onClick}>
            <div className='Header'>
               <div className='Type'>
                   {props.type.map((tip)=>{return <div className='tip'>{tip}</div>})}
               </div>
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