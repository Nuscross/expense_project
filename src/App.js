import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "294.67",
      date: new Date(2023, 1, 5)
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: "304.67",
      date: new Date(2023, 2, 10)
    },
    {
      id: "e3",
      title: "New TV",
      amount: "314.67",
      date: new Date(2023, 3, 15)
    },
    {
      id: "e4",
      title: "New Desk",
      amount: "324.67",
      date: new Date(2023, 4, 20)
    }
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
