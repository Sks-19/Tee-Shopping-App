import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slideShow.css";
import Polo from "../Image/polo.jpg";
import Round from "../Image/round.jpg";
import Hoodie from "../Image/Hoodie.jpg";
import Hoodie2 from "../Image/Hoodie2.jpg";

const SlideShow = () => {
  return (
    <>
      <div className="slide-container">
        <Fade>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${Hoodie})`,
              }}
            >
              <span>Hoodie T-Shirts</span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${Round})`,
              }}
            >
              <span>Round Neck T-Shirts</span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${Hoodie2})`,
              }}
            >
              <span>Hoodie T-Shirts</span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{
                backgroundImage: `url(${Polo})`,
              }}
            >
              <span>Polo T-Shirts</span>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default SlideShow;
