import React from 'react'

function Modal(props) {

function cancleHandler(){
    props.OnclickBackDrop()

}

function confirmHandler(){
    props.onConfirm()
}

  return (
    <div className='modal'>
        <h2>Are u sure ?</h2>
        <button className='btn btn--alt' onClick={cancleHandler}>cancle</button>
        {/* <button className='btn ' onClick={confirmHandler}>confirm</button> */}
    </div>
  )
}

export default Modal