import React, {useState} from 'react'

const Ball = (props) => {
 let number = props.number

 
  return (
    <div className='flex-nowrap'>{number}</div>
  )
}

export default Ball