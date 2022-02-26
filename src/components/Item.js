import React, { useState } from "react";

function Item({ name, category }) {
  // console.log(category);
  const [isInCart, setIsInCart] = useState (false)

  function handleCart(){
    setIsInCart((isInCart) => ! isInCart);
  }
  const addToCart = isInCart? <li className="in-cart"></li> : <li className=""></li> 


  return ( 
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "add" : "remove"} onClick={handleCart}>{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
      <addToCart />
    </li>
  );
}

export default Item;
