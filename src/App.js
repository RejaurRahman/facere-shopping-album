import React, { useState } from 'react';
import NewShoppingItem from './components/NewShoppingItem/NewShoppingItem';
import ShoppingBoard from './components/Shopping/ShoppingBoard/ShoppingBoard';
import Background from './components/UI/Background/Background';
import ShoppingCounter from './components/Shopping/ShoppingCounter/ShoppingCounter';

import './App.css';
import './styles/fonts.css'

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const [filteredCategory, setFilteredCategory] = useState('All');

  const [isExpenseAdded, setIsExpenseAdded] = useState(false);

  const addShoppingHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    }, [expenses])

    setIsExpenseAdded(true);
  };

  const filterItems = (currentCategory) => {
    setFilteredCategory(currentCategory);
  }

  const deleteShoppingHandler = (id) => {
    const shoppingList = expenses.filter((item) => {
      return item.id !== id;
    })

    if (shoppingList.length === 0) {	
      setIsExpenseAdded(false);	
    }

    setExpenses(shoppingList);
  }

  const completeShoppingHandler = (id) => {
    const newExpenseList = [...expenses];

    newExpenseList.map((item) => {
      if (item.id === id) {
        item['isCompleted'] = !item['isCompleted'];

        return item;
      }

      return item;
    })

    setExpenses(newExpenseList);
  }

  return (
    <>
      <Background />
      <div className="app">
        <div className="app__container">
          <NewShoppingItem 
            onFilterValueChange={filterItems} 
            onAddShopping={addShoppingHandler} 
            isExpenseAdded={isExpenseAdded} 
          />
          <ShoppingBoard 
            onCompleteShopping={completeShoppingHandler} 
            onDeleteShopping={deleteShoppingHandler} 
            items={expenses} 
            currentCategory={filteredCategory} 
          />
          <ShoppingCounter
            items={
              filteredCategory === "All"
                ? expenses
                : expenses.filter((item) => item.category === filteredCategory)
            }
          />
        </div>
      </div>
    </>
  );
};

export default App;
