import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Layout = () => {
  const dispatch = useDispatch();
  let total = 100;

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
          <button className="orderBtn" onClick={logoutHandler}>
            Log out
          </button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
