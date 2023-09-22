import React, { useContext } from "react";
import {BsCartDash} from "react-icons/bs";
import "./CartItem.css";
import formatCurrency from "../../utils/formatCurrency";
import propTypes from "prop-types";
import AppContext from "../../context/AppContext";

function CartItem({data}) {

  const { thumbnail, title, price} = data;

  const {cartItems, setCartItems} = useContext(AppContext);
  const handleRemoveItem =() =>{

    
    const updateItems = cartItems.filter((item) => data[item.id] !== item.id);
    setCartItems(updateItems);
  };

  return ( <section className="cartItem">
    <img 
      src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
      alt="imagem do produto" 
      className="cartItemImg"/>

    <div className="cartItemContent">
      <h3 className="cartItemNome">{title}</h3>
      <h3 className="cartItemPreco">{formatCurrency(price, "BRL")}</h3>

      <button 
        type="button"
        className="buttonRemoveItem"
        onClick={handleRemoveItem}
      ><BsCartDash/></button>
    </div>  
  </section>  );
}

export default CartItem;

CartItem.propTypes ={
  data: propTypes.object
}.isRequired;
