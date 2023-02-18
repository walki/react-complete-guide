import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const changeHandler = (event) => {
    setExpenseData((prevData) => {
      let newData = { ...prevData };

      if (event.target.id === "expense-title") {
        newData.title = event.target.value;
      } else if (event.target.id === "expense-amount") {
        newData.amount = event.target.value;
      } else if (event.target.id === "expense-date") {
        newData.date = new Date(event.target.value);
      }
      
      return newData;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(expenseData);
    setExpenseData({
      title: "",
      amount: "",
      date: null,
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              id="expense-title"
              value={expenseData.title}
              onChange={changeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              id="expense-amount"
              min="0.01"
              step="0.01"
              value={expenseData.amount}
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
              value={expenseData.date}
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
