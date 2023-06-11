import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/Cart";
import { useEffect, useState } from "react";
const ProductItem = (props) => {
  const { title, price, description } = props;
  const product = { title, price, description, quantity: 1, writable: true };
  const dispatch = useDispatch();
  const [arr, setArr] = useState([]);
  const items = useSelector((state) => state.cart.items);

  const addToCart = (item) => {
    const index = items.map((item) => item.title).indexOf(item.title);
    if (index >= 0) {
      dispatch(cartActions.addItem(index));
    } else {
      dispatch(cartActions.addToCart(item));
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
