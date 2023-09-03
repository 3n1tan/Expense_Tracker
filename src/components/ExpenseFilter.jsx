import React from 'react'
import categories from '../categories'


const ExpenseFilter = ({onSelectCategory}) => {
  return (
    <select onChange={(e)=>onSelectCategory(e.target.value)}>
        <option value="">All categories</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}

    </select>
  )
}

export default ExpenseFilter