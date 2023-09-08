import React,{useState} from 'react'
import classes from './Headeer.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
//   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { DateRange } from "react-date-range";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { format } from "date-fns";
//   import { useNavigate } from "react-router-dom";
import BackDrop from '../../UI/Backdrop';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const [Destination, setDestination] = useState()
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [option, setOption] = useState({
        adult:1,
        children:0,
        room:1,
      })

      const [openOption, setOpenOption] = useState(false);
      const [openDate, setOpenDate] = useState(false);

      const optionHandler = (op,opration)=>{
        setOption(prev=>{
            return {...prev,
                [op]:opration==="+"? option[op]+1 :option[op]-1
            }
        })

      }
      const navigate = useNavigate()
      const DestinationHandler =()=>{
       navigate('/list',{state:{Destination,date,option}});

      }
      const close = ()=>{ 

        setOpenDate(false)
        setOpenOption(false)
      }
    
  return (
    <div className={classes.header} >
        <div className={props.type==="list"?classes.list : classes.headerContainer}>

        <div className={classes.headerList}>
            <div className={classes.headerItem && classes.active}>
                <FontAwesomeIcon icon={faBed} />
                <span> stayes</span>
            </div>
            <div className={classes.headerItem}>
                <FontAwesomeIcon icon={faPlane} />
                <span> flights</span>
            </div>
            <div className={classes.headerItem}>
                <FontAwesomeIcon icon={faCar} />
                <span> car rentals</span>
            </div>
            <div className={classes.headerItem}>
                <FontAwesomeIcon icon={faTaxi} />
                <span> taxi</span>
            </div>
        </div>  
    { props.type !== "list" && <>
           <h1> A life time of discounts? it's Genius.</h1>
            <p> Get rewarded for your travels unlock instant savings of 10% or more with a free Shersher booking account</p>
            <button className={classes.headerBtn} >SignIn/Register</button>
            <div className={classes.headerSearch}>
                <div className={classes.headerSearchItem}>
                    <FontAwesomeIcon className={classes.headerIcon} icon={faBed} />
                    <input type='text'
                    className={classes.headerSearchInput}
                    placeholder="wherea are u going"
                    onChange={(e)=>setDestination(e.target.value)}
                    />
                 </div>
                <div className={classes.headerSearchItem}>
                    <FontAwesomeIcon className={classes.headerIcon} icon={faCalendarDays} />
                    <span className={classes.headerSearchText} onClick={()=>setOpenDate(!openDate)} > {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}
                        className={classes.dateRange}
                        />}
        {openDate && <BackDrop OnclickBackDrop = {close} />}

                 </div>
                <div className={classes.headerSearchItem}>
                 <div className={openDate?classes.placeholder:''}>
                    <FontAwesomeIcon className={classes.headerIcon} icon={faBed} />
                    <span className={classes.headerSearchText} onClick={()=>setOpenOption(!openOption)} > {`${option.adult} . adult ${option.children} . children ${option.room} bed-room `}</span>
                 </div>
                    {openOption && 
                    
                    <div className={classes.options}>
                    <div className={classes.optionItem}>
                            <span className={classes.optionText}>Adult</span>
                        <div className={classes.optionContainer}> 
                            <button className={classes.optionCounterBtn }
                             onClick={()=> optionHandler("adult","-")}
                             disabled={option.adult<=0}
                             >
                                -</button>
                            <span className={classes.optionText}>{option.adult}</span>
                            <button className={classes.optionCounterBtn } 
                             disabled={option.adult>6}
                             onClick={()=> optionHandler("adult","+")}>+</button>
                        </div>
                    </div>
                    <div className={classes.optionItem}>
                            <span className={classes.optionText}>children</span>
                        <div className={classes.optionContainer}> 
                            <button className={classes.optionCounterBtn } 
                             disabled={option.children<=0}
                             onClick={()=> optionHandler("children","-")}>-</button>
                            <span className={classes.optionText}>{option.children}</span>
                            <button className={classes.optionCounterBtn }
                             disabled={option.children>6}
                             onClick={()=> optionHandler("children","+")}>+</button>
                        </div>
                    </div>
                    <div className={classes.optionItem}>
                            <span className={classes.optionText}>room</span>
                        <div className={classes.optionContainer}> 
                            <button className={classes.optionCounterBtn } 
                             disabled={option.room<=0}
                             onClick={()=> optionHandler("room","-")}>-</button>
                            <span className={classes.optionText}>{option.room}</span>
                            <button className={classes.optionCounterBtn } 
                            disabled={option.room>3}
                            onClick={()=> optionHandler("room","+")}>+</button>
                        </div>
                    </div>

                    </div>
                    }
                    {openOption && <BackDrop OnclickBackDrop = {close} />}
                   {/* { openOption &&  <Modal   OnclickBackDrop ={close} />} */}

                 </div>
                    <button className={classes.headerBtn} 
                            onClick={DestinationHandler}>Search</button>
            </div>
        </>
        }
        </div>
    </div>

  )
}

export default Header