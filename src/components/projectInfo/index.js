import React, { useState } from "react";
import ActiveComp from '../activeComp/index'
import ActiveImg from "../../assets/images/active.png"
import date from "../../assets/images/calendar.png"
import Blue from "../../assets/images/circle.png"
import circleDif from "../../assets/images/circleDif.png"
import phone from "../../assets/images/phone.png"
import email from "../../assets/images/email.png"
import facebook from "../../assets/images/facebook.png"
import location from "../../assets/images/location.png"
import clock from "../../assets/images/clock.png"
import time from "../../assets/images/time.png"
import volounteer from "../../assets/images/volunteer.png"
import Modal from "../../components/modal";
import LightBox from "../../components/LightBox/index";

const ProjectInfo = (props) => {
  const [modalShow, setModalShow] = useState({ test: false });
  return (
    <div className='project-info-wrapper'>
      <div className='project-info-container'>
        <img src={props?.image} />
        <h1>Projekat: {props?.name}</h1>
        <div className="info-wrapper">
          <div className="first-half">
            <div className='items'>
              <ActiveComp active={props?.active} />

              <div className="item">
                <img src={Blue} className="images-proj" />
                {props?.organizer.name}
              </div>
              <div className="item">
                <img src={phone} className="images-proj" />
                {props?.organizer.telephone}
              </div>
              <div className="item">
                <img src={email} className="images-proj" />
                {props?.organizer.email}
              </div>
              <div className='item'>
                Social Media:
                <a href={props?.organizer?.link}>
                  <img src={facebook} className="images-proj" />
                </a>
              </div>
            </div>
          </div>
          <div className="second-half">
            <div className='items'>
            <div className="item" style={{marginTop:0}}>
              {props?.type.map((tip) => { return <div className='item' style={{margin:"0",marginRight:"10px"}}><img src={circleDif} className="images-proj"/>{tip}</div> })}
            </div>
              <div className="item">
                <img src={Blue} className="images-proj" />
                {props?.location}
              </div>
              <div className="item">
              <img src={date} className="images-proj" />
                {props?.date}
              </div>
              <div className="item">
              <img src={time} className="images-proj" />
                {props?.time}
              </div>
              <div className="item">
              <img src={clock} className="images-proj" />
                {props?.hoursToGet} Sati
              </div>
              <div className="item">
              <img src={volounteer} className="images-proj" />
                {props?.volNeeded}
              </div>
            </div>
          </div>
        </div>
        <div className='project-desc-wrapper'>
          <h2>Opis projekta</h2>
          <div className='project-desc'>
            {props?.desProj}
          </div>
        </div>
        {props.active ? <button
        onClick={() => {
          setModalShow({ ...modalShow, test: true });
        }}
      >
        Prijavi se
      </button> : <LightBox /> }
        
        {modalShow.test && (
        <Modal
          close={() => setModalShow({ ...modalShow, test: false })}
          className="testing nema nista"
        />
      )}
      </div>
    </div>
  )
}

export default ProjectInfo