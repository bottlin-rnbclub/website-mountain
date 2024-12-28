import React from "react";
import './styles/Main.css';
import myImage from '../img/Image.png';
import RightImage from '../img/Group 5.png';
import { GoArrowRight } from "react-icons/go";
import { BsArrowRightSquareFill } from "react-icons/bs";

export default function Main({}) {
      const ChildComponent = () => {
        window.location.href = 'https://github.com/bottlin-rnbclub';
      }

    return(
        <div className="Main">
            <div className="text-main-frame">
                <h1 className="h1">THE BEAUTY OF</h1>
                <h2 className="h2">BEAU MOUNTAIN</h2>
            </div>

            <div className="main-frame">
                <div className="widget">
                    <div className="image-container" style={{ backgroundImage: `url(${myImage})` }}>
                        <p className="clickable-text" onClick={ChildComponent}>
                            See Video <GoArrowRight />
                        </p>
                        <p className="just-text">
                            Our Facilities
                        </p>
                    </div>
                    <div className="text-container">
                        <h1 className="text-h1">Look deep into Beau</h1>
                        <p className="text-p1">The beautiful mountain view</p>
                        <p className="text-p2">A mountain is a part of the earth's crust that is higher<br />
                            than the area around it. Mountains usually have steep<br />
                            sides that significantly expose the bedrock.</p>
                    </div>
                </div>

                <div className="widget-right" style={{marginTop: '100', backgroundImage: `url(${RightImage})` }}>
                    <div className="image-container-right">

                        <img className="RightImage" src={RightImage} alt="Image2" />

                        <div className="text-overlay">
                            <p className="clickable-text-right" onClick={ChildComponent}>
                                Our Blog <BsArrowRightSquareFill />
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );  
};