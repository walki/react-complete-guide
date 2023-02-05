import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((exp) => (
        <ExpenseItem title={exp.title} date={exp.date} amount={exp.amount} />
      ))}
    </div>
  );
}

export default Expenses;
