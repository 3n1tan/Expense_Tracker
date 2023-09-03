import React from "react"
import ExpenseList from "./components/ExpenseList"

function App() {
  const expenses = [
    {
      id: 1, 
      description: "aaa",
      amount: 10,
      category: 'transport'
    },
    {
      id: 2, 
      description: "bbb",
      amount: 30,
      category: 'transport'
    },
    {
      id: 3, 
      description: "ccc",
      amount: 50,
      category: 'transport'
    },
  ]

  return (
    <div>
      <p className="text-red-400">App will be lookse</p>
      App will be here
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default App
