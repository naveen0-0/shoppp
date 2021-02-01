import React, { useState, useEffect } from 'react';
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';
import car4 from '../images/car4.jpg';
import car5 from '../images/car5.jpg';

export default function Hero() {


    useEffect(() => {
        let counter = 1;
        setInterval(function () {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 5) {
                counter = 1;
            }
        }, 3000)
    })




    return (
        <div className="imgslider">
            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1" />
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />
                    <input type="radio" name="radio-btn" id="radio4" />
                    <input type="radio" name="radio-btn" id="radio5" />

                    <div className="slide first">
                        <img src={car1} alt="Car1" />
                    </div>

                    <div className="slide">
                        <img src={car2} alt="Car2" />
                    </div>
                    <div className="slide">
                        <img src={car3} alt="Car3" />
                    </div>
                    <div className="slide">
                        <img src={car4} alt="Car4" />
                    </div>
                    <div className="slide">
                        <img src={car5} alt="Car5" />
                    </div>



                    {/*!Autumatic nav */}

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                        <div className="auto-btn5"></div>
                    </div>
                </div>

                <div className="navigation-manual">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                    <label htmlFor="radio4" className="manual-btn"></label>
                    <label htmlFor="radio5" className="manual-btn"></label>
                </div>
            </div>
        </div>
    )
}
