import React from 'react'

const Card = ({ img, description }) => {
  return (
    <div className="card">
      <div className="left">
        <img src={img} />
      </div>
      <div className="right">
        <div className="header-text">
          {description.header_text}
        </div>
        <div className="body-text">
          {description.body_text}
        </div>

        <div className="more">
          <a>Pogledaj Vise</a>
        </div>
      </div>
    </div>
  )
}

export default Card