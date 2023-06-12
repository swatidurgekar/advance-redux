import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { useState } from "react";
import { cartActions } from "./components/Store/Cart";
import { sendCartData } from "./components/Store/Cart";
import { fetchData } from "./components/Store/Cart";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const useNotification = useSelector((state) => state.ui.notification);
  const [initialCart] = useState(cart);

  useEffect(() => {
    if (initialCart !== cart) {
      dispatch(sendCartData(cart));
    }
  }, [cart.items, dispatch]);

  useEffect(() => {
    dispatch(fetchData(cartActions.refreshCart));
  }, [dispatch]);

  return (
    <Layout>
      {useNotification && (
        <Notification
          status={useNotification.status}
          title={useNotification.title}
          message={useNotification.message}
        />
      )}
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
