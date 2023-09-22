import React, { useContext } from "react";
import "./ProductCard.css";
import {BsFillCartPlusFill} from "react-icons/bs";
import propTypes from "prop-types";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

function ProductCard({ data }) {

  const {title, thumbnail, price} =data;
  const {cartItems, setCartItems} =useContext(AppContext);
  
  const handleAddCart=() =>{
    //...cartItems essa funcao é como se fosse uma incrementacao
    setCartItems([...cartItems, data]); 
  };
  
  return (
    <section className="productCard">
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} 
        alt="produto" 
        className="cardImage" />
      <div className="cardInfos">
        <h2 className="cardPreco">{formatCurrency(price, "BRL")}</h2>
        <h2 className="cardName">{title}</h2>
      </div>
      <butto 
        type = "button" 
        onClick ={handleAddCart}
        className = "buttonAdd"><BsFillCartPlusFill/>
      </butto>
    </section>

  );
}

export default ProductCard;

ProductCard.propTypes={
  data: propTypes.shape({}),
}.isRequired;
