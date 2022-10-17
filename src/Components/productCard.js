import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiRupee } from "react-icons/bi";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "./productCard.css";

const productCard = (props) => {
  return (
    <>
      <NavLink
        to={{ pathname: "/productdetails" }}
        state={{
          id: props.id,
          image: props.image,
          name: props.name,
          type: props.type,
          price: props.price,
          currency: props.currency,
          color: props.color,
          gender: props.gender,
          quantity: props.quantity,
        }}
      >
        <div className="cards pe-4 pb-3">
          <div className="card productCard" style={{ background: "#f2f2f2" }}>
            <img
              src={props.image}
              className="card-img-top img-fluid cardImage"
              alt=""
            />

            <div className="card-body">
              <p
                className="card-title text-bold text-dark"
                style={{ fontSize: ".9rem", marginTop: "-5%" }}
              >
                {props.name}
              </p>
              <div style={{ fontSize: ".7rem", marginTop: "-6%" }}>
                <BsStarFill className="star" />
                <BsStarFill className="star" />
                <BsStarFill className="star" />
                <BsStarHalf className="star" />
                <BsStar className="star" />
              </div>
              <p
                className="card-text text-success"
                style={{ fontSize: ".9rem" }}
              >
                <BiRupee />
                {props.price}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default productCard;
