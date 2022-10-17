import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Components/Home";
import ProductDetail from "./Components/ProductDetail";
import CartData from "./Components/CartData";
import FilteredCard from "./Components/FilteredCard";
import OrderPlaced from "./Components/orderPlaced";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  let shoppingUser = [];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const apiData = async () => {
      let reqData = await fetch(
        `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
      );
      let resData = await reqData.json();
      setData(resData);
    };
    apiData();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("shoppingUser")) {
      localStorage.setItem("shoppingUser", JSON.stringify(shoppingUser));
    }
  }, []);

  return (
    <>
      <div className="mt-4 justify-content-center showBody">
        <Routes>
          {isLoggedIn ? (
            <Route path="/" element={<Home data={data} />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
          <Route path="/productdetails" element={<ProductDetail />} />
          <Route path="/cart" element={<CartData />} />
          <Route path="/filtereditem" element={<FilteredCard />} />
          <Route path="/orderplaced" element={<OrderPlaced />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
