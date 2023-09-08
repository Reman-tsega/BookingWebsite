import React from 'react'
import classes from './Button.module.css'

function Button(props) {
  return (
    <>
    <button className ={classes[`${props.class}`] || classes.button} 
        type ={props.type || 'button' }
        onClick={props.onClick}
        >
        {typeof props.children ==='function'? props.children():props.children }
    </button>
    </>
  )
}

export default Button