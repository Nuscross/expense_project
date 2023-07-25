import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [showAddExpense, setShowAddExpense] = useState(false);

  const addExpense = () => {
    setShowAddExpense(true);
  };

  const cancelAddExpense = () => {
    setShowAddExpense(false);
  };

  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    // console.log("In NewExpense");
    // console.log(expenseData);
    props.onAddExpenseData(expenseData);
    setShowAddExpense(false);
  };

  return (
    <div className="new-expense">
      {showAddExpense == false && (
        <button onClick={addExpense}>Add New Expense</button>
      )}
      {showAddExpense == true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelAddExpense={cancelAddExpense}
        />
      )}
    </div>
  );
}

export default NewExpense;
