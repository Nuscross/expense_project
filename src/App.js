import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 294,
    date: new Date(2023, 1, 5),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 304,
    date: new Date(2023, 2, 10),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 314,
    date: new Date(2023, 3, 15),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 324,
    date: new Date(2023, 4, 20),
  },
];

function App() {
  const [expenses, setListExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log("In App.js");
    console.log(expense);
    setListExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
