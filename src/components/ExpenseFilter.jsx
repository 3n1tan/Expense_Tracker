import React from 'react'

const ExpenseFilter = ({onSelectCategory}) => {
  return (
    <select onChange={(e)=>onSelectCategory(e.target.value)}>
        <option value="">All categories</option>
        <option value="transportation">Transportation</option>
        <option value="utilities">Utilities</option>
        <option value="repairs">Repairs</option>
    </select>
  )
}

export default ExpenseFilter