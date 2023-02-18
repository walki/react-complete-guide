import { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");

  const filterYearChangeHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.items.filter((exp) =>
    filterYear === "All" ? true : exp.date.getFullYear() == filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onYearChange={filterYearChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
