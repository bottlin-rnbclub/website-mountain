import React from "react";
import '../components/styles/Events.css';
import styled from 'styled-components';
import { HiOutlineArrowRight } from "react-icons/hi";
import mapIcon from '../img/Map.png';
import WeatherIcon from '../img/Ic_weather.png';
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";

const ChildComponent = () => {
    window.location.href = 'https://github.com/bottlin-rnbclub';
}

const BlurredContainer = styled.div`
    display: flex;
    margin-top: 390px;
    width: 200px;
    height: 40px;
    background-color: transparent;
    border: 1.2px solid rgba(255, 255, 255, 0.5);
    border-top: 1.2px solid rgba(255, 255, 255, 0.9);
    border-bottom: 1.2px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    padding: 20px;
    backdrop-filter: blur(5px); 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;


export default function Events() {
    return(
        <div className="events">
        <Container className="wid-get-left">
            <BlurredContainer onClick={ChildComponent}>
                <img className="ImageIcon" src={mapIcon} />
                    <p className="text_in_widget">
                        Beuau<br></br>
                        Mountain
                    </p>
                    <HiOutlineArrowRight className="IconReact" />
            </BlurredContainer>
            
            <div className="wid-get-line-centre">
                <p className="Sunday">
                    Sunday - June 15, 2024
                </p>
                <div className="Time_frame">
                    <p className="AM">09:40AM</p>
                    <div><img src={WeatherIcon}/>68°</div>
                </div>
                <div className="line"></div>
                <div className="Distance">
                    <p>Distance</p>
                    <p className="big_size-text">2,8 KM</p>
                </div>
                <div className="line"></div>
                <div className="Height">
                    <p>Height</p>
                    <p className="big_size-text">2,400 MDPL</p>
                </div>
            </div>
            <div className="about-text-on-frame">
                <p className="about">About</p>
                <h1 className="h1_frame_events">Beuau Mountain</h1>
                <p className="ease_text">
                    Bike park access is available via the shuttle service from<br></br>
                    The Village up to Main Lodge daily (9AM-5:30PM), the<br></br>
                    Panorama Gondola (daily) to the summit and Discovery<br></br>
                    (11) daily. Stump Alley Express (2) and Canyon Express (16)<br></br>
                    operate on weekends (Fri-Sun). Bike rentals are available<br></br>
                    at the Mountain Center in The Village and at Main Lodge.<br></br>
                    Please note e-bikes are only available at the Mountain<br></br>
                    Center at this time.
                </p>
                <div className="btn-click-blue" onClick={ChildComponent}><a>Learn More <HiOutlineChevronDoubleRight/></a> </div>
            </div>
        </Container>
        </div>
    );
};

 