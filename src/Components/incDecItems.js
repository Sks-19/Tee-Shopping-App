import { useDispatch } from "react-redux";
import { BiPlus, BiMinus } from "react-icons/bi";
import { cartActions } from "../Store/cart-data";

const IncDecItems = ({ id, name, image, price, quantity }) => {
  const dispatch = useDispatch();

  const incrementCartItems = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        image,
        price,
      })
    );
  };

  const decrementCartItems = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <>
      <div className="d-flex">
        <button
          className="btn btn-sm"
          style={{
            border: "1px solid gray",
            borderRadius: "5px 0px 0px 5px",
          }}
          onClick={decrementCartItems}
        >
          <BiMinus />
        </button>
        <button
          className="btn btn-sm"
          style={{
            border: "1px solid gray",
            borderRadius: "0px 0px 0px 0px",
          }}
          disabled
        >
          {quantity}
        </button>
        <button
          className="btn btn-sm"
          style={{
            border: "1px solid gray",
            borderRadius: "0px 5px 5px 0px",
          }}
          onClick={incrementCartItems}
        >
          <BiPlus />
        </button>
      </div>
    </>
  );
};

export default IncDecItems;
