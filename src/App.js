import React, { useState } from 'react';
import NewShoppingItem from './components/NewShoppingItem/NewShoppingItem';
import ShoppingBoard from './components/Shopping/ShoppingBoard/ShoppingBoard';
import Background from './components/UI/Background/Background';

import './App.css';
import './styles/fonts.css'

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addShoppingHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    }, [expenses])
  };

  const deleteShoppingHandler = (id) => {
    const shoppingList = expenses.filter((item) => {
      return item.id !== id;
    })
    setExpenses(shoppingList);
  }

  return (
    <>
      <Background />
      <div className="app">
        <div className="app__container">
          <NewShoppingItem onAddShopping={addShoppingHandler} />
          <ShoppingBoard onDeleteShopping={deleteShoppingHandler} items={expenses} />
        </div>
      </div>
    </>
  );
};

export default App;
