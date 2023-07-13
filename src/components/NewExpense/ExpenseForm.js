import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enterTitle, setTitleUpdate] = useState("");
  const [enterAmount, setAmountUpdate] = useState("");
  const [enterDate, setDateUpdate] = useState("");
  //   const [userInput,setUserInput] = useState({
  //     enterTitle = "",
  //     enterAmount = "",
  //     enterDate = "",
  //   });

  const titleUpdate = (event) => {
    setTitleUpdate(event.target.value);
    // setUserInput((prevState) => {
    //     return { ...prevState, setTitleUpdate(event.target.value) }
    // });
  };
  const amountUpdate = (event) => {
    setAmountUpdate(event.target.value);
    // setUserInput((prevState) => {
    //     return { ...prevState, setAmountUpdate(event.target.value) }
    // });
  };
  const dateUpdate = (event) => {
    setDateUpdate(event.target.value);
    // setUserInput((prevState) => {
    //     return { ...prevState, setDateUpdate(event.target.value) }
    // });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="text" onChange={titleUpdate} />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input type="number" min="0.01" step="0.01" onChange={amountUpdate} />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateUpdate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
