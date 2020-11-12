import React from 'react'
import "./congrats.css"
import { Link } from "react-router-dom";

function Congrats() {
    return (
        <div className="congrats">
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://knowprepinsite.000webhostapp.com/resources/dyson-logo-tbg-black.png'
                    alt="notime" 
                />
            </Link>

            <div className="success__message">
                <p>
                    Your Order has been Successfully Placed! Thank You for Shopping with Us.<br /><br />
                    Our Representativs will contact you soon to Complete the Payment.
                </p>

                <Link to='/'>
                    <p>Back to Homepage</p>
                </Link>
            </div>
        </div>
    )
}

export default Congrats
