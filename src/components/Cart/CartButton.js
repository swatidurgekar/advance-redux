import classes from "./CartButton.module.css";
import { cartActions } from "../Store/Cart";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(cartActions.show());
  };

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
