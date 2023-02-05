import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((exp) => (
        <ExpenseItem title={exp.title} date={exp.date} amount={exp.amount} />
      ))}
    </Card>
  );
}

export default Expenses;
