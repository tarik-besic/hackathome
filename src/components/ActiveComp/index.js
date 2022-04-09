import React from 'react'
import activeLogo from "../../assets/images/Active.png"
import unactiveLogo from "../../assets/images/Unactive.svg"


const ActiveComp = (props) => {
  return (
    <>
    {props.active ? (
            <div className='active'>
            <img src={activeLogo} style={{width:"20px", height:"20px"}}/>
            {props?.active ? "Aktivan" : "Neaktivan"}
            </div>
            ) : (
            <div className='unactive'>
            <img src={unactiveLogo} style={{width:"20px", height:"20px"}}/>
            {props?.active ? "Aktivan" : "Neaktivan"}
            </div>
            )}

              </>
  )
}

export default ActiveComp