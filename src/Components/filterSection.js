import { NavLink } from "react-router-dom";
import Polo from "../Image/polo-tshirts.png";
import Hoodie from "../Image/hoodie-tshirts.png";
import Round from "../Image/round-neck-tshirts.png";
import "./filterSection.css";

const FilterSection = (props) => {
  return (
    <>
      <div className="container">
        <div className="row pb-4" style={{ textAlign: "center" }}>
          <div className="col-4">
            <NavLink
              to={{ pathname: "/filtereditem" }}
              state={{ data: props.data, name: "Polo" }}
            >
              <div className="card" style={{ background: "#f2f2f2" }}>
                <img
                  className="card-img-top img-fluid cardImg"
                  src={Polo}
                  alt="t-shirts"
                />
                <div className="card-body">
                  <p className="card-title text-dark text-bold">Polo</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-4">
            <NavLink
              to={{ pathname: "/filtereditem" }}
              state={{ data: props.data, name: "Hoodie" }}
            >
              <div className="card" style={{ background: "#f2f2f2" }}>
                <img
                  className="card-img-top img-fluid cardImg"
                  src={Hoodie}
                  alt="t-shits"
                />
                <div className="card-body">
                  <p className="card-title text-dark text-bold">Hoodie</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-4">
            <NavLink
              to={{ pathname: "/filtereditem" }}
              state={{ data: props.data, name: "Round" }}
            >
              <div className="card" style={{ background: "#f2f2f2" }}>
                <img
                  className="card-img-top img-fluid cardImg"
                  src={Round}
                  alt="t-shits"
                />
                <div className="card-body">
                  <p className="card-title text-dark text-bold">Round</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
