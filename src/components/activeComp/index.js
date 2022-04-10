import React from 'react'
import activeLogo from "../../assets/images/active.png"
import unactiveLogo from "../../assets/images/unactive.png"


const ActiveComp = (props) => {
    return (
        <div className='activeComp'>
            {props.active ? (
                <>
                    <img src={activeLogo} style={{ width: "40px", height: "30px", paddingRight:"12px",marginBottom:0}} />
                    <div className='text'>{props?.active ? "Aktivan" : "Zavrsen"}</div>
                </>
            ) : (
                <>
                    <img src={unactiveLogo} style={{ width: "20px", height: "20px", marginRight:"12px", marginBottom:"0" }} />
                    <div className='text'>{props?.active ? "Aktivan" : "Zavrsen"}</div>
                </>
            )}

        </div>
    )
}

export default ActiveComp