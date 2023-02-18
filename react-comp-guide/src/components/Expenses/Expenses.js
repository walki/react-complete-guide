import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");

  const filterYearChangeHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.items.filter((exp) =>
    filterYear === "All" ? true : exp.date.getFullYear() == filterYear
  );

  let expensesContent = <p className="expenses__none">No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((exp) => (
      <ExpenseItem
        key={exp.id}
        title={exp.title}
        date={exp.date}
        amount={exp.amount}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onYearChange={filterYearChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
