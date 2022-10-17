import { NavLink } from "react-router-dom";
import Celebration from "../Image/Celebration.png";
import "./orderPlaced.css";

const OrderPlaced = () => {
  return (
    <>
      <div className="card orderClass">
        <img src={Celebration} alt="success" width="200rem" />
        <div className="card-body">
          <h1 className="card-title p-2">Order Placed Successfully</h1>
          <p className="card-text">
            You will recieve your order in next 5 working days.
          </p>
          <NavLink to="/" className="btn btn-outline-info m-3">
            Explore more items
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default OrderPlaced;
