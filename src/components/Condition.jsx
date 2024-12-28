import React from "react";
import './styles/Condition.css';
import { TiWeatherCloudy } from "react-icons/ti";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

    const ChildComponent = () => {
        window.location.href = 'https://github.com/bottlin-rnbclub';
    }

export default function Condition() {
    return(
        <div className="container">
            <div className="today">
                <h1 className="text-today">
                    Today in<br/>
                    Beau Mountain
                </h1>
                <div className="textandcloud">
                    <p className="text-p-today">Condition</p>
                    <p className='text-weather-today' >Cloud sunny <TiWeatherCloudy className="cloud" /> </p>
                </div>
            </div>

            <div className="widget-hours-open">
                <div className="header-open">
                    Opening Hours
                </div>
                <div className="content">
                    <div className="time">
                        <span>Open Today</span>
                        <span className="PM">09:00 - 06:00 PM</span>
                        <div class="line"></div>
                    </div>
                    <div className="see-schedule">
                        <span onClick={ChildComponent}>See all schedule <HiOutlineArrowLongRight className="HiOutlineArrowLongRight" /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}