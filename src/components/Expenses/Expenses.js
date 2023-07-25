import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2019");

  const filterEventHandler = (selectedYear) => {
    // console.log("In Expense.js");
    // console.log(selectedYear);
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={filterYear}
          onFilterChange={filterEventHandler}
        />
        <ExpenseList filteredItem={filteredExpenses} />
        {/* {filteredExpenses.length === 0 && <p>No expense found.</p>}
        {filteredExpenses.length > 0 &&
         filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      </Card>
    </div>
  );
}

export default Expenses;
