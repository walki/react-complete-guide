import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {

  const [filterYear, setFilterYear] = useState('2025');

  const filterYearChangeHandler = (year) => {

    setFilterYear(year);

    console.log(filterYear);
  }

  return (
    <div>
      <ExpensesFilter onYearChange={filterYearChangeHandler}>Year: {filterYear}</ExpensesFilter>
      <Card className="expenses">
        {props.items.map((exp) => (
          <ExpenseItem title={exp.title} date={exp.date} amount={exp.amount} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
