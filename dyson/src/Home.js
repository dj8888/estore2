import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__banner" alt="" src="https://knowprepinsite.000webhostapp.com/resources/banner2.jpg" />
        {/* <img className="home__banner" src="https://knowprepinsite.000webhostapp.com/resources/banner5.jpg" /> */}
        {/* <img className="home__banner" alt="" src="https://knowprepinsite.000webhostapp.com/resources/banner6.jpg" /> */}

        <div className="home__row">
          <Product
            id="12321341"
            title="Dettol Instant Hand Sanitizer Bottle  (0.5 L)"
            price={250}
            image="https://knowprepinsite.000webhostapp.com/resources/Product1_img1.jpeg"
          />
          <Product
            id="49538094"
            title="NEA Ultra Shield N95 FFP2 Protective Face Mask With Headloop FFP2 N95 HEADLOOP Water Resistant, Reusable, Washable  (Multicolor, Free Size, Pack of 5)"
            price={259}
            image="https://knowprepinsite.000webhostapp.com/resources/Product2_img1.jpeg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Microsidd Nitrile Nitrile Examination Gloves  (Pack of 10)"
            price={104}
            image="https://knowprepinsite.000webhostapp.com/resources/Product4_img1.jpeg"
          />
          <Product
            id="23445930"
            title="Savlon Surface Disinfectant Spray  (340 g)"
            price={258}
            image="https://knowprepinsite.000webhostapp.com/resources/Product5_img2.jpeg"
          />
          <Product
            id="3254354345"
            title="TeeBuddy 4545 FaceGuard Face Shield Safety Mask Polypropylene(PP) Neutral Color (Pack of 2) Safety Visor  (Size - 33)"
            price={55}
            image="https://knowprepinsite.000webhostapp.com/resources/Product6_img6.jpeg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Dabur Double Immunity Chyawanprash  (1 kg)"
            price={358}
            image="https://knowprepinsite.000webhostapp.com/resources/Product7_img1.jpeg"
          />
          <Product
            id="80839345"
            title="Dettol Skincare Hand Wash Pump Dispenser  (0.25 L)"
            price={99}
            image="https://knowprepinsite.000webhostapp.com/resources/Product3_img2.jpeg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;