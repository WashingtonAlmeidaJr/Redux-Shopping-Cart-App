import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

function App() {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendRequest = async () => {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "sending request",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://redux-http-4f261-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();

      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Successfully",
          type: "success",
        })
      );
    };
    sendRequest().catch((err) => {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Failed",
          type: "error",
        })
      );
    });
  }, [cart]);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
