import classes from "./CartItem.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/Cart";

const CartItem = (props) => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    const index = items.indexOf(item);
    dispatch(cartActions.removeItem(index));
  };

  const addItem = (item) => {
    const index = items.indexOf(item);
    dispatch(cartActions.addItem(index));
  };

  return items.map((item) => {
    return (
      <li key={item.title} className={classes.item}>
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>
            ${props.item.total.toFixed(2)}{" "}
            <span className={classes.itemprice}>
              (${item.price.toFixed(2)}/item)
            </span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{item.quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={() => removeItem(item)}>-</button>
            <button onClick={() => addItem(item)}>+</button>
          </div>
        </div>
      </li>
    );
  });
};

export default CartItem;
