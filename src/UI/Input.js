import React from 'react'
import classes from "./Input.module.css"

function Input(props) {
  return (
    <>
    <input type={props.type || 'text'}
            placeholder={props.placeholder ||''}
            value={props.value}
            onChange={props.onChange}
            className={classes[`${props.class}`] || classes.input }
            />
    </>
  )
}

export default Input