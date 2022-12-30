import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import CartItems from "./CartItems";

const Layout = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.cart.itemsList);
  let total = 0;

  const showCart = useSelector((state) => state.cart.showCart);

  itemsList.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
