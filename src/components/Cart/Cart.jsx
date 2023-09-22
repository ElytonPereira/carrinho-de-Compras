import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

function Cart() {

  const {cartItems, isCartVisible} = useContext(AppContext);
  const totalPreco = cartItems.reduce((acumulador, item) => item.price + acumulador, 0);

  return ( 
    <section className= {`cart ${isCartVisible ? "cart--active" : ""} `}>
      <div className="cartItems">
        {
          cartItems.map((cartItem) => <CartItem key={cartItem.id} data ={cartItem}/>)
        }

      </div>

      <div className="cartResume">
        Total: {formatCurrency(totalPreco, "BRL")}
      </div>

    </section>
  );
}

export default Cart;
