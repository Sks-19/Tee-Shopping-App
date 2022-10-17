import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { BsStarFill, BsStarHalf, BsStar, BsCart2 } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import IncDecItems from "./incDecItems";
import CartNav from "./CartNav";
import { cartActions } from "../Store/cart-data";

const CartData = () => {
  const dispatch = useDispatch();
  let total = 0;
  let totalCount = 0;
  const cartItems = useSelector((state) => state.cart.itemsList);

  cartItems.forEach((item) => {
    total += item.totalPrice;
    totalCount += item.quantity;
  });

  const handleOrder = () => {
    dispatch(cartActions.removeAllFromCart());
  };

  return (
    <>
      <CartNav />
      {total === 0 ? (
        <>
          <div className="text-center">
            <BsCart2 style={{ fontSize: "10rem", color: "gray" }} />
            <h1 className="text-dark p-4">Your cart is empty!</h1>
            <hr />
          </div>
        </>
      ) : (
        <>
          {cartItems?.map((item) => {
            return (
              <>
                <div className="container">
                  <div
                    className="card my-3 mx-2"
                    style={{ background: "#f2f2f2" }}
                  >
                    <div className="row">
                      <div className="col-4">
                        <img
                          className="card-img img-fluid"
                          src={item.image}
                          alt="tshirts"
                        />
                        <div
                          className="py-2"
                          style={{ alignItems: "center", float: "right" }}
                        >
                          <IncDecItems
                            id={item?.id}
                            quantity={item?.quantity}
                            image={item?.image}
                            name={item?.name}
                            price={item?.price}
                          />
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="card-body">
                          <h5
                            className="card-title"
                            style={{ marginBottom: "-3%" }}
                          >
                            {item.name}
                          </h5>
                          <div>
                            <BsStarFill className="star" />
                            <BsStarFill className="star" />
                            <BsStarFill className="star" />
                            <BsStarHalf className="star" />
                            <BsStar className="star" />
                            <p className="text-muted mb-3">
                              {Math.trunc(Math.random() * 900) + 100}
                              &nbsp;ratings
                            </p>
                          </div>
                          <h4
                            className="card-text text-dark"
                            style={{ fontSize: "1.2rem" }}
                          >
                            <del className="text-secondary">1499</del>
                            <BiRupee
                              style={{ fontSize: "1.3rem", marginRight: "-3%" }}
                            />
                            {item?.price}
                            <span className="px-2 text-success">
                              {Math.trunc(((1499 - item?.price) / 1499) * 100)}%
                              off
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="row px-3">
                      <p className="text-dark" style={{ fontSize: ".8rem" }}>
                        Delivery by next 5 days
                        <span className="text-dark"> |</span>
                        <span className="text-success"> FREE Delivery</span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </>
      )}
      <div className="my-4">
        <p className="mx-2">Your list end here.</p>
      </div>
      <div className="row py-3 bg-primary fixed-bottom">
        {total === 0 ? (
          <></>
        ) : (
          <div className="col px-3">
            <h5>
              Total: <del className="text-secondary">{totalCount * 1499}</del>
              &nbsp;{total}
            </h5>
          </div>
        )}

        {total === 0 ? (
          <div className="col px-4">
            <NavLink
              to="/orderplaced"
              className="btn btn-danger disabled"
              style={{ float: "right" }}
            >
              Place Order
            </NavLink>
          </div>
        ) : (
          <div className="col px-4">
            <NavLink
              to="/orderplaced"
              className="btn btn-danger"
              style={{ float: "right" }}
              onClick={handleOrder}
            >
              Place Order
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default CartData;
