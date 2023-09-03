import React from 'react'

const ExpenseList = ({expenses, onDeleteExpense}) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          {expenses.map(expense=> <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button onClick={()=> onDeleteExpense(expense.id)}>Delete</button>
            </td>
          </tr>)}
            
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
    </table>
  )
}

export default ExpenseList