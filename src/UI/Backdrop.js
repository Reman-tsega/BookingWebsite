import React from 'react'
import './Modal.css'
function BackDrop(props) {
    // console.log("dop opemde")
  return (
    <div className='backdrop' onClick={props.OnclickBackDrop} />
  )
}

export default BackDrop