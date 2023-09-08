import React from 'react'
import './Mail.css'
import Input from '../../UI/Input'
import Button from '../../UI/Button'

function MailList(props) {
  return (
<div className='mail'>
    <h1 className='mailtitle' >Save time save money</h1>
    <span className='maildesc' >sign up and we will send he es deals o you</span>
    <div className='mailInputContainer'>

        <Input type='email' placeholder='input your email' />
        <Button class='mailbtn' > Subscribe</Button>
        
    </div>

</div>
  )
}

export default MailList