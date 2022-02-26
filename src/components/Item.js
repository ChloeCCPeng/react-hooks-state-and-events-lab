import React, { useState } from "react";

function Item({ name, category }) {
  const [isCart, setIsCart] = useState ("")

  const addToCart = isCart? <li className="in-cart"></li> : <li className=""></li> 


  return ( 
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
