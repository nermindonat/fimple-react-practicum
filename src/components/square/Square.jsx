import React from 'react'
import "./square.css";

const Square = ({value, clickSquare}) => {
  return (
    <div className='square' onClick={clickSquare}>{value}
      
    </div>
  )
}

export default Square;
