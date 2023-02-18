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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onYearChange={filterYearChangeHandler}
        >
          Year: {filterYear}
        </ExpensesFilter>

        {props.items
          .filter((exp) => filterYear ==='All' ? true: exp.date.getFullYear() == filterYear)
          .map((exp) => (
            <ExpenseItem
              key={exp.id}
              title={exp.title}
              date={exp.date}
              amount={exp.amount}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
