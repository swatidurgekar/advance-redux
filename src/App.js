import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { useState } from "react";
import { useRef } from "react";

function App() {
  const cart = useSelector((state) => state.cart);
  const [initialCart, setInitialCart] = useState(cart);
  const [notification, setNotification] = useState(false);
  const status = useRef();
  const title = useRef();
  const message = useRef();

  useEffect(() => {
    if (cart !== initialCart) {
      setNotification(true);
      fetch(
        "https://advanced-redux-5aa37-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      ).then((res) => {
        res.json().then(() => {
          if (res.ok) {
            status.current = "success";
            title.current = "success";
            message.current = "Sent cart data successfully";
            setNotification(false);
          } else {
            status.current = "error";
            title.current = "Failed";
            message.current = "Failed to send cart data";
            setNotification(false);
          }
        });
      });
    }
  }, [cart.items]);

  return (
    <Layout>
      {notification && (
        <Notification
          status={status.current}
          title={title.current}
          message={message.current}
        />
      )}
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
