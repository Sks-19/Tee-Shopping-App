import React from "react";
import Footer from "./Footer";
import Nav from "../Nav";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import "./filteredCard.css";

const FilteredCard = () => {
  const location = useLocation();
  const { state } = location;

  const filteredData = state.data?.filter((datas) => {
    if (datas?.name.toLowerCase().includes(state.name.toLowerCase())) {
      return datas;
    }
  });

  return (
    <>
      <Nav />
      {filteredData?.map((data) => {
        return (
          <>
            <NavLink
              to={{ pathname: "/productdetails" }}
              state={{
                id: data.id,
                image: data.imageURL,
                name: data.name,
                type: data.type,
                price: data.price,
                currency: data.currency,
                color: data.color,
                gender: data.gender,
                quantity: data.quantity,
              }}
            >
              <div className="cardss py-3 pe-4">
                <div
                  className="card filteredCard"
                  style={{ background: "#f2f2f2" }}
                >
                  <img
                    src={data.imageURL}
                    className="card-img-top img-fluid border-bottom border-secondary"
                    alt=""
                  />
                  <div className="card-body">
                    <p
                      className="card-title text-bold text-dark"
                      style={{ fontSize: ".9rem" }}
                    >
                      {data.name}
                    </p>
                    <div style={{ fontSize: ".7rem", marginTop: "-6%" }}>
                      <BsStarFill className="star" />
                      <BsStarFill className="star" />
                      <BsStarFill className="star" />
                      <BsStarHalf className="star" />
                      <BsStar className="star" />
                    </div>
                    <p
                      className="card-text text-dark text-bold"
                      style={{ fontSize: ".9rem" }}
                    >
                      <BiRupee />
                      {data.price}
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          </>
        );
      })}
      <div className="p-1">
        <p>Your list end here.</p>
      </div>
      <Footer />
    </>
  );
};

export default FilteredCard;
