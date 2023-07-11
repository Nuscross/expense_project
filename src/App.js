import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "294.67",
      date: new Date(2023, 1, 5),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: "304.67",
      date: new Date(2023, 2, 10),
    },
    {
      id: "e3",
      title: "New TV",
      amount: "314.67",
      date: new Date(2023, 3, 15),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: "324.67",
      date: new Date(2023, 4, 20),
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
