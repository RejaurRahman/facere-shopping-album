import React from 'react';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

import './ShoppingList.css';

const ShoppingList = (props) => {
  if (props.items.length === 0) {	
    return <h2 className="shoppingListFallback">Found no shopping data.</h2>	
  }
  
  return (
    <ul className="shoppingList">
      {
        props.items.map((expense) => (
          <ShoppingItem
            key={expense.id}
            title={expense.title}
            category={expense.category}
          />
        ))
      }
    </ul>
  );
};

export default ShoppingList;
