import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import "./header.scss"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as locales from 'react-date-range/dist/locale';
//用它來叫出不同版本的語言翻譯，把日曆換成中文
import { DateRange } from 'react-date-range';
import format from 'date-fns/format'

const Header = () => {
  const [destination, setDestination] = useState("");
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ])
  return (
    <div className='header'>
      <div className="headerContainer">
        <h1 className="headerTitle">
          Find the next hotel.
        </h1>
        <p className="headerDes">
          Find hotel, room, and more...
          <br/>Booking.com clone challenge
        </p>
        <div className="headerSearchBar">
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faBed} />
            <input type="Search" placeholder='你要去哪裡？' className='SearchInput' />
          </div>
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faCalendar} onClick={()=>setOpenCalendar(!openCalendar)}/>
            <span className="SearchText" 
              onClick={() => setOpenCalendar(!openCalendar)}
            >
              {format(dates[0].startDate, "MM/dd/yyyy")} - {format(dates[0].endDate, "MM/dd/yyyy")}
            </span>
            {openCalendar && <DateRange 
            editableDateInputs={true}
            onChange={item=>setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            className="calendar"
            ranges={dates}
            minDate={new Date()}
            locale={locales['zhTW']}
            />}
          </div>
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <span className="SearchText"  >3位成人 · 2 位小孩 · 1 間房</span>
            <div className="ConditionsContainer">
              <div className="condition">
                adult
                <div className="conditionCounter">
                  <button className="conditionCounterButton">
                    -
                  </button>
                  <span className="number">1</span>
                  <button className="conditionCounterButton">
                    +
                  </button>
                </div>
              </div>

            </div>
            <div className="ConditionsContainer">
              <div className="condition">
                Children
                <div className="conditionCounter">
                  <button className="conditionCounterButton">
                    -
                  </button>
                  <span className="number">0</span>
                  <button className="conditionCounterButton">
                    +
                  </button>
                </div>
              </div>

            </div>
            <div className="ConditionsContainer">
              <div className="condition">
                Room
                <div className="conditionCounter">
                  <button className="conditionCounterButton">
                    -
                  </button>
                  <span className="number">1</span>
                  <button className="conditionCounterButton">
                    +
                  </button>
                </div>
              </div>

            </div>
          </div>
          <button className='SearchBarBtn' >搜尋</button>
        </div>
      </div>
    </div>
  )
}

export default Header
