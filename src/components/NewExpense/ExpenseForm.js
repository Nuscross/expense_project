import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
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

  // const inputChange = (inputCase, value) => {
  //   if (inputCase === "title") {
  //     setTitleUpdate(value);
  //   } else if (inputCase === "amount") {
  //     setAmountUpdate(value);
  //   } else {
  //     setDateUpdate(value);
  //   }
  // };

  const submitForm = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    // console.log("In ExpenseForm");
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setTitleUpdate("");
    setAmountUpdate("");
    setDateUpdate("");
  };

  return (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="text" value={enterTitle} onChange={titleUpdate} />
          {/* <input
            type="text"
            onChange={(event) => inputChange("title", event.target.value)}
          /> */}
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountUpdate}
          />
          {/* <input
            type="text"
            onChange={(event) => inputChange("amount", event.target.value)}
          /> */}
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enterDate}
            onChange={dateUpdate}
          />
          {/* <input
            type="text"
            onChange={(event) => inputChange("date", event.target.value)}
          /> */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelAddExpense}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
