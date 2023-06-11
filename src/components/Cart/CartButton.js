import classes from "./CartButton.module.css";
import { cartActions } from "../Store/Cart";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  let sum = 0;

  items.map((item) => {
    sum += item.quantity;
  });

  const showCartHandler = () => {
    dispatch(cartActions.show());
  };

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{sum}</span>
    </button>
  );
};

export default CartButton;
