import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import firebase from "firebase";
import { getBasketTotal } from './reducer';
// import { firebaseConfig } from "./firebase";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

function Payment() {

    const config = {
        apiKey: "AIzaSyByld8mwr-AXU9g-4Jm-Nt1DCBeoJWQc4U",
        authDomain: "dyson-4a3bd.firebaseapp.com",
        databaseURL: "https://dyson-4a3bd.firebaseio.com",
        projectId: "dyson-4a3bd",
        storageBucket: "dyson-4a3bd.appspot.com",
        messagingSenderId: "136347244640",
        appId: "1:136347244640:web:5b76f72f710b8f15dfcb05",
        measurementId: "G-DMZBY99ZFM"
    };

    const history = useHistory();
    const[{basket, user}, dispatch] = useStateValue();

    const handleSubmit = e => {
        // //grab a form
        const form = e.target;
        // //grab an input
        const orderEmail = form.querySelector('#orderEmail');
        const orderName = form.querySelector('#orderName');
        const orderAddress1 = form.querySelector('#orderAddress1');
        const orderAddress2 = form.querySelector('#orderAddress2');
        const orderContact = form.querySelector('#orderContact');
        
        //create a functions to push
        function firebasePush(email,name,address1,address2,contact) {


            //prevents from braking
            if (!firebase.apps.length) {
                firebase.initializeApp(config);
            }

            //push itself
            var mailsRef = firebase.database().ref('orders').push().set(
                {
                    mail: email.value,
                    name: name.value,
                    address1: address1.value,
                    address2: address2.value,
                    contact: contact.value,
                    basket: basket,
                    value: getBasketTotal(basket)

                }
            );

        
        }

        //push on form submit
        e.preventDefault();
        firebasePush(orderEmail,orderName,orderAddress1,orderAddress2,orderContact);
    
        // console.log(orderEmail);
        //shows alert if everything went well.
        return history.push('/congrats');


    }

    return (
        <div className='payment'>
            <div className='payment__container'>

                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link> 
                    )
                </h1>
                
                {/* <div className='payment__section'>
                    <div className='section__title'>Delivery Address</div>
                    <div className='payment__address'></div>
                </div> */}


                <div className='payment__page'>
                    <div className='payment__details'>
                        <div className='details__container'>
                            <h3>Enter Delivery Details:</h3>
                            <form className="order__form" onSubmit={handleSubmit}>
                                <h5>Email:</h5>
                                <input type="email" id="orderEmail" placeholder="Enter E-mail Address" value={!user ? "" : user.email}/>

                                <h5>Full Name:</h5>
                                <input type="text" id="orderName" placeholder="John Wick"/>

                                <h5>Address:</h5>
                                <input type="text" id="orderAddress1" placeholder="House/Flat No. & Location" />
                                <input type="text" id="orderAddress2" placeholder="Pincode & City" />

                                <h5>Contact No:</h5>
                                <input type="tel" id="orderContact" placeholder="+91-76777XXXXX" />

                                <button type="submit" className="order__confirmation">Confirm Order!</button>

                            </form>
                        </div>
                    </div>

                <div className='payment__items'>
                    <h3>Review Items:</h3>
                    <CurrencyFormat renderText={(value) => (
                        <>
                            <p>
                            {/* Part of the homework */}
                            Subtotal: <strong>{value}</strong>
                            </p>
                            {/* <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                            </small> */}
                        </>
                        )}
                        decimalScale={0}
                        value={getBasketTotal(basket)} // Part of the homework
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                    />
                    {basket.map(item=>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                        ))}
                </div>
                </div>

            </div>
        </div>
        
    )

        
}

export default Payment;