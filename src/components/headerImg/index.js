import React from 'react'

const HeaderImage = ({ img, text }) => {
  return (
    <div className='header'>
        <img src={img} />
      <div className='header-content'>
        <div className='text'>
          {text}
        </div>
      </div>
    </div>
  )
}

export default HeaderImage