import React from 'react'
import './Title.css'

const Title = ({newSubTitle, subTitle, title}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h3>{newSubTitle}</h3>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
