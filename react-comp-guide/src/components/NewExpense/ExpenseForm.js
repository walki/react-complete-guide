import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: "0.00",
    date: "2019-01-01",
  });

  const changeHandler = (event) => {

    let newData = { ...expenseData };

    if (event.target.id === "expense-title") {
      newData.title = event.target.value;
    } else if (event.target.id === "expense-amount") {
      newData.amount = event.target.value;
    } else if (event.target.id === "expense-date") {
      newData.date = event.target.value;
    }

    setExpenseData(newData);
    
    console.log(newData);
  };

  return (
    <>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" id="expense-title" onChange={changeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              id="expense-amount"
              min="0.01"
              step="0.01"
              onChange={changeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              id="expense-date"
              min="2019-01-01"
              max="2025-12-31"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
}
