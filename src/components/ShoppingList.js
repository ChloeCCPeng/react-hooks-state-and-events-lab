import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleFilterChange(e){
    console.log(e);
    setSelectedCategory(e.target.value)
    // {filteredItems ? selectedCategory : "All"}
    console.log(selectedCategory)
  }
  // console.log(items);
  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") return true
    return item.category === selectedCategory
  })


    // (selectedCategory? "All" : filteredItems)
  // console.log(filteredItems);
    
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((filteredItem) => <Item key={filteredItem.id} name={filteredItem.name} category={filteredItem.category} />)}
      </ul>
    </div>
  );
}

export default ShoppingList;
