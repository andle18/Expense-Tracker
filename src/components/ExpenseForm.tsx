import { type ChangeEvent, useEffect, useState } from "react";
import type { DraftExpense, Value } from "../types";
import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hook/useBudget";


export default function ExpenseForm() {
    const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        expenseName: '',
        category: '',
        date: new Date()
    })
    const [error, setError] = useState('')
    const [previousAmount, setPreviousAmount] = useState(0)
  
    const { dispatch, state, remainingBudget} = useBudget()

    useEffect(() => {
        if(state.editingId) {
            const editingExpense = state.expenses.filter( currentExpense => currentExpense.id === state.editingId )[0]
            setExpense(editingExpense)
            setPreviousAmount(editingExpense.amount)
        }
    }, [state.editingId])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> ) => {
        const { name, value } = e.target
        const isAmountField = ['amount'].includes(name)
        setExpense({
            ...expense,
            [name] : isAmountField ? Number(value) : value
        })
    }

    const handleChangeDate = (value : Value) => {
        setExpense({
            ...expense,
            date: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


    // Validar
    if (Object.values(expense).includes("")) {
      setError("All fields are required");
      return;
    }

    //Validar que no me pase del limite
    if (expense.amount - previousAmount > remainingBudget) {
      setError("You've gone over budget!");
      return;
    }

    // Validar minimo
    if(expense.amount <= 0) {
      setError("You need to set a valid amount!");
      return;
    }

    // Agregar o actualizar el nuevo gasto
    if (state.editingId) {
      dispatch({
        type: "update-expense",
        payload: { expense: { id: state.editingId, ...expense } },
      });
    } else {
      dispatch({ type: "add-expense", payload: { expense } });
    }

    // Reiniciar el State
    setExpense({
      amount: 0,
      expenseName: "",
      category: "",
      date: new Date(),
    });
    setPreviousAmount(0);
  };

  return (
    <form className=" space-y-5" onSubmit={handleSubmit}>
      <legend className=" uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
        {state.editingId ? "Edit Expense" : "New Expense"}
      </legend>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className=" flex flex-col gap-2">
        <label htmlFor="expenseName" className=" text-xl">
          Expense Name:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Enter the name of the expense"
          className=" bg-slate-100 p-2"
          name="expenseName"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          {" "}
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Añade la cantaidad del gasto: ej. 300"
          className="bg-slate-100 p-2"
          name="amount"
          onChange={handleChange}
          value={expense.amount}
        />
      </div>
      Amount:
      <div className=" flex flex-col gap-2">
        <label htmlFor="category" className=" text-xl">
          Category:
        </label>
        <select
          id="category"
          className=" bg-slate-100 p-2"
          name="category"
          onChange={handleChange}
          value={expense.category}
        >
          <option value="">-- Select --</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="Amount" className=" text-xl">
          Date:
        </label>
       <DatePicker
  className=" bg-slate-100 p-2 border-0"
  value={expense.date instanceof Date ? expense.date : new Date()}
  onChange={handleChangeDate}
/>

      </div>
      <input
        type="submit"
        className=" bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={state.editingId ? "Update Expense" : "Add Expenses"}
      />
    </form>
  );
}
