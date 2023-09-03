import React from "react"
import ExpenseList from "./components/ExpenseList"
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";



function App() {
  const [selectedCategory,setSelectedCategory] = useState('');
 
  const [expenses, setExpenses] = useState([
    {
      id: 1, 
      description: "aaa",
      amount: 10,
      category: 'utilities'
    },
    {
      id: 2, 
      description: "bbb",
      amount: 30,
      category: 'repair'
    },
    {
      id: 3, 
      description: "ccc",
      amount: 50,
      category: 'transportation'
    },
  ]);
  
  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;

  const handleFormSubmit = (expense) => {
    // Update the expenses state with the new expense
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };


  return (
    <div>
      <ExpenseForm handleFormSubmit={handleFormSubmit}/>
      <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      <ExpenseList expenses={visibleExpenses} onDelete={(id)=> setExpenses(expenses.filter((e)=> e.id != id))}/>
    </div>
  )
}

export default App
