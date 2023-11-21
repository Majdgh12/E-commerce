import React from 'react';
import "./hero.css"
import hand_icon from "../Assests/hand_icon.png"
import arrow_icon from "../Assests/arrow.png"
import hero_img from "../Assests/hero_image.png"
const Hero = () => {
    return (

        <div className='hero'>
            <div className="hero-left">

                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <button className="hero-latest-btn">
                    <div className='latest'>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </button>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="" />

            </div>

        </div>

    );
}

export default Hero;
