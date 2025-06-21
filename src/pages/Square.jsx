import React from 'react'
import './square.css';
const Square = ({ onClick, value }) => {
    return (

        <button className='squareBtn' onClick={onClick} >{value}</button>

    )
}

export default Square
