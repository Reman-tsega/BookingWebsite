import React from 'react'
// import classes from "./Nav.module.css"
import './Nav.css'
// import Header from '../Header/Header'
// import Home from '../../Pages/Home/Home'
import { Link, useNavigate } from 'react-router-dom'
// import List from '../../Pages/List/List'

function Nav() {
  const navigate = useNavigate()
  return (
    <>
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>Shersher booking</span>
            <ul className='link'>
                <Link to='/'>
                     <li>Home</li>
                </Link>
                {/* <Link to='/list'> */}
                      <li onClick={()=>navigate("/list")} >List</li>
                {/* </Link> */}
                <Link to='/hotel'>
                      <li>Hotel</li>
                </Link>
            </ul>
            <div className='navItems'>
                <button>Register</button>
                <button>Login</button>
            </div>
        </div>

    </div>
    {/* <Home/> */}
    {/* <List/> */}
           
    </>
  )
}

export default Nav