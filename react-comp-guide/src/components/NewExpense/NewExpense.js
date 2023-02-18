import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const showFormHandler = () => {
    setFormContent(
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />
    );
  };

  const buttonContent = (
    <button onClick={showFormHandler}>Add New Expense</button>
  );
  const [formContent, setFormContent] = useState(buttonContent);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setFormContent(buttonContent);
  };

  const cancelHandler = () => {
    setFormContent(buttonContent);
  };

  return <div className="new-expense">{formContent}</div>;
}
