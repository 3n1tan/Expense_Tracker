import React from 'react'
import categories from '../categories';
import {z} from 'zod'
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod' 

const schema = z.object({
    description: z.string().min(3, {message: 'Description should be at least'}).max(50),
    amount: z.number({invalid_type_error: 'Amount is required'}).min(0.01).max(100_000),
    category: z.enum(categories, {
        errorMap: () => ({message: 'Category is required'})
    })
});


const ExpenseForm = ({handleFormSubmit}) => {
    const {register, handleSubmit, reset, formState: {errors} } = useForm({ resolver: zodResolver(schema)});

  return (
    <form action="" onSubmit={handleSubmit(data=> {
        handleFormSubmit(data);
        reset();
    })}>
        <div>
            <label htmlFor="description">Description</label>
            <input {...register('description')} type="text" id='description' />
            {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div>
            <label htmlFor="amount">Amount</label>
            <input {...register('amount', {valueAsNumber: true})} type="number" id='amount' />
            {errors.amount && <p>{errors.description.message}</p>}
        </div>
        <div>
            <label htmlFor="category">Category</label>
            <select {...register('category')} id="category">
                <option value=""></option>
                {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>
            {errors.category && <p>{errors.description.message}</p>}
        </div>
        <button>Submit</button>
    </form>
  )
}

export default ExpenseForm