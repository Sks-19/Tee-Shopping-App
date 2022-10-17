import { useLocation, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiExchangeFill } from "react-icons/ri";
import "./ProductDetails.css";
import { cartActions } from "../Store/cart-data";
import Nav from "../Nav";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;

  //Random Ratings
  const randomRating = Math.trunc(Math.random(100, 1000) * 1000);

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        name: state.name,
        id: state.id,
        image: state.image,
        price: state.price,
      })
    );

    swal({
      title: "Item added to cart!",
      text: "Continue Shopping",
      icon: "success",
      button: "OK",
    });
  };
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row detailPage">
          <div className="col-lg-5 col-12">
            <img
              className="card-img-top img-fluid"
              src={state?.image}
              alt="product"
            />
          </div>
          <div className="col-lg-7 col-12">
            <div
              className="card"
              style={{ width: "100%", background: "#f2f2f2" }}
            >
              <div className="card-body">
                <h5 className="card-title">
                  {state?.name}
                  <span>
                    &nbsp;({state?.color}, {state?.gender})
                  </span>
                </h5>
                <div className="">
                  <div className="">
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarHalf className="star" />
                    <BsStar className="star" />

                    <p className="text-muted mb-3">{randomRating} Ratings</p>
                  </div>
                </div>
                <h4
                  className="card-text text-dark py-2 px-1"
                  style={{ fontSize: "1.6rem", background: "#b7ffbf" }}
                >
                  <p
                    className="text-success"
                    style={{ fontSize: ".9rem", marginBottom: "-2%" }}
                  >
                    Special price
                  </p>
                  <del className="text-secondary">1499</del>
                  <BiRupee style={{ fontSize: "1.6rem" }} />
                  {state?.price}
                  <span className="px-2 text-success">
                    {Math.trunc(((1499 - state?.price) / 1499) * 100)}% off
                  </span>
                </h4>
                <div className="row">
                  <div className="col-1">
                    <TbTruckDelivery
                      style={{ color: "yellow", fontSize: "1.5rem" }}
                    />
                  </div>
                  <div className="col-11">
                    <p>FREE Delivery</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card my-1" style={{ background: "#f2f2f2" }}>
              <div className="card-body">
                <p className="card-text">Deliver to: 800001</p>
                <p className="card-text text-secondary">Patna, Bihar, India</p>
              </div>
              <hr />
              <div className="card-body">
                <div className="row">
                  <div className="col-1">
                    <TbTruckDelivery style={{ color: "blue" }} />
                  </div>
                  <div className="col-11">
                    <p className="text-success">
                      FREE Delivery
                      <span className="text-dark">
                        {" "}
                        | Delivery in next 5 days
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <RiExchangeFill style={{ color: "blue" }} />
                  </div>
                  <div className="col-11">
                    <p className="card-text">15 Days Return</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card my-1 mb-4" style={{ background: "#f2f2f2" }}>
              <div className="card-body">
                <h5 className="card-title">Product Details</h5>
                <ul>
                  <li>Type: {state?.type}</li>
                  <li>Gender: {state?.gender}</li>
                  <li>Color: {state?.color}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-bottom">
        <button
          type="button"
          id="addtoCart"
          className="btn btn-light w-50"
          onClick={addToCart}
          style={{ borderRadius: "0px" }}
        >
          ADD TO CART
        </button>

        <NavLink
          to="/orderplaced"
          className="btn btn-warning w-50"
          style={{ borderRadius: "0px" }}
        >
          BUY NOW
        </NavLink>
      </div>
    </>
  );
};

export default ProductDetail;
