import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    showCart && (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          <CartItem
            item={{ title: "Test Item", quantity: 1, total: 18, price: 6 }}
          />
        </ul>
      </Card>
    )
  );
};

export default Cart;
