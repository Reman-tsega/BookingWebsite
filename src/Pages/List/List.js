import React, { useEffect, useState } from 'react'
// import Nav from '../../Component/Nav/Nav'
import Header from '../../Component/Header/Header'
import "./list.css"
// import input from '../../UI/input'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import BackDrop from '../../UI/Backdrop'
import Button from '../../UI/Button'
import SeachIem from '../../Component/SeachIem/SeachIem'

function List() {
  
  const location = useLocation()
  console.log(location.state? location.state.Destination:"desi","in loc")
// const d = location.state.Destination? location.state.Destination : "please click o choose"
  const [Destination, setDestination] = useState("----")
  const [date, setDate] = useState([{startDate:new Date(),endDate: new Date()}] )
  const [option, setOption] = useState({adult:1,children:1,room:1})
  // console.log(Destination,date,option,"1")
  
  const [openDate, setOpenDate] = useState(false);
  
  useEffect(()=>{
    setDestination(location?.state? location.state.Destination:"----")
    setDate(location?.state? location.state.date:[{startDate:new Date(),endDate: new Date()}])
    setOption(location?.state? location.state.option: {adult:1,children:1,room:1})
  },[])
  console.log(Destination,date,option,"2")
  // console.log(location)
  const toggle =()=>{
    if(location?.state){
        setOpenDate(!openDate)
    }else{

      setOpenDate(false)
    }
  }
  const close = ()=>{ 

    setOpenDate(false)
    // setOpenOption(false)
  }
  return (
    <>
      {/* <Nav /> */}
      <Header type="list" />
      {/* <p>List</p> */}
    <div className='listContainer'>
      <div className='listWrapper' >
        <div className='listSearch' >
          <h1 className='lsTitle' >Search</h1>
          <div className='lsItem'>
            <label>Destination</label>
            <input placeholder ={Destination} type="text" onChange={(e)=>setDestination(e.target.value)}  />
          </div>
          <div className='lsItem'>
            <label>Check in date</label>
            <span onClick={()=>toggle()}  >
              {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}
            </span>
            {/* <input /> */}
           {openDate &&( <DateRange onChange={(item)=>setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  />)}
        {openDate && <BackDrop OnclickBackDrop = {close} />}
          </div>
          <div className="lsItem">
            <label> options</label>
            <div className='lsOptionItem'>
              <span className='lsOptionText'>
                Min price <small>per night</small>
              </span>
              <input type="number" class="lsOptioninput" />

            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText'>
                Max price <small>per night</small>
              </span>
              <input type="number" class="lsOptioninput" />

            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText'>
                Adult 
              </span>
              <input placeholder={option.adult}  type="number" class="lsOptioninput" />

            </div>
            <div className='lsOptionItem'>
            <span className='lsOptionText'>children</span>
              <input placeholder={option.children}  type="number" class="lsOptioninput" />

            </div>
            <div className='lsOptionItem'>
              <span className='lsOptionText'>
                room
              </span>
              <input placeholder={option.room} type="number" class="lsOptioninput" />

            </div>
          <Button>Search</Button>
          </div>
        </div>
        <div className='listResult' >
            <SeachIem />
            <SeachIem />
            <SeachIem />
            <SeachIem />
        </div>
      </div>

    </div>
    </>
  )
}

export default List