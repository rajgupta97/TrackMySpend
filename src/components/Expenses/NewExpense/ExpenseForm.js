import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (prop) => {
  //generating todays date
  // var today = new Date();
  // var dd = today.getDate();
  // var mm = today.getMonth() + 1; //January is 0!
  // var yyyy = today.getFullYear();

  // if (dd < 10) {
  //   dd = "0" + dd;
  // }

  // if (mm < 10) {
  //   mm = "0" + mm;
  // }

  // today = yyyy + "-" + mm + "-" + dd;
  // handeling various events
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      cost: "$" + enteredAmount,
      date: new Date(enteredDate),
    };
    if (enteredDate && enteredAmount && enteredTitle)
      prop.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__contol">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__contol">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__contol">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={prop.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
