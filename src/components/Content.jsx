import React from "react";
import './styles/Content.css';
import logo_weather from '../img/fluent_weather-drizzle-48-filled.png';
import logo_weather2 from '../img/fluent_weather-hail-day-20-filled.png';
import logo_weather3 from '../img/fluent_weather-thunderstorm-24-filled.png';


export default function Content(){
    return(
        <div className="content-frame">
            <div className="header_on_frame">
                <h1 className="three_days">3 Day</h1>
                <h1 className="forecast">Forecast</h1>
            </div>

            <div className="weather_frame">                
                <div className="image_text">
                    <img src={logo_weather} alt="FirstPhoto" className="photo_image"></img>
                    <h1 className="text_weather">71°</h1>
                    <p class="day_text">Monday</p> 
                </div>
                <div className="image_text2">
                    <img src={logo_weather2} alt="secondPhotoOnTheScreen" className="photo_image2"></img>
                    <h1 className="text_weather">68°</h1>
                    <p class="day_text">Thursday</p> 
                </div>
                <div className="image_text3">
                    <img src={logo_weather3} alt="photothirdonscreen" className="photo_image3"></img>
                    <h1 className="text_weather">56°</h1>
                    <p class="day_text">Sunday</p> 
                </div>
            </div>
            <p className="aLotOfText">
                Bike park access is available via the shuttle service from The Village up to<br></br>
                Main Lodge daily (9AM-5:30PM), the Panorama Gondola (daily) to the summit<br></br>
                and Discovery (11) daily. Stump Alley Express (2) and Canyon<br></br>
                Express (16) operate on weekends (Fri-Sun). Bike rentals are available<br></br>
                at the Mountain Center in The Village and at Main Lodge. Please note<br></br>
                e-bikes are only available at the Mountain Center at this time. 
                </p>
        </div>
    );
}